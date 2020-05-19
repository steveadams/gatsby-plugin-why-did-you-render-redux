/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

function IconGrid({className}: {className?: string}) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fillRule="evenodd"
      strokeWidth={2}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="#444"
      className={className}>
      <circle fill="#FFEFC6" cx={26.964} cy={18.551} r={10.551} stroke="none" />
      <circle fill="#FFF" cx={25.401} cy={16.988} r={8.988} stroke="none" />
      <path stroke="#FFEFC6" d="M13.665 28H2.767m10.864-14H2.69" />
      <path d="M34.388 26.757l7.425 7.425" />
      <path
        fill="#FFEFC6"
        d="M37.059 31.638a1.56 1.56 0 0 1-.002-2.212 1.562 1.562 0 0 1 2.212.002l6.06 6.059a1.56 1.56 0 0 1 .001 2.212c-.61.61-1.598.613-2.212-.002l-6.06-6.059z"
      />
      <path d="M12.813 26H1.916" />
      <path stroke="#FFEFC6" d="M13.665 21H2.767" />
      <path d="M12.813 19H1.916m10.897-7H1.916" />
      <path stroke="#FFEFC6" d="M13.631 35H2.69" />
      <path d="M12.813 33H1.916" />
      <path stroke="#FFEFC6" d="M31.631 35H20.69" />
      <path d="M30.813 33H19.916" />
      <circle cx={26.964} cy={18.551} r={10.551} />
    </svg>
  );
}

export default React.memo(IconGrid);
