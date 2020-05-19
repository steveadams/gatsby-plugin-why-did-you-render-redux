/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

function IconBuyDomains({className}: {className?: string}) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      className={className}>
      <path
        d="M-8.819-8.819H8.819"
        fill="none"
        stroke="#444545"
        strokeWidth="1.86"
        transform="matrix(0 1.07728 1.07413 0 36.972 14.472)"
      />
      <path
        d="M17.043 33.915L38.001 34c.214 0 3.542-.818 4.08-3.288.429-1.826 2.747-13.168 3.391-16.712h-9.451c.433.044 3.493.8 4.52 1.105.169.05.91.836.822 1.373-.575 3.488-1.826 11.385-2.149 12.89C38.57 31.837 36.044 32 35.83 32H17c-3.812-.102-4.655-6.898-5.085-7.543.43 1.397.213 9.423 5.128 9.458z"
        fill="#d0fdc2"
        fillRule="nonzero"
      />
      <path
        d="M2 7h7l3.781 22.643s.753 4.29 5.22 4.357C22.497 34.07 38 34 38 34s3.337-.033 4.248-3.878C43.158 26.275 45.47 14 45.47 14H33M20.564 14H10.169"
        fill="none"
        stroke="#444"
        strokeWidth="1.9978818000000003"
        strokeLinejoin="miter"
        strokeMiterlimit="2"
      />
      <path
        d="M20.564 19l6.936 5.626L34.436 19"
        fill="none"
        stroke="#444"
        strokeWidth="1.9978818000000003"
        strokeMiterlimit="2"
      />
      <circle
        cx="16.885"
        cy="40.114"
        r="3.322"
        fill="#d0fdc2"
        stroke="#444"
        strokeWidth="1.9"
        strokeMiterlimit="2"
        transform="translate(.21 -.766) scale(1.05365)"
      />
      <circle
        cx="16.885"
        cy="40.114"
        r="3.322"
        fill="#d0fdc2"
        stroke="#444"
        strokeWidth="1.9"
        strokeMiterlimit="2"
        transform="translate(19.21 -.766) scale(1.05365)"
      />
    </svg>
  );
}

export default React.memo(IconBuyDomains);
