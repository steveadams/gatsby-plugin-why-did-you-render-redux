/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

function IconBlue({className}: {className?: string}) {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      stroke="#3286DC"
      strokeWidth={2}
      fillRule="evenodd"
      strokeLinejoin="round"
      fill="none"
      strokeLinecap="round"
      className={className}>
      <circle fill="#FFF" strokeLinecap="square" cx={20} cy={20} r={18} />
      <path d="M24 16c0-2.5-2.5-3.5-4-3.5s-4 .5-4 3.5c0 4.5 9 2.5 9 7.5 0 2.5-2.5 4-5 4S15 26 15 24m5-11.5v-3m0 21v-3" />
    </svg>
  );
}

export default React.memo(IconBlue);
