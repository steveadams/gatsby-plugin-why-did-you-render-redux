/* Copyright 2005-present Instant Domain Search, Inc. */

const parseQueryString = (query: string): Record<string, string> => {
  const parsed: Record<string, string> = {};
  for (const param of query.split('&')) {
    const [key, val] = param.split('=', 2);
    if (val && val.length) {
      parsed[key] = decodeURIComponent(val);
    }
  }
  return parsed;
};

export const parseLocation = ({hash}: Location): Record<string, string> => {
  if (hash.substr(0, 1) === '#') {
    return parseQueryString(hash.substring(1));
  }

  return {};
};

export const encodeQueryString = (obj: {[key: string]: string}): string => {
  return Object.entries(obj)
    .map((parts: [string, string]) => parts.map(encodeURIComponent).join('='))
    .join('&');
};
