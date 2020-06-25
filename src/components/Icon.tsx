/* Copyright 2005-present Instant Domain Search, Inc. */

import React, {FC} from 'react';

import {extraLightGray, white} from '../colors';

export type IconName = keyof typeof icons;

type IconColors = {
  primary?: string;
  secondary?: string;
  stroke?: string;
};

export type IconProps = {
  name: IconName;
  background?: string;
  round?: boolean;
} & IconColors &
  React.HTMLAttributes<SVGSVGElement> & {svgRef?: React.Ref<SVGSVGElement>};

const Icon = ({
  name,
  round,
  background = extraLightGray,
  primary = 'currentColor',
  secondary = white,
  stroke = 'currentColor',
  ...props
}: IconProps) => {
  const IconPaths = icons[name];

  return (
    <svg fill="none" height="56" viewBox="0 0 56 56" width="56" xmlns="http://www.w3.org/2000/svg" {...props}>
      {round && <Circle background={background} />}

      <IconPaths primary={primary} secondary={secondary} stroke={stroke} />
    </svg>
  );
};

export default React.memo(Icon);

const Circle = ({background}: {background: string}) => <circle cx="28" cy="28" fill={background} r="28" />;

export const icons: Record<string, FC<IconColors>> = {
  AI: ({primary, secondary}) => (
    <>
      <mask fill={secondary} id="path-2-inside-1">
        <rect height="32" rx="2" width="32" x="12" y="12" />
      </mask>
      <rect
        fill={secondary}
        height="32"
        mask="url(#path-2-inside-1)"
        rx="2"
        stroke={primary}
        strokeWidth="8"
        width="32"
        x="12"
        y="12"
      />
      <rect fill={primary} height="4" width="2" x="18" y="8" />
      <rect fill={primary} height="4" width="2" x="18" y="44" />
      <rect fill={primary} height="4" transform="rotate(90 48 18)" width="2" x="48" y="18" />
      <rect fill={primary} height="4" transform="rotate(90 12 18)" width="2" x="12" y="18" />
      <rect fill={primary} height="4" width="2" x="24" y="8" />
      <rect fill={primary} height="4" width="2" x="24" y="44" />
      <rect fill={primary} height="4" transform="rotate(90 48 24)" width="2" x="48" y="24" />
      <rect fill={primary} height="4" transform="rotate(90 12 24)" width="2" x="12" y="24" />
      <rect fill={primary} height="4" width="2" x="30" y="8" />
      <rect fill={primary} height="4" width="2" x="30" y="44" />
      <rect fill={primary} height="4" transform="rotate(90 48 30)" width="2" x="48" y="30" />
      <rect fill={primary} height="4" transform="rotate(90 12 30)" width="2" x="12" y="30" />
      <rect fill={primary} height="4" width="2" x="36" y="8" />
      <rect fill={primary} height="4" width="2" x="36" y="44" />
      <rect fill={primary} height="4" transform="rotate(90 48 36)" width="2" x="48" y="36" />
      <rect fill={primary} height="4" transform="rotate(90 12 36)" width="2" x="12" y="36" />
      <path
        d="M27.4092 31.1406H24.1211L23.5469 33H20.9834L24.6338 23.0469H26.8896L30.5674 33H27.9902L27.4092 31.1406ZM24.6953 29.2881H26.835L25.7617 25.8359L24.6953 29.2881Z"
        fill={primary}
      />
      <path d="M34.0795 33H31.6869V23.0469H34.0795V33Z" fill={primary} />
    </>
  ),
  Auction: ({primary}) => (
    <>
      <rect fill={primary} height="22" transform="rotate(45 28.4141 20.8995)" width="3" x="28.4141" y="20.8995" />
      <rect fill={primary} height="9" transform="rotate(45 27.707 13.1213)" width="15" x="27.707" y="13.1213" />
      <path
        d="M37.6064 21.6066L39.0207 23.0208C39.8017 23.8018 39.8017 25.0682 39.0207 25.8492L34.0709 30.799C33.2899 31.58 32.0235 31.58 31.2425 30.799L29.8283 29.3847L37.6064 21.6066Z"
        fill={primary}
      />
      <path
        d="M31.9502 17.364C32.3407 16.9735 32.9739 16.9735 33.3644 17.364L34.0715 18.0711C34.462 18.4616 34.462 19.0948 34.0715 19.4853L31.9502 17.364Z"
        fill={primary}
      />
      <path
        d="M22.0498 21.6066L20.6356 20.1924C19.8545 19.4113 19.8545 18.145 20.6356 17.3639L25.5853 12.4142C26.3664 11.6331 27.6327 11.6331 28.4138 12.4142L29.828 13.8284L22.0498 21.6066Z"
        fill={primary}
      />
      <path d="M27 40C27 38.8954 27.8954 38 29 38H41C42.1046 38 43 38.8954 43 40V42H27V40Z" fill={primary} />
      <rect fill={primary} height="2" width="20" x="25" y="40" />
    </>
  ),

  ArrowLeft: ({stroke}) => (
    <>
      <path d="M52 28H4" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
      <path d="M28 4L4 28L28 52" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
    </>
  ),

  ArrowRight: ({stroke}) => (
    <>
      <path d="M4 28H52" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
      <path d="M28 4L52 28L28 52" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
    </>
  ),

  Availability: ({primary}) => (
    <>
      <path
        d="M15.5084 37.9991C14.8175 37.1372 13.5588 36.9986 12.697 37.6895C11.8351 38.3804 11.6965 39.6391 12.3874 40.5009L15.5084 37.9991ZM44 28C44 36.8366 36.8366 44 28 44V48C39.0457 48 48 39.0457 48 28H44ZM12 28C12 19.1634 19.1634 12 28 12V8C16.9543 8 8 16.9543 8 28H12ZM28 12C36.8366 12 44 19.1634 44 28H48C48 16.9543 39.0457 8 28 8V12ZM28 44C22.9481 44 18.4439 41.661 15.5084 37.9991L12.3874 40.5009C16.0494 45.0692 21.6831 48 28 48V44Z"
        fill={primary}
      />
      <rect fill={primary} height="10" transform="rotate(-45 18 28.8285)" width="4" x="18" y="28.8285" />
      <rect fill={primary} height="18" transform="rotate(-135 25.3428 35.6274)" width="4" x="25.3428" y="35.6274" />
      <path d="M10 32L4.80385 26H15.1962L10 32Z" fill={primary} />
    </>
  ),

  BizNameGenerator: ({primary, secondary}) => (
    <>
      <rect fill={primary} height="16" transform="rotate(45 26.5859 26.5858)" width="4" x="26.5859" y="26.5858" />
      <rect fill={primary} height="16" transform="rotate(-135 29.4141 29.4142)" width="4" x="29.4141" y="29.4142" />
      <rect fill={primary} height="16" transform="rotate(-45 26.5859 29.4142)" width="4" x="26.5859" y="29.4142" />
      <rect fill={primary} height="15" transform="rotate(135 29.4141 26.5858)" width="4" x="29.4141" y="26.5858" />
      <circle cx="16.6862" cy="39.3137" fill={primary} r="4.00001" transform="rotate(-45 16.6862 39.3137)" />
      <circle cx="39.3138" cy="16.6863" fill={primary} r="4.00001" transform="rotate(135 39.3138 16.6863)" />
      <circle cx="39.3135" cy="39.3137" fill={primary} r="4.00001" transform="rotate(-135 39.3135 39.3137)" />
      <circle cx="16.6865" cy="16.6863" fill={primary} r="4.00001" transform="rotate(45 16.6865 16.6863)" />
      <ellipse
        cx="16.6859"
        cy="39.3138"
        fill={secondary}
        rx="2.00006"
        ry="2.00006"
        transform="rotate(-45 16.6859 39.3138)"
      />
      <ellipse
        cx="39.3141"
        cy="16.6862"
        fill={secondary}
        rx="2.00006"
        ry="2.00006"
        transform="rotate(135 39.3141 16.6862)"
      />
      <ellipse
        cx="39.3145"
        cy="39.3138"
        fill={secondary}
        rx="2.00006"
        ry="2.00006"
        transform="rotate(-135 39.3145 39.3138)"
      />
      <ellipse
        cx="16.6855"
        cy="16.6862"
        fill={secondary}
        rx="2.00006"
        ry="2.00006"
        transform="rotate(45 16.6855 16.6862)"
      />
      <rect fill={primary} height="16" transform="rotate(-180 30 28)" width="4" x="30" y="28" />
      <circle cx="28" cy="12" fill={primary} r="4.00001" transform="rotate(90 28 12)" />
      <ellipse
        cx="27.9999"
        cy="11.9999"
        fill={secondary}
        rx="2.00006"
        ry="2.00006"
        transform="rotate(90 27.9999 11.9999)"
      />
      <rect fill={primary} height="16" transform="rotate(90 28 26)" width="4" x="28" y="26" />
      <circle cx="12" cy="28" fill={primary} r="4.00001" />
      <ellipse cx="12.0001" cy="28.0001" fill={secondary} rx="2.00006" ry="2.00006" />
      <rect fill={primary} height="15" width="4" x="26" y="28" />
      <circle cx="28" cy="43" fill={primary} r="4.00001" transform="rotate(-90 28 43)" />
      <ellipse
        cx="28.0001"
        cy="43.0001"
        fill={secondary}
        rx="2.00006"
        ry="2.00006"
        transform="rotate(-90 28.0001 43.0001)"
      />
      <rect fill={primary} height="15" transform="rotate(-90 28 30)" width="4" x="28" y="30" />
      <circle cx="43" cy="28" fill={primary} r="4.00001" transform="rotate(-180 43 28)" />
      <ellipse
        cx="42.9999"
        cy="27.9999"
        fill={secondary}
        rx="2.00006"
        ry="2.00006"
        transform="rotate(-180 42.9999 27.9999)"
      />
      <ellipse cx="27.9999" cy="28" fill={primary} rx="6" ry="6" transform="rotate(-45 27.9999 28)" />
      <circle cx="28.0005" cy="27.9999" fill={secondary} r="3" transform="rotate(-45 28.0005 27.9999)" />
    </>
  ),

  Buy: ({primary, secondary}) => (
    <>
      <circle cx="36" cy="40" fill={primary} r="4.00001" transform="rotate(-90 36 40)" />
      <circle cx="21" cy="40" fill={primary} r="4.00001" transform="rotate(-90 21 40)" />
      <ellipse
        cx="36.0001"
        cy="40.0001"
        fill={secondary}
        rx="2.00006"
        ry="2.00006"
        transform="rotate(-90 36.0001 40.0001)"
      />
      <ellipse
        cx="21.0001"
        cy="40.0001"
        fill={secondary}
        rx="2.00006"
        ry="2.00006"
        transform="rotate(-90 21.0001 40.0001)"
      />
      <path
        d="M10 17C10 16.4477 10.4477 16 11 16H15.5L17 20H44.5L40 34H18L14 18H11C10.4477 18 10 17.5523 10 17Z"
        fill={primary}
      />
      <rect fill={primary} height="8" width="3" x="28" y="12" />
      <rect fill={secondary} height="6" width="3" x="28" y="20" />
      <path d="M29.5 30L24.7369 24.75L34.2631 24.75L29.5 30Z" fill={secondary} />
    </>
  ),

  Chevron: ({stroke}) => (
    <>
      <path
        d="M4 17L28.0001 38.8439L52.0002 17"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
    </>
  ),

  // Suitable for using with round = tre
  ChevronSmall: ({stroke}) => (
    <>
      <path d="M19 26L28 35L37 26" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
    </>
  ),

  ChevronRight: ({stroke}) => (
    <>
      <path
        d="M17 52L38.8439 27.9999L17 3.99977"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
    </>
  ),

  Clear: ({stroke}) => (
    <>
      <path d="M52 4L4 52" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
      <path d="M4 4L52 52" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
    </>
  ),

  Coupon: ({primary, secondary}) => (
    <>
      <path
        d="M12 18V16C12 14.8954 12.8954 14 14 14H39C39.5523 14 40 14.4477 40 15C40 15.5523 39.5523 16 39 16H15C14.4477 16 14 16.4477 14 17C14 17.5523 14.4477 18 15 18H42C43.1046 18 44 18.8954 44 20V40C44 41.1046 43.1046 42 42 42H14C12.8954 42 12 41.1046 12 40V18Z"
        fill={primary}
      />
      <path
        d="M27.0482 28.9781C26.7451 28.6902 26.3853 28.4617 25.9892 28.3059C25.5931 28.15 25.1686 28.0698 24.7398 28.0698C24.3111 28.0698 23.8865 28.15 23.4904 28.3059C23.0943 28.4617 22.7345 28.6902 22.4314 28.9781L22.0351 29.3528L21.6372 28.9757C21.338 28.6734 20.9778 28.4313 20.5781 28.2638C20.1784 28.0962 19.7473 28.0066 19.3104 28.0004C18.8736 27.9941 18.4398 28.0712 18.035 28.2272C17.6301 28.3832 17.2624 28.6149 16.9537 28.9084C16.6449 29.202 16.4014 29.5515 16.2377 29.9361C16.0739 30.3208 15.9933 30.7327 16.0004 31.1476C16.0076 31.5624 16.1025 31.9716 16.2795 32.351C16.4564 32.7303 16.7119 33.072 17.0306 33.3558L21.8485 37.9309C21.8979 37.9753 21.9633 38 22.0313 38C22.0993 38 22.1647 37.9753 22.2141 37.9309L27.0431 33.3631C27.655 32.7813 27.999 31.993 28 31.1708C28.001 30.3486 27.6587 29.5596 27.0482 28.9765V28.9781Z"
        fill={secondary}
      />
      <path d="M42 24L42 28L36 28C34.8954 28 34 27.1046 34 26C34 24.8954 34.8954 24 36 24L42 24Z" fill={secondary} />
      <circle cx="36" cy="26" fill={primary} r="1" />
    </>
  ),

  DomainNameGenerator: ({primary, secondary}) => (
    <>
      <rect fill={primary} height="24" transform="rotate(-90 14 30)" width="4" x="14" y="30" />
      <rect fill={primary} height="10" transform="rotate(-90 28 18)" width="4" x="28" y="18" />
      <rect fill={primary} height="10" transform="rotate(-90 28 42)" width="4" x="28" y="42" />
      <path
        d="M24 17.5C24 15.567 25.567 14 27.5 14L28 14L28 42H27.5C25.567 42 24 40.433 24 38.5L24 17.5Z"
        fill={primary}
      />
      <circle cx="38" cy="16" fill={primary} r="4.00001" transform="rotate(-90 38 16)" />
      <circle cx="38" cy="40" fill={primary} r="4.00001" transform="rotate(-90 38 40)" />
      <circle cx="38" cy="28" fill={primary} r="4.00001" transform="rotate(-90 38 28)" />
      <ellipse
        cx="38.0001"
        cy="16.0001"
        fill={secondary}
        rx="2.00006"
        ry="2.00006"
        transform="rotate(-90 38.0001 16.0001)"
      />
      <ellipse
        cx="38.0001"
        cy="40.0001"
        fill={secondary}
        rx="2.00006"
        ry="2.00006"
        transform="rotate(-90 38.0001 40.0001)"
      />
      <ellipse
        cx="38.0001"
        cy="28.0001"
        fill={secondary}
        rx="2.00006"
        ry="2.00006"
        transform="rotate(-90 38.0001 28.0001)"
      />
      <ellipse cx="14" cy="28.0001" fill={primary} rx="6" ry="6" transform="rotate(-90 14 28.0001)" />
      <circle cx="14" cy="28" fill={secondary} r="3" transform="rotate(-90 14 28)" />
    </>
  ),

  DomainAvailable: ({stroke}) => (
    <>
      <path
        d="M17 26.5L24.8571 34L39 22"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </>
  ),

  DomainUnavailable: ({stroke}) => (
    <>
      <path
        d="M20.2227 20.2222L35.7782 35.7777"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path
        d="M20.2227 35.7778L35.7782 20.2223"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </>
  ),

  DomainForSale: ({stroke}) => (
    <>
      <path
        d="M34.2227 21.7778C34.2227 17.8889 30.3338 16.3334 28.0004 16.3334C25.6671 16.3334 21.7782 17.1112 21.7782 21.7778C21.7782 28.7778 35.7782 25.6667 35.7782 33.4445C35.7782 37.3334 31.8893 39.6667 28.0004 39.6667C24.1115 39.6667 20.2227 37.3334 20.2227 34.2223"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
      <path d="M28.0009 16.3334V11.6667" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
      <path d="M28.0009 44.3334V39.6667" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
    </>
  ),

  Expired: ({primary, secondary, stroke}) => (
    <>
      <circle cx="28" cy="28" fill={secondary} r="28" />
      <path
        d="M15.5084 37.9991C14.8175 37.1372 13.5588 36.9986 12.697 37.6895C11.8351 38.3804 11.6965 39.6391 12.3874 40.5009L15.5084 37.9991ZM44 28C44 36.8366 36.8366 44 28 44V48C39.0457 48 48 39.0457 48 28H44ZM12 28C12 19.1634 19.1634 12 28 12V8C16.9543 8 8 16.9543 8 28H12ZM28 12C36.8366 12 44 19.1634 44 28H48C48 16.9543 39.0457 8 28 8V12ZM28 44C22.9481 44 18.4439 41.661 15.5084 37.9991L12.3874 40.5009C16.0494 45.0692 21.6831 48 28 48V44Z"
        fill={primary}
      />
      <circle cx="28" cy="28" fill="white" r="18" stroke={stroke} strokeWidth="4" />
      <circle cx="29" cy="29" fill={primary} r="2" />
      <path d="M31 29L27 29L28 20L29.5 20L31 29Z" fill={primary} />
      <path
        d="M30.7275 27.8995L28.6679 29.9592C28.2541 30.373 27.575 30.3446 27.1971 29.8978L18.8281 20L19.8281 19L30.7275 27.8995Z"
        fill={primary}
      />
    </>
  ),

  Extensions: ({primary, secondary}) => (
    <>
      <path d="M26.5 43L21 43L29 13L34.5 13L26.5 43Z" fill={primary} />
      <path d="M36.5 43L31 43L39 13L44.5 13L36.5 43Z" fill={primary} />
      <circle cx="15" cy="21" fill={primary} r="3" transform="rotate(-90 15 21)" />
      <circle cx="15" cy="21" fill={primary} r="4.00001" transform="rotate(-90 15 21)" />
      <circle cx="15" cy="35" fill={primary} r="4.00001" transform="rotate(-90 15 35)" />
      <ellipse
        cx="15.0001"
        cy="21.0001"
        fill={secondary}
        rx="2.00006"
        ry="2.00006"
        transform="rotate(-90 15.0001 21.0001)"
      />
      <ellipse
        cx="15.0001"
        cy="35.0001"
        fill={secondary}
        rx="2.00006"
        ry="2.00006"
        transform="rotate(-90 15.0001 35.0001)"
      />
    </>
  ),

  List: ({primary, secondary}) => (
    <>
      <circle cx="16" cy="19" fill={primary} r="4.00001" transform="rotate(-90 16 19)" />
      <circle cx="16" cy="28" fill={primary} r="4.00001" transform="rotate(-90 16 28)" />
      <circle cx="16" cy="37" fill={primary} r="4.00001" transform="rotate(-90 16 37)" />
      <ellipse
        cx="16.0001"
        cy="19.0001"
        fill={secondary}
        rx="2.00006"
        ry="2.00006"
        transform="rotate(-90 16.0001 19.0001)"
      />
      <ellipse
        cx="16.0001"
        cy="28.0001"
        fill={secondary}
        rx="2.00006"
        ry="2.00006"
        transform="rotate(-90 16.0001 28.0001)"
      />
      <ellipse
        cx="16.0001"
        cy="37.0001"
        fill={secondary}
        rx="2.00006"
        ry="2.00006"
        transform="rotate(-90 16.0001 37.0001)"
      />
      <rect fill={primary} height="21" transform="rotate(-90 23 21)" width="4" x="23" y="21" />
      <rect fill={primary} height="21" transform="rotate(-90 23 30)" width="4" x="23" y="30" />
      <rect fill={primary} height="21" transform="rotate(-90 23 39)" width="4" x="23" y="39" />
    </>
  ),

  Lock: ({primary, secondary}) => (
    <>
      <rect fill={secondary} height="19" rx="7" stroke={primary} strokeWidth="6" width="14" x="21" y="13" />
      <path
        d="M14 25.75C14 24.7835 14.7835 24 15.75 24H40C41.1046 24 42 24.8954 42 26V41C42 42.1046 41.1046 43 40 43H16C14.8954 43 14 42.1046 14 41V25.75Z"
        fill={primary}
      />
      <rect fill={secondary} height="2" rx="1" width="20" x="18" y="29" />
      <rect fill={secondary} height="2" rx="1" width="20" x="18" y="33" />
      <rect fill={secondary} height="2" rx="1" width="20" x="18" y="37" />
    </>
  ),

  Names: ({primary, secondary}) => (
    <>
      <path
        d="M38 19.5928C38 14.2948 33.5228 10 28 10C22.4772 10 18 14.2948 18 19.5928C18 26.3312 24.875 27.3868 24.875 39L31.125 39C31.125 27.3868 38 26.4343 38 19.5928Z"
        fill={secondary}
        stroke={primary}
        strokeWidth="3"
      />
      <rect fill={primary} height="3.75" rx="1.25" width="5" x="25.5" y="42.7501" />
      <path
        d="M23 37H33V43.75C33 44.4404 32.4404 45 31.75 45H24.25C23.5596 45 23 44.4404 23 43.75V37Z"
        fill={primary}
      />
      <rect fill={secondary} height="0.8" rx="0.4" width="6" x="25" y="40.6" />
      <rect fill={secondary} height="0.8" rx="0.4" width="6" x="25" y="39" />
      <rect fill={secondary} height="0.8" rx="0.4" width="6" x="25" y="42.2" />
      <rect fill={primary} height="5.71762" transform="rotate(-45 22 21.4325)" width="2.28705" x="22" y="21.4325" />
      <rect
        fill={primary}
        height="10.2917"
        transform="rotate(-135 26.1982 25.3198)"
        width="2.28705"
        x="26.1982"
        y="25.3198"
      />
    </>
  ),

  NotFound: ({primary, secondary}) => (
    <>
      <rect fill={secondary} height="26" rx="1" stroke={primary} strokeWidth="2" width="33" x="12" y="15" />
      <rect fill={primary} height="31" transform="rotate(90 44 20)" width="2" x="44" y="20" />
      <rect fill={primary} height="23" rx="1" transform="rotate(90 40 33)" width="2" x="40" y="33" />
      <rect fill={primary} height="5" rx="0.5" transform="rotate(45 26.707 26)" width="1" x="26.707" y="26" />
      <rect
        fill={primary}
        height="5"
        rx="0.5"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 23.707 26)"
        width="1"
      />
      <rect fill={primary} height="5" rx="0.5" transform="rotate(45 32.707 26)" width="1" x="32.707" y="26" />
      <rect
        fill={primary}
        height="5"
        rx="0.5"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 29.707 26)"
        width="1"
      />
      <path
        d="M36 36.5C36 37.3284 35.3284 38 34.5 38C33.6716 38 33 37.3284 33 36.5L33 33L36 33L36 36.5Z"
        fill={primary}
      />
      <circle cx="15" cy="18" fill={primary} r="1" />
      <circle cx="18" cy="18" fill={primary} r="1" />
      <circle cx="21" cy="18" fill={primary} r="1" />
      <path
        d="M30.9942 6.80697C30.9845 6.78272 30.9695 6.76228 30.9507 6.74799C30.932 6.73369 30.9103 6.72611 30.8882 6.72612H29.6604L30.6412 4.20485C30.6497 4.18298 30.6535 4.15885 30.6523 4.13469C30.6511 4.11053 30.6449 4.08714 30.6343 4.0667C30.6236 4.04625 30.6089 4.02941 30.5915 4.01775C30.5741 4.00609 30.5546 3.99998 30.5347 4H28.6495C28.6268 4 28.6046 4.008 28.5855 4.02304C28.5664 4.03808 28.5513 4.05952 28.542 4.08477L27.0103 8.24568C27.0023 8.26753 26.9988 8.29149 27.0003 8.31537C27.0018 8.33924 27.0082 8.36228 27.0189 8.38238C27.0296 8.40249 27.0443 8.41901 27.0615 8.43045C27.0788 8.44189 27.0982 8.44788 27.1178 8.44787H28.2677L27.7096 11.5739C27.704 11.6056 27.7073 11.6387 27.719 11.6679C27.7308 11.697 27.7504 11.7204 27.7745 11.7343C27.7986 11.7481 27.8258 11.7516 27.8518 11.7442C27.8777 11.7367 27.9008 11.7188 27.9173 11.6933L30.9807 6.95842C30.9944 6.93726 31.0029 6.91183 31.0053 6.88505C31.0077 6.85827 31.0038 6.83121 30.9942 6.80697Z"
        fill={primary}
      />
    </>
  ),

  Question: ({primary, secondary}) => (
    <>
      <circle cx="27" cy="39" fill={primary} r="4.00001" transform="rotate(-90 27 39)" />
      <ellipse
        cx="27.0001"
        cy="39.0001"
        fill={secondary}
        rx="2.00006"
        ry="2.00006"
        transform="rotate(-90 27.0001 39.0001)"
      />
      <path
        d="M24.5118 33.146V27.332C26.4118 27.256 27.9191 26.9267 29.0338 26.344C30.1484 25.7614 30.7058 24.748 30.7058 23.304V22.772C30.7058 21.708 30.3891 20.948 29.7558 20.492C29.1478 20.036 28.3878 19.808 27.4758 19.808C26.4371 19.808 25.5884 20.112 24.9298 20.72C24.2711 21.3027 23.8151 22.0754 23.5618 23.038L18.9258 21.1C19.1538 20.34 19.4831 19.6054 19.9138 18.896C20.3698 18.1614 20.9524 17.5154 21.6618 16.958C22.3711 16.3754 23.2198 15.9067 24.2078 15.552C25.1958 15.1974 26.3484 15.02 27.6658 15.02C29.0084 15.02 30.2244 15.21 31.3138 15.59C32.4284 15.97 33.3784 16.502 34.1638 17.186C34.9491 17.87 35.5571 18.6934 35.9878 19.656C36.4184 20.6187 36.6338 21.67 36.6338 22.81C36.6338 23.874 36.4438 24.8494 36.0638 25.736C35.7091 26.5974 35.2151 27.3574 34.5818 28.016C33.9738 28.6494 33.2518 29.1687 32.4158 29.574C31.6051 29.9794 30.7438 30.258 29.8318 30.41V33.146H24.5118Z"
        fill={primary}
      />
    </>
  ),

  Random: ({primary, secondary}) => (
    <>
      <circle cx="20" cy="28" fill={primary} r="12" transform="rotate(-90 20 28)" />
      <ellipse cx="20" cy="28" fill={secondary} rx="8" ry="8" transform="rotate(-90 20 28)" />
      <circle cx="24" cy="46" fill={primary} r="4.00001" transform="rotate(-90 24 46)" />
      <ellipse
        cx="24.0001"
        cy="46.0001"
        fill={secondary}
        rx="2.00006"
        ry="2.00006"
        transform="rotate(-90 24.0001 46.0001)"
      />
      <ellipse cx="44" cy="26" fill={primary} rx="6" ry="6" transform="rotate(-90 44 26)" />
      <ellipse cx="44" cy="26" fill={secondary} rx="3" ry="3" transform="rotate(-90 44 26)" />
      <circle cx="28" cy="12" fill={primary} r="4.00001" transform="rotate(-90 28 12)" />
      <ellipse
        cx="28.0001"
        cy="12.0001"
        fill={secondary}
        rx="2.00006"
        ry="2.00006"
        transform="rotate(-90 28.0001 12.0001)"
      />
      <ellipse
        cx="34.0001"
        cy="22.0001"
        fill={primary}
        rx="2.00006"
        ry="2.00006"
        transform="rotate(-90 34.0001 22.0001)"
      />
      <ellipse
        cx="36.0001"
        cy="34.0001"
        fill={primary}
        rx="2.00006"
        ry="2.00006"
        transform="rotate(-90 36.0001 34.0001)"
      />
      <ellipse
        cx="40.0001"
        cy="16.0001"
        fill={primary}
        rx="2.00006"
        ry="2.00006"
        transform="rotate(-90 40.0001 16.0001)"
      />
      <ellipse
        cx="34.0001"
        cy="44.0001"
        fill={primary}
        rx="2.00006"
        ry="2.00006"
        transform="rotate(-90 34.0001 44.0001)"
      />
      <ellipse
        cx="42.0001"
        cy="40.0001"
        fill={primary}
        rx="2.00006"
        ry="2.00006"
        transform="rotate(-90 42.0001 40.0001)"
      />
    </>
  ),

  Sale: ({primary, secondary}) => (
    <>
      <path
        d="M9.41421 34.4142C8.63317 33.6332 8.63316 32.3668 9.41421 31.5858L28.063 12.937C28.54 12.46 29.2255 12.2556 29.8859 12.3935L39.2455 14.3477C40.0238 14.5102 40.632 15.1183 40.7945 15.8967L42.7487 25.2562C42.8865 25.9166 42.6822 26.6021 42.2051 27.0792L23.5563 45.7279C22.7753 46.509 21.509 46.509 20.7279 45.7279L9.41421 34.4142Z"
        fill={primary}
      />
      <ellipse cx="33.2422" cy="21.2426" fill={secondary} rx="3" ry="3" transform="rotate(-135 33.2422 21.2426)" />
    </>
  ),

  Search: ({primary, secondary}) => (
    <>
      <circle cx="26" cy="25" fill={primary} r="12" transform="rotate(-90 26 25)" />
      <rect fill={primary} height="16" transform="rotate(-45 28.5859 32.4142)" width="4" x="28.5859" y="32.4142" />
      <ellipse cx="26" cy="25" fill={secondary} rx="8" ry="8" transform="rotate(-90 26 25)" />
      <rect fill={primary} height="2" width="10" x="21" y="21" />
      <rect fill={primary} height="2" width="10" x="21" y="24" />
      <rect fill={primary} height="2" width="5" x="21" y="27" />
    </>
  ),

  Star: ({primary, stroke}) => (
    <path
      d="M27.5 9L33.8345 21.5068L48 23.5247L37.75 33.2545L40.169 47L27.5 40.5068L14.831 47L17.25 33.2545L7 23.5247L21.1655 21.5068L27.5 9Z"
      fill={primary}
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};
