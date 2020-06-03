/* Copyright 2005-present Instant Domain Search, Inc. */
import {css} from 'linaria';

import * as colors from './colors';
import * as font from './font';
import {mobile} from './styles';

css`
  /* stylelint-disable-next-line selector-pseudo-class-no-unknown */
  :global() {
    /* http://meyerweb.com/eric/tools/css/reset/
     v2.0 | 20110126
     License: none (public domain)
    */

    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video,
    button {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      /* stylelint-disable-next-line declaration-block-no-shorthand-property-overrides */
      font: inherit;
      vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }
    body {
      /* TODO: fix hack */
      line-height: 1;
    }
    ol,
    ul {
      list-style: none;
    }
    blockquote,
    q {
      quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    p,
    ul,
    ol,
    h1,
    h2,
    h3,
    h4,
    pre,
    iframe,
    table {
      line-height: 1.6;
      margin-bottom: 1.5em;
      margin-top: 0;
    }

    em,
    i {
      font-style: oblique;
    }

    h1,
    h2 {
      font-weight: ${font.black};
      margin-bottom: 0.25em;

      ${mobile} {
        line-height: 1.2;
      }
    }

    h3,
    h4 {
      font-weight: ${font.bold};
    }

    h1 {
      font-size: ${font.xl}px;
    }

    h2 {
      font-size: ${font.l}px;
    }

    h3 {
      font-size: ${font.m}px;
    }

    h4 {
      font-size: ${font.s}px;
    }

    p {
      font-size: ${font.s}px;
      ${mobile} {
        font-size: ${font.xs}px;
      }
    }

    small {
      font-size: ${font.xs}px;
    }

    hr {
      border: none;
      border-top: 1px solid ${colors.lightGray};
      margin: 4px 16px;
    }

    hr.darkHr {
      border-top: 1px solid ${colors.mediumGray};
    }

    /* Global styles */

    html {
      -webkit-tap-highlight-color: transparent;
    }

    /* stylelint-disable-next-line no-duplicate-selectors */
    body {
      font-weight: ${font.regular};
      font-family: ${font.sansFamily};
      background: ${colors.white};
      color: ${colors.darkGray};
      font-size: ${font.s}px;
      overflow-y: scroll;
    }

    strong {
      font-weight: ${font.medium};
    }

    a {
      color: ${colors.blue};
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }

    #headerAndSearch {
      background-color: ${colors.extraLightGray};
    }

    .wrapper {
      margin-left: auto;
      margin-right: auto;
      max-width: 800px;
      padding-left: 24px;
      padding-right: 24px;
    }

    /* /hosting/ and the hosting choser */
    .hosting {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-content: flex-start;
      align-items: flex-start;
    }

    .hosting li strong {
      font-size: ${font.xs}px;
      font-weight: 600;
      left: 14px;
      line-height: 14px;
      position: absolute;
      top: 14px;
    }

    .hosting li {
      background-color: ${colors.white};
      border-radius: 4px;
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
      cursor: pointer;
      flex: 0 1 248px;
      height: 210px;
      margin-bottom: 18px;
      margin-right: 18px;
      position: relative;
      &:hover {
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
        span {
          background: ${colors.blue};
          color: ${colors.white};
        }
      }
    }

    .hosting li a {
      position: absolute;
      width: 100%;
      height: 100%;
      display: block;
    }

    .hosting li img {
      width: 140px;
      height: 140px;
      margin-left: -70px;
      margin-top: -70px;
      position: absolute;
      left: 50%;
      top: 50%;
    }

    .hosting li span {
      background: ${colors.extraLightGray};
      border-radius: 100px;
      bottom: 8px;
      font-size: ${font.xxs}px;
      font-weight: 600;
      padding: 4px 20px;
      position: absolute;
      right: 8px;
      display: inline-block;
    }

    td,
    th {
      padding: 4px 8px 4px 4px;
      text-align: left;
    }

    th {
      font-weight: ${font.medium};
    }

    /* NEEDS DESIGN */
    pre,
    code {
      background-color: #f7f7f7;
      font-family: monospace;
      font-size: ${font.xxs}px;
      margin-left: -8px;
      margin-right: -8px;
      overflow-x: hidden;
      padding: 8px;
    }

    .searchResults {
      margin-bottom: 24px;
    }

    .red {
      color: ${colors.red};
    }
    .yellow {
      color: ${colors.yellow};
    }
    .green {
      color: ${colors.green};
    }
    .blue {
      color: ${colors.blue};
    }

    .starParent {
      position: relative;
    }

    .smallCaps {
      text-transform: lowercase;
      letter-spacing: 0.01em;
      font-variant: small-caps;
      font-feature-settings: 'smcp';
    }

    .icon {
      display: inline-flex;
      align-self: center;
      height: 1em;
      width: 1em;
      fill: currentColor;
    }
  }
`;
