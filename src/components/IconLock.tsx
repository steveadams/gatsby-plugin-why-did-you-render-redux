/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

function IconLock({className}: {className?: string}) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      stroke="#444"
      strokeWidth={2}
      fill="#D0FDC2"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}>
      <path d="M18 21v-8c0-3 2-6 6-6s6 3 6 6v8c0 2.5 5 5.21 5 0v-9c0-3.505-1.875-10-11-10-8.125 0-11 6.495-11 10v9c0 2.847 5 3 5 0z" />
      <path
        d="M6.458 40.47c0 4.096 10.476 4.68 17.46 4.68s18.624-1.17 18.624-4.68V22.915c0-2.926-11.64-3.511-18.624-3.511-6.984 0-17.46.585-17.46 3.51V40.47z"
        stroke="none"
      />
      <path
        fill="#FFF"
        d="M6.458 38.555c0 3.723 9.124 4.255 15.207 4.255s16.221-1.064 16.221-4.255v-15.96c0-2.66-10.138-3.191-16.22-3.191-6.084 0-15.208.532-15.208 3.192v15.959z"
        stroke="none"
      />
      <path
        fill="none"
        d="M6 40c0 4.41 10.452 5 17 5 7.387 0 19-1 19-5V23c0-3.41-11.613-4-19-4-6.548 0-17 .59-17 4v17z"
      />
      <path d="M21.96 31.732a3.512 3.512 0 0 1-1.378-2.795 3.502 3.502 0 0 1 3.492-3.511 3.502 3.502 0 0 1 3.492 3.51 3.512 3.512 0 0 1-1.417 2.825L28 37.5s-1.891.5-3.926.5S20 37.5 20 37.5l1.96-5.768z" />
    </svg>
  );
}

export default React.memo(IconLock);
