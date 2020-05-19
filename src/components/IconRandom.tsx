import * as React from 'react';

function IconRandom({className}: {className?: string}) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      stroke="#444"
      strokeWidth={2}
      className={className}>
      <path
        d="M4 37.167c22.877 0 10.897-23.334 29.824-23.334h7.455M4 13.833c7.62 0 10.225 1.422 12.541 4.875m7.464 13.748c1.879 3.37 3.615 4.711 9.819 4.711h7.455"
        stroke="#cfe9ff"
      />
      <path d="M37.265 31.917l5.161 5.25-5.161 5.25m0-33.834l5.161 5.25-5.161 5.25" stroke="#cfe9ff" />
      <path d="M4 35.167c22.877 0 10.897-23.334 29.824-23.334h7.455M4 11.833c7.62 0 10.225 1.422 12.541 4.875m7.464 13.748c1.879 3.37 3.615 4.711 9.819 4.711h7.455" />
      <path d="M37.265 29.917l5.161 5.25-5.161 5.25m0-33.834l5.161 5.25-5.161 5.25" />
    </svg>
  );
}

export default React.memo(IconRandom);
