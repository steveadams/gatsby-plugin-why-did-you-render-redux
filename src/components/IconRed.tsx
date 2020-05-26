/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

function IconRed({className}: {className?: string}) {
  return (
    <svg
      className={className}
      fill="none"
      fillRule="evenodd"
      height={40}
      stroke="#FD245C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 40 40"
      width={40}>
      <circle cx={20} cy={20} fill="#FFF" r={18} strokeLinecap="square" />
      <path d="M15 15l10 10m-10 0l10-10" />
    </svg>
  );
}

export default React.memo(IconRed);
