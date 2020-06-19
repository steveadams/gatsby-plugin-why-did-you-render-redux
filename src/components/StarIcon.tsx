import React from 'react';

const StarIcon = ({svgRef, ...props}: React.HTMLAttributes<SVGSVGElement> & {svgRef?: React.Ref<SVGSVGElement>}) => {
  return (
    <svg height="24" viewBox="0 0 24 24" width="24" {...props} ref={svgRef}>
      <path d="M12 14.276L8.816 16.6l1.226-3.747-3.194-2.31 3.942.009L12 6.8l1.21 3.752 3.942-.009-3.194 2.31 1.226 3.747z" />
    </svg>
  );
};

export default StarIcon;
