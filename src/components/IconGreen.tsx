/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

function IconGreen({className}: {className?: string}) {
  return (
    <svg
      className={className}
      fillRule="evenodd"
      height={40}
      stroke="#6DCF33"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 40 40"
      width={40}>
      <circle cx={20} cy={20} fill="#FFF" r={18} strokeLinecap="square" />
      <path d="M13 19l5 5 9-8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export default React.memo(IconGreen);
