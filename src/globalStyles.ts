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
      font: inherit;
      font-size: 100%;
      vertical-align: baseline;
      border: 0;
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
      margin-top: 0;
      margin-bottom: 1.5em;
      line-height: 1.6;
    }

    em,
    i {
      font-style: oblique;
    }

    h1,
    h2 {
      margin-bottom: 0.25em;
      font-weight: ${font.bold};

      ${mobile} {
        line-height: 1.2;
      }
    }

    h3,
    h4 {
      font-weight: ${font.bold};
    }

    h1 {
      font-size: ${font.l}px;
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
      margin: 4px 16px;
      border: none;
      border-top: 1px solid ${colors.lightGray};
    }

    hr.darkHr {
      border-top: 1px solid ${colors.mediumGray};
    }

    /* Global styles */

    html {
      -webkit-tap-highlight-color: transparent;
    }

    body {
      overflow-y: scroll;
      color: ${colors.darkGray};
      font-weight: ${font.regular};
      font-size: ${font.s}px;
      font-family: ${font.sansFamily};
      line-height: 1;
      background: ${colors.white};
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
      max-width: 800px;
      margin-right: auto;
      margin-left: auto;
      padding-right: 24px;
      padding-left: 24px;
    }

    /* /hosting/ and the hosting choser */
    .hosting {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: flex-start;
      align-items: flex-start;
      justify-content: flex-start;
    }

    .hosting li strong {
      position: absolute;
      top: 14px;
      left: 14px;
      font-weight: 600;
      font-size: ${font.xs}px;
      line-height: 14px;
    }

    .hosting li {
      position: relative;
      flex: 0 1 248px;
      height: 210px;
      margin-right: 18px;
      margin-bottom: 18px;
      background-color: ${colors.white};
      border-radius: 4px;
      box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
      cursor: pointer;

      &:hover {
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);

        span {
          color: ${colors.white};
          background: ${colors.blue};
        }
      }
    }

    .hosting li a {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }

    .hosting li img {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 140px;
      height: 140px;
      margin-top: -70px;
      margin-left: -70px;
    }

    .hosting li span {
      position: absolute;
      right: 8px;
      bottom: 8px;
      display: inline-block;
      padding: 4px 20px;
      font-weight: 600;
      font-size: ${font.xxs}px;
      background: ${colors.extraLightGray};
      border-radius: 100px;
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
      margin-right: -8px;
      margin-left: -8px;
      padding: 8px;
      overflow-x: hidden;
      font-size: ${font.xxs}px;
      font-family: monospace;
      background-color: #f7f7f7;
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
      font-variant: small-caps;
      letter-spacing: 0.01em;
      text-transform: lowercase;
      font-feature-settings: 'smcp';
    }

    .icon {
      display: inline-flex;
      align-self: center;
      width: 1em;
      height: 1em;
    }
  }
`;
