/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';

import * as colors from './colors';
import {DomainStatus} from './domain';
import {desktop, mobile} from './styles';

type StatusStyles = {[key in keyof typeof DomainStatus]: string};

export const color: StatusStyles = {
  auction: css`
    color: ${colors.blue};
  `,
  available: css`
    color: ${colors.green};
  `,
  expiring: css`
    color: ${colors.blue};
  `,
  recentlyDropped: css`
    color: ${colors.yellow};
  `,
  recentlyRegistered: css`
    color: ${colors.yellow};
  `,
  sale: css`
    color: ${colors.blue};
  `,
  taken: css`
    color: ${colors.red};
  `,
};

export const lightColor: StatusStyles = {
  auction: css`
    color: ${colors.borderLightBlue};
  `,
  available: css`
    color: ${colors.borderLightGreen};
  `,
  expiring: css`
    color: ${colors.borderLightBlue};
  `,
  recentlyDropped: css`
    color: ${colors.borderLightYellow};
  `,
  recentlyRegistered: css`
    color: ${colors.borderLightYellow};
  `,
  sale: css`
    color: ${colors.borderLightBlue};
  `,
  taken: css`
    color: ${colors.borderLightRed};
  `,
};

export const background: StatusStyles = {
  auction: css`
    color: #fff;
    background: ${colors.blue};
  `,
  available: css`
    color: #fff;
    background: ${colors.green};
  `,
  expiring: css`
    color: #fff;
    background: ${colors.blue};
  `,
  recentlyDropped: css`
    color: #fff;
    background: ${colors.yellow};
  `,
  recentlyRegistered: css`
    color: #fff;
    background: ${colors.yellow};
  `,
  sale: css`
    color: #fff;
    background: ${colors.blue};
  `,
  taken: css`
    color: #fff;
    background: ${colors.red};
  `,
};

export const fill: StatusStyles = {
  auction: css`
    fill: ${colors.blue};
  `,
  available: css`
    fill: ${colors.green};
  `,
  expiring: css`
    fill: ${colors.blue};
  `,
  recentlyDropped: css`
    fill: ${colors.yellow};
  `,
  recentlyRegistered: css`
    fill: ${colors.yellow};
  `,
  sale: css`
    fill: ${colors.blue};
  `,
  taken: css`
    fill: ${colors.red};
  `,
};

export const stroke: StatusStyles = {
  auction: css`
    stroke: ${colors.blue};
  `,
  available: css`
    stroke: ${colors.green};
  `,
  expiring: css`
    stroke: ${colors.blue};
  `,
  recentlyDropped: css`
    stroke: ${colors.yellow};
  `,
  recentlyRegistered: css`
    stroke: ${colors.yellow};
  `,
  sale: css`
    stroke: ${colors.blue};
  `,
  taken: css`
    stroke: ${colors.red};
  `,
};

export const lightStroke: StatusStyles = {
  auction: css`
    stroke: ${colors.borderBlue};
  `,
  available: css`
    stroke: ${colors.borderGreen};
  `,
  expiring: css`
    stroke: ${colors.borderBlue};
  `,
  recentlyDropped: css`
    stroke: ${colors.borderYellow};
  `,
  recentlyRegistered: css`
    stroke: ${colors.borderYellow};
  `,
  sale: css`
    stroke: ${colors.borderBlue};
  `,
  taken: css`
    stroke: ${colors.borderRed};
  `,
};

export const lightHoverFill: StatusStyles = {
  auction: css`
    &:hover {
      fill: ${colors.borderBlue};
    }
  `,
  available: css`
    &:hover {
      fill: ${colors.borderGreen};
    }
  `,
  expiring: css`
    &:hover {
      fill: ${colors.borderBlue};
    }
  `,
  recentlyDropped: css`
    &:hover {
      fill: ${colors.borderYellow};
    }
  `,
  recentlyRegistered: css`
    &:hover {
      fill: ${colors.borderYellow};
    }
  `,
  sale: css`
    &:hover {
      fill: ${colors.borderBlue};
    }
  `,
  taken: css`
    &:hover {
      fill: ${colors.borderRed};
    }
  `,
};

const hoverStatusStyles = {
  available: css`
    ${desktop} {
      &:hover {
        color: #fff;
        background: ${colors.hoverGreen};
      }
    }
    ${mobile} {
      &.tapped {
        color: #fff;
        background: ${colors.hoverGreen};
      }
    }
  `,
  recentlyRegistered: css`
    ${desktop} {
      &:hover {
        color: #fff;
        background: ${colors.hoverYellow};
      }
    }
    ${mobile} {
      &.tapped {
        color: #fff;
        background: ${colors.hoverYellow};
      }
    }
  `,
  recentlyDropped: css`
    ${desktop} {
      &:hover {
        color: #fff;
        background: ${colors.hoverYellow};
      }
    }
    ${mobile} {
      &.tapped {
        color: #fff;
        background: ${colors.hoverYellow};
      }
    }
  `,
  taken: css`
    ${desktop} {
      &:hover {
        color: #fff;
        background: ${colors.hoverRed};
      }
    }
    ${mobile} {
      &.tapped {
        color: #fff;
        background: ${colors.hoverRed};
      }
    }
  `,
  sale: css`
    ${desktop} {
      &:hover {
        color: #fff;
        background: ${colors.hoverBlue};
      }
    }
    ${mobile} {
      &.tapped {
        color: #fff;
        background: ${colors.hoverBlue};
      }
    }
  `,
  expiring: css`
    ${desktop} {
      &:hover {
        color: #fff;
        background: ${colors.hoverBlue};
      }
    }
    ${mobile} {
      &.tapped {
        color: #fff;
        background: ${colors.hoverBlue};
      }
    }
  `,
  auction: css`
    ${desktop} {
      &:hover {
        color: #fff;
        background: ${colors.hoverBlue};
      }
    }
    ${mobile} {
      &.tapped {
        color: #fff;
        background: ${colors.hoverBlue};
      }
    }
  `,
};
export const hoverBackground: StatusStyles = hoverStatusStyles;

export const focusBackground: StatusStyles = {
  auction: css`
    &:focus {
      color: #fff;
      background: ${colors.hoverBlue};
    }
  `,
  available: css`
    &:focus {
      color: #fff;
      background: ${colors.hoverGreen};
    }
  `,
  expiring: css`
    &:focus {
      color: #fff;
      background: ${colors.hoverBlue};
    }
  `,
  recentlyDropped: css`
    &:focus {
      color: #fff;
      background: ${colors.hoverYellow};
    }
  `,
  recentlyRegistered: css`
    &:focus {
      color: #fff;
      background: ${colors.hoverYellow};
    }
  `,
  sale: css`
    &:focus {
      color: #fff;
      background: ${colors.hoverBlue};
    }
  `,
  taken: css`
    &:focus {
      color: #fff;
      background: ${colors.hoverRed};
    }
  `,
};

export const focusBorder: StatusStyles = {
  auction: css`
    &:focus {
      border-color: ${colors.blue};
    }
  `,
  available: css`
    &:focus {
      border-color: ${colors.green};
    }
  `,
  expiring: css`
    &:focus {
      border-color: ${colors.blue};
    }
  `,
  recentlyDropped: css`
    &:focus {
      border-color: ${colors.yellow};
    }
  `,
  recentlyRegistered: css`
    &:focus {
      border-color: ${colors.yellow};
    }
  `,
  sale: css`
    &:focus {
      border-color: ${colors.blue};
    }
  `,
  taken: css`
    &:focus {
      border-color: ${colors.red};
    }
  `,
};
