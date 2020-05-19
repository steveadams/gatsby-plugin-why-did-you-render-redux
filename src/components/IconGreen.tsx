/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

function IconGreen({className}: {className?: string}) {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      stroke="#6DCF33"
      strokeWidth={2}
      fillRule="evenodd"
      strokeLinejoin="round"
      className={className}>
      <circle fill="#FFF" strokeLinecap="square" cx={20} cy={20} r={18} />
      <path fill="none" strokeLinecap="round" d="M13 19l5 5 9-8" />
    </svg>
  );
}

export default React.memo(IconGreen);
