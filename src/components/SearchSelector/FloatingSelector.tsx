/* Copyright 2005-present Instant Domain Search, Inc. */

import {Location} from '@reach/router';
import {navigate} from 'gatsby';
import {css} from 'linaria';
import React from 'react';
import {useSelector} from 'react-redux';

import * as analytics from '../../analytics';
import * as colors from '../../colors';
import * as font from '../../font';
import * as selectors from '../../selectors';
import Icon from '../Icon';
import {useLanguage} from '../Text';
import {createSearchSelectorPath, searches} from '.';

const styles = {
  form: css`
    position: fixed;
    right: 12px;
    bottom: 12px;
    z-index: 100;
    display: flex;
    justify-content: center;
    height: 48px;
    background: ${colors.darkGray};
    border: 1px solid ${colors.lighterGray};
    border-radius: 50px;
  `,
  select: css`
    display: block;
    width: 100%;
    padding: 0;
    padding-left: 20px;
    color: ${colors.white};
    font-size: ${font.s}px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    user-select: none;
  `,
  icon: css`
    align-self: center;
    width: 12px;
    height: 12px;
    padding-right: 24px;
    color: ${colors.white};
  `,
};

const FloatingSearchSelector = () => {
  const lang = useLanguage();
  const locale = React.useMemo(() => require(`../../locales/${lang}`), [lang]);
  const canonicalUrl = useSelector(selectors.canonicalUrl);

  const onChange = React.useCallback(
    ({currentTarget}: {currentTarget: HTMLSelectElement}) => {
      const selectedValue = currentTarget.value;

      analytics.event('interact', 'search_results_switcher_floating', selectedValue);
      navigate(selectedValue + canonicalUrl);
    },
    [canonicalUrl],
  );

  return (
    <Location>
      {({location}) => (
        <form className={styles.form}>
          <select className={styles.select} onChange={onChange} value={location.pathname}>
            {searches.map(([searchType, localeKey]) => (
              <option key={searchType} title={localeKey} value={createSearchSelectorPath(searchType, lang)}>
                {locale[localeKey]}
              </option>
            ))}
          </select>
          <Icon className={styles.icon} name="Chevron" />
        </form>
      )}
    </Location>
  );
};

export default FloatingSearchSelector;
