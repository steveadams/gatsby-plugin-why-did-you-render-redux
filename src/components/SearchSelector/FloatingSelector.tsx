/* Copyright 2005-present Instant Domain Search, Inc. */

import {Location} from '@reach/router';
import {navigate} from 'gatsby';
import {css, cx} from 'linaria';
import React from 'react';
import {useSelector} from 'react-redux';

import * as analytics from '../../analytics';
import * as colors from '../../colors';
import * as font from '../../font';
import * as selectors from '../../selectors';
import {ChevronIcon} from '../icons';
import {useLanguage} from '../Text';
import {createSearchSelectorPath, SearchSelectorOption, SearchSelectorProps} from '.';

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

const FloatingSelector = ({className, options}: SearchSelectorProps) => {
  // TODO: This localization is awful
  // You can't render a JSX element in an <option> element (output is [object Object]),
  // so using <option><Text id={...} /></option> won't work here
  // Hooks can only be used in the top level of a react component, so it needs to happen
  // somewhere close to where the locale strings are needed. This patch works for now
  const lang = useLanguage();
  const locale = React.useMemo(() => require(`../../locales/${lang}`), [lang]);
  const canonicalUrl = useSelector(selectors.canonicalUrl);

  const onChange = ({currentTarget}: {currentTarget: HTMLSelectElement}) => {
    const selectedValue = currentTarget.value;

    analytics.event('interact', 'search_results_switcher_mobile', selectedValue);
    navigate(selectedValue + canonicalUrl);
  };

  return (
    <Location>
      {({location}) => (
        <form className={cx(styles.form, className)}>
          <select className={styles.select} onChange={onChange} value={location.pathname}>
            {options.map(([searchType, localeKey]: SearchSelectorOption) => (
              <option key={searchType} title={localeKey} value={createSearchSelectorPath(searchType, lang)}>
                {locale[localeKey]}
              </option>
            ))}
          </select>
          <ChevronIcon className={styles.icon} />
        </form>
      )}
    </Location>
  );
};

export default FloatingSelector;
