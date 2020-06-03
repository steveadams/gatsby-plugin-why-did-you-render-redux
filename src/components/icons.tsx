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
      {/* tslint:disable-next-line max-line-length */}
      <path d="M12 14.276L8.816 16.6l1.226-3.747-3.194-2.31 3.942.009L12 6.8l1.21 3.752 3.942-.009-3.194 2.31 1.226 3.747z" />
    </svg>
  );
};

export const ChevronIcon = (props: React.HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg
      className="icon"
      height="12"
      version="1.1"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path d="M9.029,0.046C9.173,0.055 9.31,0.088 9.437,0.158C9.514,0.201 9.586,0.256 9.647,0.32C9.873,0.554 9.956,0.9 9.86,1.21C9.817,1.349 9.742,1.468 9.644,1.574C8.335,2.839 6.952,4.026 5.606,5.252C5.538,5.31 5.467,5.361 5.386,5.399C5.177,5.498 4.932,5.513 4.713,5.439C4.61,5.404 4.52,5.351 4.435,5.286C3.053,4.101 1.741,2.836 0.394,1.611C0.264,1.486 0.169,1.336 0.126,1.159C0.031,0.769 0.213,0.353 0.563,0.158C0.657,0.106 0.759,0.072 0.865,0.056C0.988,0.037 1.115,0.044 1.235,0.077C1.375,0.114 1.496,0.186 1.606,0.28L5,3.369L8.394,0.28C8.435,0.245 8.434,0.245 8.477,0.213C8.537,0.173 8.597,0.137 8.664,0.11C8.731,0.084 8.799,0.067 8.869,0.055C8.923,0.049 8.975,0.046 9.029,0.046Z" />
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
