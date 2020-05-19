/* Copyright 2005-present Instant Domain Search, Inc. */

import {DomainStatus, status} from './domain';

export const compare = (a: Domain, b: Domain): number => {
  // in order: names by rank, then others by not taken / taken then rank
  const thisIsName = a.search === 'name';
  const otherIsName = b.search === 'name';

  if (a.search === 'fix' && b.search === 'fix') {
    return b.rank - a.rank || a.label.localeCompare(b.label);
  } else if (a.search === 'name' && b.search === 'name') {
    return b.rank - a.rank || a.label.localeCompare(b.label) || a.tld.localeCompare(b.tld);
  } else if (a.search === 'after' && b.search === 'after' && a.rank !== undefined && b.rank !== undefined) {
    return b.rank - a.rank || a.label.localeCompare(b.label);
  } else if (thisIsName && !otherIsName) {
    return -1;
  } else if (!thisIsName && otherIsName) {
    return 1;
  } else if (!thisIsName && !otherIsName) {
    const thisIsTaken = status(a) === DomainStatus.taken;
    const otherIsTaken = status(b) === DomainStatus.taken;
    if (thisIsTaken && !otherIsTaken) {
      return 1;
    } else if (!thisIsTaken && otherIsTaken) {
      return -1;
    }
  }

  return 0;
};
