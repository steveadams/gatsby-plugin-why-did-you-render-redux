/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

function IconSemaphore({className}: {className?: string}) {
  return (
    <svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      stroke="#444"
      strokeWidth={2}
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}>
      <path
        fill="#CFE9FF"
        d="M43 9h10l-1 4c-1 0-2.5.5-4.5 2S43 21 43 21m0 3h10l-1 4c-1 0-2.5.5-4.5 2S43 36 43 36m0 3h10l-1 4c-1 0-2.5.5-4.5 2S43 51 43 51M17 9H7l1 4c1 0 2.5.5 4.5 2s4.5 6 4.5 6m0 3H7l1 4c1 0 2.5.5 4.5 2s4.5 6 4.5 6m0 3H7l1 4c1 0 2.5.5 4.5 2s4.5 6 4.5 6"
      />
      <path
        fill="#FFF"
        d="M17 6.001A3.002 3.002 0 0 1 20.008 3h19.984A3 3 0 0 1 43 6.001V53a3.002 3.002 0 0 1-3.008 3H20.008A3 3 0 0 1 17 52.999V6z"
      />
      <ellipse fill="#FF9AAA" cx={29.831} cy={14.933} rx={5.555} ry={5.563} stroke="none" />
      <ellipse fill="#FFDCA1" cx={29.831} cy={29.768} rx={5.555} ry={5.563} stroke="none" />
      <ellipse fill="#B0EE9B" cx={29.831} cy={45.531} rx={5.555} ry={5.563} stroke="none" />
      <circle fill="none" cx={30} cy={15} r={6} />
      <circle fill="none" cx={30} cy={30} r={6} />
      <circle fill="none" cx={30} cy={45} r={6} />
    </svg>
  );
}

export default React.memo(IconSemaphore);
