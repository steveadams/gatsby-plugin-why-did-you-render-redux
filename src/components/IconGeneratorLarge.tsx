/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

function IconGeneratorLarge({className}: {className?: string}) {
  return (
    <svg
      className={className}
      fillRule="evenodd"
      height={60}
      stroke="#444"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 60 60"
      width={60}>
      <circle cx={50.5} cy={32.5} fill="#9FC3FF" r={5.5} />
      <path d="M4 10.008A5 5 0 0 1 9 5h36a5 5 0 0 1 5 5.008V52H4V10.008z" fill="#FFF8CF" />
      <path
        d="M1 53a1 1 0 0 1 .992-1h50.016c.548 0 .992.444.992 1v3a1 1 0 0 1-.992 1H1.992A.994.994 0 0 1 1 56v-3z"
        fill="#CFE9FF"
      />
      <path d="M16 48h22v4H16z" fill="#D0FDC2" />
      <circle cx={14.5} cy={32.5} fill="#FFD0D8" r={2.5} />
      <circle cx={27} cy={32.5} fill="#FFEFC6" r={2.5} />
      <circle cx={39.5} cy={32.5} fill="#D0FDC2" r={2.5} />
      <circle cx={55} cy={10} fill="#FFD0D8" r={2} />
      <path d="M9 41h36v4H9z" fill="#FFD0D8" />
      <path d="M9 10h36v16H9z" fill="#FFF" />
      <path d="M55 28.5v-15M21 24V12m12 12V12" fill="none" strokeLinecap="square" />
      <path
        d="M40.094 11h2.058c.005.07.007.142.007.215 0 .916-.434 1.712-1.168 2.135l1.338 2.509a.3.3 0 0 1-.265.441h-1.67a.302.302 0 0 1-.267-.163l-1.229-2.391h-.723V16a.3.3 0 0 1-.3.3H36.4a.3.3 0 0 1-.3-.3v-5h2v1.116h1.047c.601 0 .953-.364.953-.981a1.49 1.49 0 0 0-.006-.135z"
        fill="#444"
        fillRule="nonzero"
        stroke="none"
      />
      <path
        d="M42.177 25h-2.075c-.045-.225-.303-.38-.971-.524l-.917-.195c-1.412-.295-2.153-1.076-2.153-2.305 0-1.509 1.216-2.503 2.995-2.503 1.702 0 2.945.982 2.996 2.414a.3.3 0 0 1-.3.31h-1.387a.3.3 0 0 1-.298-.263c-.048-.392-.429-.664-1.001-.664-.593 0-.925.236-.925.579 0 .252.221.416.924.566l.849.18c1.54.324 2.265 1.042 2.265 2.296l-.002.109zm-4.254 0h-2.02a.3.3 0 0 1 .297-.258h1.426a.3.3 0 0 1 .297.258z"
        fill="#444"
        stroke="none"
      />
      <path
        d="M16 21.19a.3.3 0 0 1-.3.3h-1.4a.3.3 0 0 1-.3-.3V14.5a.3.3 0 0 1 .3-.3h1.4a.3.3 0 0 1 .3.3v6.69zm8.3-6.99h2.773c2.266 0 3.606 1.409 3.606 3.777 0 2.447-1.322 3.874-3.606 3.874H24.3a.3.3 0 0 1-.3-.3V14.5a.3.3 0 0 1 .3-.3zm1.475 1.56v4.531h1.064c1.304 0 2.036-.8 2.036-2.29 0-1.426-.757-2.241-2.036-2.241h-1.064z"
        fill="#444"
        fillRule="nonzero"
        stroke="none"
      />
    </svg>
  );
}

export default React.memo(IconGeneratorLarge);
