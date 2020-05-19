/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

function IconList({className}: {className?: string}) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="#444"
      strokeWidth={2}
      className={className}>
      <path
        d="M40 6c0-1.656-1.344-3-3-3H11C9.344 3 8 4.344 8 6v35c0 1.656 1.344 3 3 3h26c1.656 0 3-1.344 3-3V6z"
        fill="#fff"
      />
      <circle cx={15} cy={10} r={3} fill="#cfe9ff" />
      <path d="M22.438 10h13.125" fill="none" />
      <circle cx={15} cy={19} r={3} fill="#cfe9ff" />
      <path d="M22.438 19h13.125" fill="none" />
      <circle cx={15} cy={28} r={3} fill="#cfe9ff" />
      <path d="M22.438 28h13.125" fill="none" />
      <circle cx={15} cy={37} r={3} fill="#cfe9ff" />
      <path d="M22.438 37h13.125" fill="none" />
    </svg>
  );
}

export default React.memo(IconList);
