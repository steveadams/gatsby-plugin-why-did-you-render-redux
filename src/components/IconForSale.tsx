/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

function IconForSale({className}: {className?: string}) {
  return (
    <svg
      className={className}
      clipRule="evenodd"
      fillRule="evenodd"
      height="48"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 48 48"
      width="48">
      <path d="M0 0h48v48H0z" fill="none" />
      <clipPath id="for-sale">
        <path d="M0 0h48v48H0z" />
      </clipPath>
      <g clipPath="url(#for-sale)">
        <path
          d="M1.337 28.768l20 16.424L43.2 18.726 40 2.506 22.8 2.5 1.337 28.768z"
          fill="#d0fdc2"
          fillRule="nonzero"
        />
        <path
          d="M40 2.506l-3.282-.001L39.7 17.5 18.879 43.174l2.457 2.018L43.2 18.726 40 2.506z"
          fill="#fff"
          fillRule="nonzero"
        />
        <path
          d="M1.337 28.768l20 16.424L43.2 18.726 40 2.506 22.8 2.5 1.337 28.768z"
          fill="none"
          stroke="#444"
          strokeWidth="2"
        />
        <circle cx="33.4" cy="10.3" fill="#fff" r="2.9" stroke="#444" strokeWidth="2" />
      </g>
    </svg>
  );
}

export default React.memo(IconForSale);
