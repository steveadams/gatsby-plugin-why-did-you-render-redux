import React from 'react';

const Sort = (props: React.HTMLAttributes<SVGSVGElement>) => (
  <svg fill="none" height={24} strokeLinejoin="round" strokeWidth={1} viewBox="0 0 24 24" width={24} {...props}>
    <rect height={2} width={14} x={4.5} y={4.5} />
    <rect height={2} width={10} x={4.5} y={8.5} />
    <rect height={2} width={6} x={4.5} y={12.5} />
    <rect height={2} width={2} x={4.5} y={16.5} />
    <path d="M16.5,13 L16.5,18.5" strokeLinecap="round" />
    <polyline points="14.5 16.5 16.4916992 18.5 18.5 16.5" strokeLinecap="round" />
  </svg>
);

export default Sort;
