/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

function IconList({className}: {className?: string}) {
  return (
    <svg
      className={className}
      clipRule="evenodd"
      fillRule="evenodd"
      height={48}
      stroke="#444"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 48 48"
      width={48}>
      <path
        d="M40 6c0-1.656-1.344-3-3-3H11C9.344 3 8 4.344 8 6v35c0 1.656 1.344 3 3 3h26c1.656 0 3-1.344 3-3V6z"
        fill="#fff"
      />
      <circle cx={15} cy={10} fill="#cfe9ff" r={3} />
      <path d="M22.438 10h13.125" fill="none" />
      <circle cx={15} cy={19} fill="#cfe9ff" r={3} />
      <path d="M22.438 19h13.125" fill="none" />
      <circle cx={15} cy={28} fill="#cfe9ff" r={3} />
      <path d="M22.438 28h13.125" fill="none" />
      <circle cx={15} cy={37} fill="#cfe9ff" r={3} />
      <path d="M22.438 37h13.125" fill="none" />
    </svg>
  );
}

export default React.memo(IconList);
