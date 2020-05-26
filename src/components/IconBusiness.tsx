/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

function IconBusiness({className}: {className?: string}) {
  return (
    <svg
      className={className}
      fill="#FFEFC6"
      fillRule="evenodd"
      height={48}
      stroke="#444"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 48 48"
      width={48}>
      <path d="M4 14h40v28H4z" fill="#FFF" />
      <path d="M2 13v3.515C2 18.618 3.467 20 5.667 20c2.2 0 3.666-1.802 3.666-3.083C9.333 18.197 10.72 20 13 20c2.12 0 3.667-1.802 3.667-3.083 0 1.28 1.466 3.083 3.666 3.083S24 18.198 24 16.917C24 18.197 25.467 20 27.667 20c2.2 0 3.666-1.802 3.666-3.083C31.333 18.197 32.8 20 35 20c2.2 0 3.667-1.802 3.667-3.083 0 1.28 1.428 3.083 3.666 3.083C44.572 20 46 18.618 46 16.515V13H2z" />
      <path d="M33 30.5c3.84-3.071 6-7.5 6-7.5v12H24s5.16-1.429 9-4.5z" stroke="none" />
      <path d="M9 23h11v19H9zM2 13L7.704 3h32.592L46 13z" />
      <circle cx={17} cy={32} fill="#444" r={1} stroke="none" />
      <path d="M24 23h15v12H24z" fill="none" />
      <path
        d="M2 42.999c0-.552.45-.999 1.002-.999h41.996a.997.997 0 0 1 1.002.999v1.002c0 .552-.45.999-1.002.999H3.002A.997.997 0 0 1 2 44.001v-1.002z"
        fill="#FFF"
      />
    </svg>
  );
}

export default React.memo(IconBusiness);
