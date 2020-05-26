/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

function IconGenerator({className}: {className?: string}) {
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
      <clipPath id="a">
        <path d="M0 0h48v48H0z" />
      </clipPath>
      <g clipPath="url(#a)">
        <circle
          cx="50.5"
          cy="32.5"
          fill="#9fc3ff"
          r="5.5"
          stroke="#444"
          strokeWidth="2.49"
          transform="translate(1.285 -1.27) scale(.80357)"
        />
        <path
          d="M4 10.008V10c0-2.743 2.257-5 5-5h36c2.743 0 5 2.257 5 5v42H4V10.008z"
          fill="#fff8cf"
          stroke="#444"
          strokeWidth="2.49"
          transform="matrix(.80439 0 0 .80851 1.282 -1.043)"
        />
        <path
          d="M1 53c0-.546.446-.996.992-1h50.016c.548 0 .992.444.992 1v3c0 .546-.446.996-.992 1H1.992A.998.998 0 0 1 1 56.006V53z"
          fill="#cfe9ff"
          stroke="#444"
          strokeWidth="2.48"
          transform="matrix(.8077 0 0 .8 1.192 -.6)"
        />
        <path
          d="M16 48h22v4H16z"
          fill="#d0fdc2"
          stroke="#444"
          strokeWidth="2.39"
          transform="matrix(.79546 0 0 .875 1.272 -4.5)"
        />
        <circle
          cx="14.5"
          cy="32.5"
          fill="#ffd0d8"
          r="2.5"
          stroke="#444"
          strokeWidth="2.49"
          transform="translate(1.356 -1.107) scale(.80357)"
        />
        <circle
          cx="27"
          cy="32.5"
          fill="#ffefc6"
          r="2.5"
          stroke="#444"
          strokeWidth="2.49"
          transform="translate(1.312 -1.107) scale(.80357)"
        />
        <circle
          cx="39.5"
          cy="32.5"
          fill="#d0fdc2"
          r="2.5"
          stroke="#444"
          strokeWidth="2.49"
          transform="matrix(.8 0 0 .8 1.4 -1)"
        />
        <circle
          cx="55"
          cy="10"
          fill="#ffd0d8"
          r="2"
          stroke="#444"
          strokeWidth="1.87"
          transform="translate(1.285 -.429) scale(.80357)"
        />
        <path
          d="M9 41h36v4H9z"
          fill="#ffd0d8"
          stroke="#444"
          strokeWidth="2.38"
          transform="matrix(.80556 0 0 .875 1.25 -4.375)"
        />
        <path
          d="M9 10h36v16H9z"
          fill="#fff"
          stroke="#444"
          strokeWidth="2.43"
          transform="matrix(.83333 0 0 .8125 .5 -1.125)"
        />
        <path
          d="M55 28.5v-15 15z"
          fill="none"
          stroke="#444"
          strokeLinecap="square"
          strokeWidth="2.49"
          transform="matrix(.80357 0 0 .8 1.303 -1.3)"
        />
        <path
          d="M18.03 20L18 7l.03 13zm9.98 0L28 7l.01 13z"
          fill="none"
          stroke="#444"
          strokeLinecap="square"
          strokeWidth="2.001"
        />
        <path
          d="M33.687 7.7h1.643c.004.057.005.115.005.174 0 .744-.346 1.39-.932 1.733l1.068 2.035a.247.247 0 0 1 .028.115.242.242 0 0 1-.24.243h-1.332a.24.24 0 0 1-.214-.132l-.98-1.94h-.578v1.829a.242.242 0 0 1-.24.243H30.74a.242.242 0 0 1-.24-.243V7.7h1.596v.905h.836c.48 0 .76-.295.76-.795 0-.037 0-.073-.004-.11z"
          fill="#444"
          fillRule="nonzero"
        />
        <path
          d="M35.497 19.5h-1.653c-.035-.183-.241-.31-.773-.427l-.73-.158c-1.126-.24-1.716-.876-1.716-1.877 0-1.229.969-2.038 2.386-2.038 1.356 0 2.346.8 2.387 1.965v.009a.242.242 0 0 1-.24.244h-1.104a.242.242 0 0 1-.238-.214c-.038-.32-.341-.54-.797-.54-.472 0-.737.191-.737.47 0 .206.176.34.736.461l.677.147c1.226.264 1.804.848 1.804 1.87l-.002.088zm-3.389 0H30.5a.242.242 0 0 1 .237-.21h1.136c.118 0 .22.09.236.21zM14 16.253c0 .136-.102.247-.226.247h-1.05c-.124 0-.225-.111-.225-.247v-5.506c0-.136.101-.247.225-.247h1.05c.124 0 .225.111.225.247v5.506zm8.8.247h-2.076a.232.232 0 0 1-.225-.235v-5.53a.23.23 0 0 1 .225-.235H22.8c1.696 0 2.699 1.105 2.699 2.962 0 1.92-.99 3.038-2.7 3.038zm-.175-4.776h-.797v3.553h.797c.976 0 1.524-.628 1.524-1.796 0-1.118-.567-1.757-1.524-1.757z"
          fill="#444"
        />
      </g>
    </svg>
  );
}

export default React.memo(IconGenerator);
