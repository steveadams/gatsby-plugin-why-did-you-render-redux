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
    display: flex;
    justify-content: center;
    height: 48px;
    position: fixed;
    bottom: 12px;
    right: 12px;
    z-index: 100;
    background: ${colors.darkGray};
    border-radius: 50px;
  `,
  select: css`
    font-size: ${font.s}px;
    color: ${colors.white};
    display: block;
    user-select: none;
    cursor: pointer;
    width: 100%;
    padding: 0;
    padding-left: 20px;
    border: none;
    background-color: transparent;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  `,
  icon: css`
    align-self: center;
    color: ${colors.white};
    padding-right: 24px;
  `,
};

const FloatingSelector = () => {
  // TODO: This localization is awful
  // You can't render a JSX element in an <option> element (output is [object Object]),
  // so using <option><Text id={...} /></option> won't work here
  // Hooks can only be used in the top level of a react component, so it needs to happen
  // somewhere close to where the locale strings are needed. This patch works for now
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

export default FloatingSelector;
