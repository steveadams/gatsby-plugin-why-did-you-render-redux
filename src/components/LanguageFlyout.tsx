/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import {css, cx} from 'linaria';
import * as React from 'react';

import * as colors from '../colors';
import * as font from '../font';
import Flyout from './Flyout';
import {ChevronIcon} from './icons';
import {languageCodes, localizedLanguages, useLanguage} from './Text';

const styles = {
  flyout: css`
    top: 40px;
    right: 0;
    display: flex;
    align-items: center;
  `,
  handle: css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.darkGray};
    padding: 8px;
    border-radius: 18px;
    text-align: center;
    font-size: ${font.xs}px;

    &:hover {
      text-decoration: none;
      background: ${colors.lightGray};

      & svg {
        fill: ${colors.mediumDarkGray};
      }
    }
  `,
  expandedHandle: css`
    background: ${colors.extraLightGray};

    & svg {
      fill: ${colors.mediumDarkGray};
    }
  `,
  chevron: css`
    margin-left: 4px;
    stroke: none;
    fill: ${colors.mediumGray};
    vertical-align: text-bottom;
  `,
  languageList: css`
    margin: 0;
    padding: 8px;

    & a {
      color: ${colors.mediumDarkGray};

      &:hover {
        color: ${colors.darkGray};
      }
    }
  `,
};

function LanguageFlyout() {
  const lang = useLanguage();

  const handle = (className: string) => (
    <div className={className}>
      <span>
        {localizedLanguages[lang]} <ChevronIcon className={styles.chevron} />
      </span>
    </div>
  );

  const collapsedHandle = handle(styles.handle);
  const expandedHandle = handle('expanded ' + cx(styles.handle, styles.expandedHandle));

  return (
    <Flyout
      className={styles.flyout}
      collapsedHandle={collapsedHandle}
      expandedHandle={expandedHandle}
      position="absolute"
      width={112}>
      <ul className={styles.languageList}>
        {Object.entries(localizedLanguages).map(([code, language]) => {
          const to = code !== languageCodes.english ? `/${code}/` : '';

          return code !== lang ? (
            <li key={code}>
              <Link to={to}>{language}</Link>
            </li>
          ) : (
            React.Fragment
          );
        })}
      </ul>
    </Flyout>
  );
}

export default React.memo(LanguageFlyout);
