/* Copyright 2005-present Instant Domain Search, Inc. */

import {css, cx} from 'linaria';
import {unstable_LowPriority, unstable_scheduleCallback} from 'scheduler';
import {useSelector} from 'react-redux';
import * as React from 'react';

import {desktop, mobile} from '../styles';
import {googleAnalyticsLabel, statusName} from '../domain';
import * as actions from '../actions';
import * as analytics from '../analytics';
import * as colors from '../colors';
import * as font from '../font';
import * as selectors from '../selectors';
import * as statusColors from '../statusColors';

import {ClearIcon, SearchIcon} from './icons';
import {Key} from './ShortcutsDialog';
import {SearchSelector} from './SearchSelector';
import Button from './Button';
import DomainButton from './DomainButton';
import FavoritesFlyout from './FavoritesFlyout';
import Text from './Text';
import TextInput from './TextInput';

let USER_HAS_TYPED = false;

const styles = {
  searcher: css`
    padding-bottom: 72px;
    padding-top: 48px;
    position: relative;
    text-align: center;
    ${mobile} {
      padding-bottom: 36px;
      padding-top: 36px;
    }
  `,
  search: css`
    position: relative;
    max-width: 560px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 32px;
    padding-right: 32px;
    ${mobile} {
      padding-left: 16px;
      padding-right: 16px;
    }
  `,
  searchInput: css`
    &:placeholder {
      color: ${colors.extraLightGray};
    }
    padding: 0px 160px 0px 20px;
    ${mobile} {
      padding: 0 94px 0 10px;
    }
    &:focus,
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.06) 0 0 0 2px;
    }
  `,
  right: css`
    position: absolute;
    right: ${4 + 32}px;
    top: 4px;
    ${mobile} {
      right: 20px;
    }
  `,
  collapsed: css`
    padding-top: 24px;
    padding-bottom: 0;
  `,
  clearButton: css`
    stroke: ${colors.mediumGray};
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 8px;
    border-radius: 12px;
    ${desktop} {
      &:hover {
        background: ${colors.lightGray};
        stroke: ${colors.white};
      }
    }
    ${mobile} {
      margin-right: 4px;
      &:active {
        background: ${colors.lightGray};
        stroke: ${colors.white};
      }
    }
  `,
  searchIcon: css`
    stroke: ${colors.white};
    margin-top: -9px;
    margin-bottom: -9px;
  `,
  shortcutsTip: css`
    position: absolute;
    bottom: -14px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: ${font.xxs}px;
    color: ${colors.mediumGray};
    transition: opacity 500ms;
  `,
};

function SearchBox() {
  const isMobile = useSelector(selectors.isMobile);
  const value = useSelector(selectors.typedSearch);
  const domain = useSelector(selectors.mainDomain);
  const showShortcutsTip = useSelector(selectors.showShortcutsTip);
  const shouldShowHeaderAndFooter = useSelector(selectors.shouldShowHeaderAndFooter);

  const inputRef = React.useRef<HTMLInputElement>(null);
  const [syncValue, setSyncValue] = React.useState(value);

  React.useLayoutEffect(() => {
    if (inputRef.current && inputRef.current.value !== value) setSyncValue(value);
  }, [value]);

  React.useEffect(() => {
    // grab whatever the user may have started typing before JS loaded
    if (inputRef.current && inputRef.current.value) {
      onChange({target: inputRef.current});
    }
  }, []); // only do this once on page load

  const onChange = React.useCallback(
    ({target}: {target: HTMLInputElement}) => {
      setSyncValue(target.value);
      unstable_scheduleCallback(unstable_LowPriority, () => {
        actions.updateSearch(target.value);
        if (!isMobile) {
          actions.scheduleShortcutsTip();
        }
      });
    },
    [isMobile],
  );

  const onKeyPress = React.useCallback(() => {
    if (USER_HAS_TYPED) {
      return;
    }

    USER_HAS_TYPED = true;

    analytics.event('interact', 'handleChange: first');
  }, []);

  const performMainAction = React.useCallback(() => {
    // TODO: would be nice to know whether this is WHOIS, aftermarket, available, etc. Add to com,
    // like 'com_aftermarket'.
    analytics.event('convert', 'submit_js', 'com');
    analytics.firstConvert();
    if (domain) {
      analytics.click(domain, analytics.ClickLocation.SearchBox);
    }
    actions.performMainAction();
  }, [domain]);

  const onSubmit = React.useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      performMainAction();
    },
    [performMainAction],
  );

  const onButtonClick = React.useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      performMainAction();
    },
    [performMainAction],
  );

  const buttonText = isMobile ? <SearchIcon className={styles.searchIcon} /> : <Text id="search" />;

  return (
    <div
      className={cx(styles.searcher, !shouldShowHeaderAndFooter && styles.collapsed)}
      // iOS browsers need a user-initiated event to allow .focus() to pop up the keyboard
      onClick={actions.focusSearchField}>
      <form
        action="https://app.instantdomainsearch.com/redirect/"
        className={styles.search}
        method="get"
        role="search"
        onSubmit={onSubmit}>
        <TextInput
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          autoFocus={true}
          className={cx(styles.searchInput, (domain && statusColors.focusBorder[statusName(domain)]) || '')}
          id="search"
          inputRef={inputRef}
          name="search"
          onChange={onChange}
          onFocus={actions.focusedSearchField}
          onKeyPress={onKeyPress}
          placeholder={isMobile ? Text({id: 'mobileSearchPlaceholder'}) : Text({id: 'searchPlaceholder'})}
          spellCheck={false}
          type="text"
          value={syncValue}
        />
        <div className={styles.right}>
          {value.length > 0 && <ClearIcon className={styles.clearButton} onClick={actions.clearSearchField} />}
          {!domain && <Button>{buttonText}</Button>}
          {domain && (
            <DomainButton
              domain={domain}
              eventID={`click_searchBox`}
              eventInfo={googleAnalyticsLabel(domain)}
              eventType="convert"
              eventValue={domain.price || 0}
              hidePrice={isMobile}
              location={analytics.ClickLocation.SearchBox}
              onClick={onButtonClick}
            />
          )}
        </div>
        {!isMobile && <FavoritesFlyout />}
        {isMobile && <input type="button" style={{display: 'none'}} value="Search" />}
      </form>
      <SearchSelector />
      {!shouldShowHeaderAndFooter && (
        <div className={styles.shortcutsTip} style={{opacity: showShortcutsTip ? 1 : 0}}>
          <strong>Tip:</strong> press <Key>ctrl</Key>
          <Key>/</Key> to see available keyboard shortcuts.
        </div>
      )}
    </div>
  );
}

export default React.memo(SearchBox);
