/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

function IconRed({className}: {className?: string}) {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      stroke="#FD245C"
      strokeWidth={2}
      fillRule="evenodd"
      strokeLinejoin="round"
      fill="none"
      strokeLinecap="round"
      className={className}>
      <circle fill="#FFF" strokeLinecap="square" cx={20} cy={20} r={18} />
      <path d="M15 15l10 10m-10 0l10-10" />
    </svg>
  );
}

export default React.memo(IconRed);
