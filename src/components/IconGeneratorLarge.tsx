/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

function IconGeneratorLarge({className}: {className?: string}) {
  return (
    <svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      stroke="#444"
      strokeWidth={2}
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}>
      <circle fill="#9FC3FF" cx={50.5} cy={32.5} r={5.5} />
      <path fill="#FFF8CF" d="M4 10.008A5 5 0 0 1 9 5h36a5 5 0 0 1 5 5.008V52H4V10.008z" />
      <path
        fill="#CFE9FF"
        d="M1 53a1 1 0 0 1 .992-1h50.016c.548 0 .992.444.992 1v3a1 1 0 0 1-.992 1H1.992A.994.994 0 0 1 1 56v-3z"
      />
      <path fill="#D0FDC2" d="M16 48h22v4H16z" />
      <circle fill="#FFD0D8" cx={14.5} cy={32.5} r={2.5} />
      <circle fill="#FFEFC6" cx={27} cy={32.5} r={2.5} />
      <circle fill="#D0FDC2" cx={39.5} cy={32.5} r={2.5} />
      <circle fill="#FFD0D8" cx={55} cy={10} r={2} />
      <path fill="#FFD0D8" d="M9 41h36v4H9z" />
      <path fill="#FFF" d="M9 10h36v16H9z" />
      <path fill="none" d="M55 28.5v-15M21 24V12m12 12V12" strokeLinecap="square" />
      <path
        fill="#444"
        fillRule="nonzero"
        d="M40.094 11h2.058c.005.07.007.142.007.215 0 .916-.434 1.712-1.168 2.135l1.338 2.509a.3.3 0 0 1-.265.441h-1.67a.302.302 0 0 1-.267-.163l-1.229-2.391h-.723V16a.3.3 0 0 1-.3.3H36.4a.3.3 0 0 1-.3-.3v-5h2v1.116h1.047c.601 0 .953-.364.953-.981a1.49 1.49 0 0 0-.006-.135z"
        stroke="none"
      />
      <path
        fill="#444"
        d="M42.177 25h-2.075c-.045-.225-.303-.38-.971-.524l-.917-.195c-1.412-.295-2.153-1.076-2.153-2.305 0-1.509 1.216-2.503 2.995-2.503 1.702 0 2.945.982 2.996 2.414a.3.3 0 0 1-.3.31h-1.387a.3.3 0 0 1-.298-.263c-.048-.392-.429-.664-1.001-.664-.593 0-.925.236-.925.579 0 .252.221.416.924.566l.849.18c1.54.324 2.265 1.042 2.265 2.296l-.002.109zm-4.254 0h-2.02a.3.3 0 0 1 .297-.258h1.426a.3.3 0 0 1 .297.258z"
        stroke="none"
      />
      <path
        fill="#444"
        fillRule="nonzero"
        d="M16 21.19a.3.3 0 0 1-.3.3h-1.4a.3.3 0 0 1-.3-.3V14.5a.3.3 0 0 1 .3-.3h1.4a.3.3 0 0 1 .3.3v6.69zm8.3-6.99h2.773c2.266 0 3.606 1.409 3.606 3.777 0 2.447-1.322 3.874-3.606 3.874H24.3a.3.3 0 0 1-.3-.3V14.5a.3.3 0 0 1 .3-.3zm1.475 1.56v4.531h1.064c1.304 0 2.036-.8 2.036-2.29 0-1.426-.757-2.241-2.036-2.241h-1.064z"
        stroke="none"
      />
    </svg>
  );
}

export default React.memo(IconGeneratorLarge);
