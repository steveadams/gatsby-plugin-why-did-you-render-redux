/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

export const SearchIcon = (props: React.HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg height="32" viewBox="0 0 32 32" width="32" {...props}>
      <path d="M18.5 18.5L24 24" />
      <circle cx="14.5" cy="14.5" fill="none" r="6" />
    </svg>
  );
};

export const EllipsisIcon = (props: React.HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg height="24" viewBox="0 0 24 24" width="24" {...props}>
      <path
        d={`M7 13.5c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5
          1.5zm10 0c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5zm-5
          0c.828 0 1.5-.672 1.5-1.5s-.672-1.5-1.5-1.5-1.5.672-1.5 1.5.672 1.5 1.5 1.5z`}
      />
    </svg>
  );
};

export const ClearIcon = (props: React.HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d={`M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7
        5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976
        0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834
        14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7
        8.41421L1.70711 13.7071C1.31658 14.0976 0.683417 14.0976 0.292893 13.7071C-0.0976311
        13.3166 -0.0976311 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311
        1.31658 -0.0976311 0.683417 0.292893 0.292893Z`}
      />
    </svg>
  );
};

export const StarIcon = ({
  svgRef,
  ...props
}: React.HTMLAttributes<SVGSVGElement> & {svgRef?: React.Ref<SVGSVGElement>}) => {
  return (
    <svg className="icon" height="24" viewBox="0 0 24 24" width="24" {...props} ref={svgRef}>
      <path d="M12 14.276L8.816 16.6l1.226-3.747-3.194-2.31 3.942.009L12 6.8l1.21 3.752 3.942-.009-3.194 2.31 1.226 3.747z" />
    </svg>
  );
};

export const ChevronIcon = (props: React.HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg fill="none" height="8" viewBox="0 0 14 8" width="14" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 1L7 7L13 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

export const RightArrowIcon = (props: React.HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg height="14" viewBox="0 0 14 14" width="14" {...props}>
      <path d="M6 3 l4 4 L6 11" fill="none" />
    </svg>
  );
};

export const LongRightArrowIcon = (props: React.HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16" {...props}>
      <path d="M1 8H15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M8 1L15 8L8 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

export const LongLeftArrowIcon = (props: React.HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M15 8H1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M8 15L1 8L8 1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
};

export const NotFoundIcon = ({
  bgColor = 'white',
  fillColor = 'currentColor',
  ...props
}: {
  bgColor?: string;
  fillColor?: string;
} & React.HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg fill="none" height="204" viewBox="0 0 189 204" width="189" {...props}>
      <rect
        fill={bgColor}
        height="139.286"
        rx="5.35714"
        stroke={fillColor}
        strokeWidth="10.7143"
        width="176.786"
        x="6.28585"
        y="59.3571"
      />
      <rect
        fill={fillColor}
        height="166.071"
        transform="rotate(90 177.714 86.1429)"
        width="10.7143"
        x="177.714"
        y="86.1429"
      />
      <rect
        fill={fillColor}
        height="123.214"
        rx="5.35714"
        transform="rotate(90 156.286 155.786)"
        width="10.7143"
        x="156.286"
        y="155.786"
      />
      <rect
        fill={fillColor}
        height="26.7857"
        rx="2.67857"
        transform="rotate(45 85.0732 118.286)"
        width="5.35714"
        x="85.0732"
        y="118.286"
      />
      <rect
        fill={fillColor}
        height="26.7857"
        rx="2.67857"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 69.002 118.286)"
        width="5.35714"
      />
      <rect
        fill={fillColor}
        height="26.7857"
        rx="2.67857"
        transform="rotate(45 117.216 118.286)"
        width="5.35714"
        x="117.216"
        y="118.286"
      />
      <rect
        fill={fillColor}
        height="26.7857"
        rx="2.67857"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 101.145 118.286)"
        width="5.35714"
      />
      <path
        d="M134.857 174.536C134.857 178.974 131.26 182.571 126.822 182.571V182.571C122.384 182.571 118.786 178.974 118.786 174.536L118.786 155.786L134.857 155.786L134.857 174.536Z"
        fill={fillColor}
      />
      <circle cx="22.3571" cy="75.4286" fill={fillColor} r="5.35714" />
      <circle cx="38.4284" cy="75.4286" fill={fillColor} r="5.35714" />
      <circle cx="54.4997" cy="75.4286" fill={fillColor} r="5.35714" />
      <path
        d="M108.04 15.4659C107.988 15.336 107.908 15.2265 107.807 15.1499C107.707 15.0733 107.59 15.0327 107.472 15.0327H100.895L106.149 1.52595C106.194 1.40881 106.215 1.27952 106.209 1.15011C106.202 1.02071 106.169 0.895397 106.112 0.785855C106.055 0.676314 105.976 0.586105 105.883 0.523632C105.79 0.461158 105.685 0.428451 105.578 0.428559H95.4793C95.3576 0.428536 95.2384 0.471394 95.1362 0.551967C95.034 0.63254 94.9531 0.747389 94.9033 0.882672L86.6978 23.1733C86.6547 23.2903 86.6364 23.4187 86.6444 23.5466C86.6525 23.6745 86.6867 23.7979 86.744 23.9056C86.8012 24.0133 86.8797 24.1018 86.9723 24.1631C87.0648 24.2244 87.1685 24.2565 87.2739 24.2564H93.4338L90.4443 41.0029C90.4138 41.1728 90.4315 41.3503 90.4946 41.5064C90.5577 41.6625 90.6623 41.7878 90.7915 41.8621C90.9207 41.9363 91.0667 41.955 91.2057 41.9151C91.3447 41.8752 91.4685 41.7791 91.5569 41.6424L107.968 16.2773C108.041 16.1639 108.087 16.0276 108.1 15.8842C108.112 15.7407 108.092 15.5958 108.04 15.4659Z"
        fill={fillColor}
      />
    </svg>
  );
};

export const SortIcon = ({className}: {className?: string}) => {
  return (
    <svg
      className={className}
      fill="none"
      height={24}
      strokeLinejoin="round"
      strokeWidth={1}
      viewBox="0 0 24 24"
      width={24}>
      <rect height={2} width={14} x={4.5} y={4.5} />
      <rect height={2} width={10} x={4.5} y={8.5} />
      <rect height={2} width={6} x={4.5} y={12.5} />
      <rect height={2} width={2} x={4.5} y={16.5} />
      <path d="M16.5,13 L16.5,18.5" strokeLinecap="round" />
      <polyline points="14.5 16.5 16.4916992 18.5 18.5 16.5" strokeLinecap="round" />
    </svg>
  );
};
