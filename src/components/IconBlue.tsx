/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

function IconBlue({className}: {className?: string}) {
  return (
    <svg
      className={className}
      fill="none"
      fillRule="evenodd"
      height={40}
      stroke="#3286DC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 40 40"
      width={40}>
      <circle cx={20} cy={20} fill="#FFF" r={18} strokeLinecap="square" />
      <path d="M24 16c0-2.5-2.5-3.5-4-3.5s-4 .5-4 3.5c0 4.5 9 2.5 9 7.5 0 2.5-2.5 4-5 4S15 26 15 24m5-11.5v-3m0 21v-3" />
    </svg>
  );
}

export default React.memo(IconBlue);
