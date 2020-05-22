/* Copyright 2005-present Instant Domain Search, Inc. */

import * as log from './log';
import {encodeQueryString} from './url';
import {AnalyticsEvent} from './analytics';

const timeout = 10 * 1000; // google load balancer timeout is 30s; nominl timeout is 5s

type JSONRequest = {
  requestType?: 'json';
  body?: Record<string, unknown> | AnalyticsEvent[];
};

type FormRequest = {
  requestType: 'form';
  body: {[key: string]: string};
};

type TextRequest = {
  requestType: 'text';
  body: string;
};

type JSONResponse<R> = {
  responseType?: 'json';
  success: (response: R) => void;
};

type EmptyResponse = {
  responseType?: 'empty';
  success: () => void;
};

type TextResponse = {
  responseType: 'text';
  success: (response: string) => void;
};

type RequestCommon = {
  method?: 'GET' | 'POST';
  url: string;
  streaming?: boolean;
  error?: (status: number) => void;
};

type RequestOptions<R> = RequestCommon &
  (JSONRequest | TextRequest | FormRequest) &
  (JSONResponse<R> | TextResponse | EmptyResponse);

export const request = <R>({
  method: m,
  url,
  body,
  requestType = 'json',
  responseType = 'json',
  streaming = false, // streaming = true can break on large messages, could use some testing here...
  success,
  error,
}: RequestOptions<R>): void => {
  const nobody = body === void 0;
  const method = m || (nobody ? 'GET' : 'POST');

  const xhr = new XMLHttpRequest();

  let streamedResponses = 0;
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4 && xhr.readyState !== 3) {
      return;
    }

    // IE <=9 does not support streaming
    type IETypeOf = typeof xhr.status | 'unknown';

    const supportsStreaming =
      (typeof xhr.status as IETypeOf) !== 'unknown' && (typeof xhr.responseText as IETypeOf) !== 'unknown';

    if ((!streaming || !supportsStreaming) && xhr.readyState === 3) {
      return;
    }

    const {status, responseText} = xhr;

    // status error, early return
    if (status !== 200) {
      log.error(log.Module.Async, `${method} ${url} failed with status ${status} and body: ${responseText}`);
      error && error(status);
      return;
    }

    let responses;
    if (streaming) {
      // TODO: add unit tests for this
      responses = responseText
        .split('\n')
        .map(text => text.trim())
        .filter(text => text.length > 0)
        .slice(streamedResponses);
      streamedResponses += responses.length;
    } else {
      responses = [responseText];
    }

    responses.forEach(response => {
      // convert response according to responseType
      switch (responseType) {
        case 'empty':
          if (response.trim().length < 1) {
            (success as () => void)();
          } else {
            log.error(log.Module.Async, `response.length > 1, expected empty: ${url}`);
          }
          break;
        case 'json':
          if (response.length < 1) {
            log.error(log.Module.Async, `response.length < 1: ${url}`);
            break;
          }
          try {
            // note that IE expects trimmed responseText in JSON.parse
            (success as (res: R) => void)(JSON.parse(response.trim()) as R);
          } catch (e) {
            log.error(
              log.Module.Async,
              `error parsing response at ${url}; json: ${response}; text: ${responseText}`,
              e,
            );
            error && error(e);
          }
          break;
        case 'text':
          (success as (res: string) => void)(response);
          break;
        default:
          log.error(log.Module.Async, `unknown responseType "${responseType}"`);
          break;
      }
    });
  };

  xhr.open(method, url, true);
  xhr.timeout = timeout;

  if (body === void 0) {
    xhr.send();
  } else {
    let bodyText: string;
    let contentType: string;

    // convert body according to requestType
    switch (requestType) {
      case 'form':
        bodyText = encodeQueryString(body as {[key: string]: string});
        contentType = 'application/x-www-form-urlencoded';
        break;
      case 'json':
        bodyText = JSON.stringify(body);
        contentType = 'application/json';
        break;
      case 'text':
        bodyText = body as string;
        contentType = 'text/plain';
        break;
      default:
        log.error(log.Module.Async, 'Unexpected requestType: ', requestType);
        return;
    }

    xhr.setRequestHeader('Content-Type', contentType);
    xhr.send(bodyText);
  }
};

export const requestWithRetries = <R>({
  tries = 3,
  delay = 1000,
  ...requestOptions
}: {tries?: number; delay?: number} & RequestOptions<R>): void => {
  request({
    ...requestOptions,
    error: (status: number) => {
      if (tries <= 0) {
        requestOptions.error && requestOptions.error(status);
        return;
      }
      setTimeout(() => {
        log.info('Retrying request', requestOptions.method, requestOptions.url, status);
        requestWithRetries({tries: tries - 1, delay: delay * 2, ...requestOptions} as {
          tries?: number;
          delay?: number;
        } & RequestOptions<R>);
      }, delay);
    },
  } as RequestOptions<R>);
};
