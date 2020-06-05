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
