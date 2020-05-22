/* Copyright 2005-present Instant Domain Search, Inc. */

// no-object-literal-type-assertion in generics, see:
//  https://github.com/palantir/tslint/issues/4239 tslint is strict
//  https://www.typescriptlang.org/docs/handbook/advanced-types.html uses {} as T

const parseQueryString = (query: string): {[key: string]: string} | URLParams => {
  const parsed: {[key: string]: string} = {};
  for (const param of query.split('&')) {
    const [key, val] = param.split('=', 2);
    if (val && val.length) {
      parsed[key] = decodeURIComponent(val);
    }
  }
  return parsed;
};

export const parseLocation = ({hash}: Location): URLParams => {
  if (hash.substr(0, 1) === '#') {
    return parseQueryString(hash.substring(1)) as URLParams;
  }

  // @todo This isn't ideal, the construction of URLParams should probably be more explicit
  // so TS can know if fields are defined or not
  return {
    search: undefined,
    campaign: undefined,
  };
};

export const encodeQueryString = (obj: {[key: string]: string}): string => {
  return Object.entries(obj)
    .map((parts: [string, string]) => parts.map(encodeURIComponent).join('='))
    .join('&');
};
