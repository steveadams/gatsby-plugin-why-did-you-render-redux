/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import {css, cx} from 'linaria';
import * as React from 'react';

import * as colors from '../colors';
import * as font from '../font';
import Flyout from './Flyout';
import Icon from './Icon';
import {languageCodes, localizedLanguageNames, useLanguage} from './Text';

const styles = {
  flyout: css`
    top: 40px;
    right: 0;
    display: flex;
    align-items: center;
  `,
  handle: css`
    display: flex;
    justify-content: center;
    padding: 8px;
    color: ${colors.darkGray};
    font-size: ${font.xs}px;
    text-align: center;
    border-radius: 18px;

    &:hover {
      text-decoration: none;
      background: ${colors.lightGray};

      svg {
        color: ${colors.mediumDarkGray};
      }
    }
  `,
  expandedHandle: css`
    background: ${colors.lightGray};

    & svg {
      color: ${colors.mediumDarkGray};
    }
  `,
  chevron: css`
    align-self: center;
    width: 14px;
    height: 14px;
    margin-left: 4px;
    color: ${colors.mediumGray};
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
      {localizedLanguageNames[lang]} <Icon className={styles.chevron} name="ChevronSmall" round={false} />
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
        {Object.entries(localizedLanguageNames).map(([code, language]) => {
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
