import React from 'react';

const StarIcon = ({svgRef, ...props}: React.HTMLAttributes<SVGSVGElement> & {svgRef?: React.Ref<SVGSVGElement>}) => {
  return (
    <svg
      fill="none"
      height="56"
      viewBox="0 0 56 56"
      width="56"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={svgRef}>
      <path
        d="M27.5 9L33.8345 21.5068L48 23.5247L37.75 33.2545L40.169 47L27.5 40.5068L14.831 47L17.25 33.2545L7 23.5247L21.1655 21.5068L27.5 9Z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      />
    </svg>
  );
};

export default StarIcon;
