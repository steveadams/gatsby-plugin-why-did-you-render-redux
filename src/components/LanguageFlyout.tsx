/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import {css, cx} from 'linaria';
import * as React from 'react';

import * as colors from '../colors';
import Flyout from './Flyout';
import Icon from './Icon';
import {languageCodes, localizedLanguageNames, useLanguage} from './Text';

const styles = {
  flyout: css`
    display: flex;
    align-items: center;
  `,
  handle: css`
    display: flex;
    justify-content: center;
    padding: 8px;
    text-align: center;
    border-radius: 18px;

    &:hover {
      color: ${colors.darkGray};
      text-decoration: none;
      background-color: ${colors.lightGray};

      svg {
        color: ${colors.mediumDarkGray};
      }
    }
  `,
  expandedHandle: css`
    color: ${colors.darkGray};
    background: ${colors.lightGray};

    & svg {
      color: ${colors.mediumDarkGray};
    }
  `,
  chevron: css`
    align-self: center;
    width: 10px;
    height: 10px;
    margin-left: 4px;
    color: ${colors.mediumGray};
  `,
  languageList: css`
    margin: 0;
    padding: 8px;

    & > a {
      color: ${colors.mediumDarkGray};

      &:hover {
        color: ${colors.darkGray};
      }
    }
  `,
};

function LanguageFlyout({className, position = 'relative'}: {className?: string; position?: CssPosition}) {
  const lang = useLanguage();

  const handle = (handleClassName: string) => (
    <div className={handleClassName}>
      {localizedLanguageNames[lang]} <Icon className={styles.chevron} name="Chevron" round={false} />
    </div>
  );

  const collapsedHandle = handle(styles.handle);
  const expandedHandle = handle('expanded ' + cx(styles.handle, styles.expandedHandle));

  return (
    <Flyout
      className={cx(styles.flyout, className)}
      collapsedHandle={collapsedHandle}
      expandedHandle={expandedHandle}
      position={position}
      width={112}>
      <ul className={styles.languageList}>
        {Object.entries(localizedLanguageNames).map(([code, language]) => {
          return code === lang ? (
            React.Fragment
          ) : (
            <li key={code}>
              <Link to={code === languageCodes.english ? '/' : `/${code}/`}>{language}</Link>
            </li>
          );
        })}
      </ul>
    </Flyout>
  );
}

export default React.memo(LanguageFlyout);
