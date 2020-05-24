/* Copyright 2005-present Instant Domain Search, Inc. */

// no-object-literal-type-assertion in generics, see:
//  https://github.com/palantir/tslint/issues/4239 tslint is strict
//  https://www.typescriptlang.org/docs/handbook/advanced-types.html uses {} as T

const parseQueryString = (query: string): {[key: string]: string} => {
  const parsed: {[key: string]: string} = {};
  for (const param of query.split('&')) {
    const [key, val] = param.split('=', 2);
    if (val && val.length) {
      parsed[key] = decodeURIComponent(val);
    }
  }
  return parsed;
};

export const parseLocation = ({hash}: Location): Record<string, unknown> => {
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
