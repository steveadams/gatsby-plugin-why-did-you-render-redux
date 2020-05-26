/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

function IconCoupon({className}: {className?: string}) {
  return (
    <svg
      className={className}
      fill="none"
      fillRule="evenodd"
      height={48}
      stroke="#444"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 48 48"
      width={48}>
      <path
        d="M7 2c3.314 0 6 2.5 6 6 0 1-.164 2.009 0 2.5.5 1.5 2 2 3 2.5s28.5 12 28.5 12c-1.5 3.5-4 2.5-5.5 2-3-1-17.752-6.965-19-7.5-3.5-1.5-3-3-5-4l-3.88-1.704C10.379 13.471 8.122 14 7 14A6 6 0 1 1 7 2z"
        fill="#FFF"
      />
      <circle cx={7} cy={8} r={3} />
      <rect fill="#FFD0D8" height={26} rx={2} strokeDasharray="4,4" width={25} x={22} y={18} />
      <path d="M38.045 28.455C38.045 27 36.5 26.5 35 26.5s-3 .5-3 1.955c0 2.863 6.045 1.863 6.045 5.045 0 1.591-1.454 2.5-3.045 2.5s-3-.727-3-2m3-7.773v-1.909m0 13.364V36" />
      <path
        d="M7 32c3.314 0 6-2.5 6-6 0-1-.164-2.01 0-2.5.5-1.5 2-2 3-2.5S44.5 9 44.5 9c-1.5-3.5-4-2.5-5.5-2-3 1-17.752 6.965-19 7.5-3.5 1.5-3 3-5 4l-3.88 1.704C10.38 20.529 8.122 20 7 20a6 6 0 1 0 0 12z"
        fill="#FFF"
      />
      <circle cx={7} cy={26} r={3} />
      <circle cx={20} cy={17} fill="#444" r={1} stroke="none" />
    </svg>
  );
}

export default React.memo(IconCoupon);
