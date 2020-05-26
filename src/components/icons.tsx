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
    <svg height="24" viewBox="0 0 24 24" width="24" {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
};

export const StarIcon = ({
  svgRef,
  ...props
}: React.HTMLAttributes<SVGSVGElement> & {svgRef?: React.Ref<SVGSVGElement>}) => {
  return (
    <svg height="24" viewBox="0 0 24 24" width="24" {...props} ref={svgRef}>
      {/* tslint:disable-next-line max-line-length */}
      <path d="M12 14.276L8.816 16.6l1.226-3.747-3.194-2.31 3.942.009L12 6.8l1.21 3.752 3.942-.009-3.194 2.31 1.226 3.747z" />
    </svg>
  );
};

export const ChevronIcon = (props: React.HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg height="14" viewBox="0 0 14 14" width="14" {...props}>
      <path d="M3 6l4.025 4.025L11 6" fill="none" />
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
