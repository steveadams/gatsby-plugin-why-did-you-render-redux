/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

function IconSearch({className}: {className?: string}) {
  return (
    <svg
      className={className}
      fill="none"
      fillRule="evenodd"
      height="60"
      stroke="#444"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 60 60"
      width="60">
      <circle cx="34.5" cy="27.5" fill="#CFE9FF" r="13.5" stroke="none" />
      <circle cx="32.5" cy="25.5" fill="#FFF" r="11.5" stroke="none" />
      <path d="M17.09 29h-14" stroke="#FFEFC6" />
      <path d="M20.043 39H6.1" stroke="#FFD0D8" />
      <path d="M20 18H6" stroke="#D0FDC2" />
      <path d="M44 38l9.5 9.5" />
      <rect
        fill="#9FC3FF"
        height="14.971"
        rx="2"
        transform="rotate(-45 52.707 46.707)"
        width="4"
        x="50.707"
        y="39.222"
      />
      <path d="M16 27.029H2M18.954 37H5.01m13.944-21H5.01" />
      <circle cx="34.5" cy="27.5" r="13.5" />
    </svg>
  );
}

export default React.memo(IconSearch);
