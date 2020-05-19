/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

function IconSearch({className}: {className?: string}) {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fillRule="evenodd"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="#444"
      className={className}>
      <circle fill="#CFE9FF" cx="34.5" cy="27.5" r="13.5" stroke="none" />
      <circle fill="#FFF" cx="32.5" cy="25.5" r="11.5" stroke="none" />
      <path stroke="#FFEFC6" d="M17.09 29h-14" />
      <path stroke="#FFD0D8" d="M20.043 39H6.1" />
      <path stroke="#D0FDC2" d="M20 18H6" />
      <path d="M44 38l9.5 9.5" />
      <rect
        fill="#9FC3FF"
        transform="rotate(-45 52.707 46.707)"
        x="50.707"
        y="39.222"
        width="4"
        height="14.971"
        rx="2"
      />
      <path d="M16 27.029H2M18.954 37H5.01m13.944-21H5.01" />
      <circle cx="34.5" cy="27.5" r="13.5" />
    </svg>
  );
}

export default React.memo(IconSearch);
