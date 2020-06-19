import {css, cx} from 'linaria';
import Highlight, {defaultProps, Language} from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import React from 'react';

import {desktop} from '../styles';

const regEx = /{([\d,-]+)}/;

const wrapperStyles = css`
  margin-right: -20px;
  margin-left: -20px;
  overflow: auto;

  ${desktop} {
    margin-right: -80px;
    margin-left: -80px;
  }
`;

const preStyles = css`
  float: left;
  min-width: 100%;
  overflow: initial;
`;

function calculateLinesToHighlight(meta: string) {
  if (regEx.test(meta)) {
    const lineNumbers = regEx
      .exec(meta)![1]
      .split(',')
      .map(v => v.split('-').map(y => parseInt(y, 10)));

    return (index: number) => {
      const lineNumber = index + 1;
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start,
      );
      return inRange;
    };
  } else {
    return () => false;
  }
}

function Code({code, language, meta}: {code: string; language: Language; meta: string}) {
  const highlightLines = calculateLinesToHighlight(meta);

  return (
    <Highlight {...defaultProps} code={code} language={language} theme={theme}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <div className={wrapperStyles}>
          <pre className={cx(preStyles, className)} style={style}>
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({
                  line,
                  key: i,
                  className: highlightLines(i) ? 'highlight-line' : '',
                })}>
                <span
                  className={css`
                    display: inline-block;
                    width: 2em;
                    opacity: 0.3;
                    user-select: none;
                  `}>
                  {i + 1}
                </span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({token, key})} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
}

export default Code;
