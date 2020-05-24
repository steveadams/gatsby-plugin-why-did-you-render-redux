/* Copyright 2005-present Instant Domain Search, Inc. */

import * as log from './log';
import {store} from './store';
import * as url from './url';

const firstByteTimeout = 20 * 1000; // should we even time anything out?
const lastByteTimeout = 25 * 1000; // google load balancer timeout is 30s; nominl timeout is 5s

// Good writeup on streaming ajax responses:
// http://blogs.msdn.com/b/ieinternals/archive/2010/04/06/comet-streaming-in-internet-explorer-with-xmlhttprequest-and-xdomainrequest.aspx

export function request<R>(
  path: string,
  params: {[key: string]: string | number | undefined},
  onResults: (response: R[]) => void,
  onDone: () => void,
  onError: (err: number | null) => void,
) {
  const xhr = new XMLHttpRequest();

  const match = /\/services\/(.*)\/[^/]*$/.exec(path);
  const endpoint = match ? match[1] : path;

  let firstError = true;
  const onErrorOnce = (err: number | null) => {
    if (firstError) {
      onError(err);
    }
    firstError = false;
  };

  const errorTimeout = setTimeout(() => {
    // for some browsers, status cannot be read until readyState > 1
    let statusKind = '?';
    if (xhr.readyState > 1 && typeof xhr.status === 'number') {
      statusKind = `${xhr.status}`;
    }

    let responseTextKind = '?';
    if (typeof xhr.response === 'string') {
      responseTextKind = xhr.response === '' ? 'none' : 'some';
    }

    // aborting screws up .status and .response, so be sure to store those values before aborting
    xhr.onreadystatechange = () => void 0;
    xhr.ontimeout = () => void 0;
    xhr.onerror = () => void 0;
    xhr.abort(); // kill this request so it doesn't gum up the queue

    onErrorOnce(null);

    log.error(
      log.Module.StreamingAsync,
      `timeout: first byte did not come back within ${
        firstByteTimeout / 1000
      }s [endpoint:${endpoint}, status:${statusKind}, readyState:${xhr.readyState}, responseText:${responseTextKind}]`,
    );
  }, firstByteTimeout);

  xhr.ontimeout = () => {
    xhr.onreadystatechange = () => void 0;
    xhr.onerror = () => void 0;
    onErrorOnce(null);
    log.error(
      log.Module.StreamingAsync,
      `timeout: request took longer than ${lastByteTimeout / 1000}s [endpoint:${endpoint}]`,
    );
  };

  xhr.onerror = () => {
    xhr.onreadystatechange = () => void 0;
    xhr.ontimeout = () => void 0;
    clearTimeout(errorTimeout);
    onErrorOnce(null);
    log.error(log.Module.StreamingAsync, `unknown error [endpoint:${endpoint}]`);
  };

  let lastDelimiter = 0;

  xhr.onreadystatechange = () => {
    const {readyState} = xhr;

    // got bytes, assume that streaming has started
    if (readyState > 1) {
      clearTimeout(errorTimeout);
    }

    // not ready yet: return
    // 3 for partial data; 4 for complete. ignore other states.
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    if (readyState < 3) {
      return;
    }

    // weird response: return
    // IE <= 9 throws an error when trying to read responseText or status when readyState is 3. it
    // will also report responseText as unknown in readyState 3. this avoids the error. note that
    // these versions of IE do not support streaming.
    type IETypeOf = typeof xhr.status | 'unknown';
    if ((typeof xhr.status as IETypeOf) === 'unknown' && (typeof xhr.responseText as IETypeOf) === 'unknown') {
      return;
    }

    // bad status: return
    if (xhr.status !== 200) {
      // http://broadcast.oreilly.com/2010/04/ajax-readystate-is-4-but-statu.html
      if (readyState === 4 && xhr.status === 0) {
        log.error(log.Module.StreamingAsync, `xhr.status 0  [endpoint:${endpoint}]`);
      }

      // send to error handler
      onErrorOnce(xhr.status);
      return;
    }

    // no text response: return
    if (xhr.responseText === '') {
      onDone();
      return;
    }

    // parse line-delimited JSON and send to result handler
    const nextDelimiter = xhr.responseText.lastIndexOf('\n');
    if (nextDelimiter > lastDelimiter) {
      onResults(
        xhr.responseText
          .substring(lastDelimiter, nextDelimiter)
          .split('\n')
          .map(response => {
            if (response.length < 1) {
              log.error(log.Module.StreamingAsync, 'response.length < 1');
              return {};
            }

            // note that IE expects trimmed responseText in JSON.parse
            try {
              return JSON.parse(response.trim());
            } catch (e) {
              log.error(
                log.Module.StreamingAsync,
                `error parsing response json between ${lastDelimiter} and ${nextDelimiter} at endpoint:${endpoint}: ${response}`,
              );
              return {};
            }
          }),
      );
      lastDelimiter = nextDelimiter + 1;
    }

    if (xhr.readyState === 4) {
      onDone();
    }
  };

  const {
    geography: {country, city},
  } = store.getState();

  const allParams = {
    ...params,
    country,
    city,
  };

  xhr.open('GET', `${path}?${url.encodeQueryString(allParams)}`, true);

  // http://msdn.microsoft.com/en-us/library/ie/cc304105(v=vs.85).aspx
  // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
  xhr.timeout = lastByteTimeout;
  xhr.send();
}
