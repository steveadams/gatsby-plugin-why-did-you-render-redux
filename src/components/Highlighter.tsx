import {css, cx} from 'linaria';
import Highlight, {defaultProps, Language} from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import React from 'react';

import * as font from '../font';

const styles = {
  code: css`
    padding: 12px;
    overflow: auto;
    font-size: ${font.xxs}px;
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
    text-align: left;
    border-radius: 4px;
  `,

  line: css`
    display: table-row;
  `,

  highlight: css`
    margin: 0px -10px;
    padding: 0px 5px;
    background-color: rgba(201, 167, 255, 0.2);
    border-left: 5px solid rgb(201, 167, 255);
  `,

  lineNumber: css`
    display: table-cell;
    padding-right: 1em;
    text-align: right;
    opacity: 0.5;
    user-select: none;
  `,

  lineContent: css`
    display: table-cell;
  `,
};

const Highlighter = ({
  code,
  language,
  highlightLines,
}: {
  code: string;
  language: Language;
  highlightLines?: number[];
}) => (
  <Highlight {...defaultProps} code={code.trim()} language={language} theme={theme}>
    {({className, style, tokens, getLineProps, getTokenProps}) => (
      <pre className={cx(styles.code, className)} style={style}>
        {tokens.map((line, i) => (
          <div
            key={i}
            {...getLineProps({className: highlightLines?.includes(i + 1) ? styles.highlight : '', line, key: i})}>
            <span className={styles.lineNumber}>{i + 1}</span>
            <span className={styles.lineContent}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </span>
          </div>
        ))}
      </pre>
    )}
  </Highlight>
);

// Highlight multiple lines at once:
// `<Highlighter code={lotsofcode} highlightLines={[...range(23, 66)]} />`
export const range = (start: number, end: number) => Array.from({length: end - start + 1}, (_x, i) => i + start);

export default Highlighter;
