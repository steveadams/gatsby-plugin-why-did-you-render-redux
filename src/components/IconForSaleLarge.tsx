/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

function ForSaleLargeIcon({className}: {className?: string}) {
  return (
    <svg
      className={className}
      clipRule="evenodd"
      fillRule="evenodd"
      height="60"
      strokeLinecap="round"
      strokeLinejoin="round"
      transform="matrix(1.21508 -.00114 .00117 1.24938 3.514 -.09)"
      viewBox="0 0 60 60"
      width="60">
      <path d="M1.337 28.768l20 16.424L43.2 18.726 40 2.506 22.8 2.5 1.337 28.768z" fill="#d0fdc2" fillRule="nonzero" />
      <path
        d="M39.9 2.3l-3.225.019L39.7 17.5 18.959 43.24l2.377 1.952L43.2 18.726 39.9 2.3z"
        fill="#fff"
        fillRule="nonzero"
      />
      <path
        d="M1.337 28.768l20 16.424L43.2 18.726 40 2.506 22.8 2.5 1.337 28.768z"
        fill="none"
        stroke="#444"
        strokeWidth="1.62"
      />
      <circle cx="33.4" cy="10.3" fill="#fff" r="2.9" stroke="#444" strokeWidth="1.62" />
    </svg>
  );
}

export default React.memo(ForSaleLargeIcon);
