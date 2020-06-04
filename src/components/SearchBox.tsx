/* Copyright 2005-present Instant Domain Search, Inc. */

import {css, cx} from 'linaria';
import * as React from 'react';
import {useSelector} from 'react-redux';
import {unstable_LowPriority, unstable_scheduleCallback} from 'scheduler';

import * as actions from '../actions';
import * as analytics from '../analytics';
import * as colors from '../colors';
import * as font from '../font';
import * as selectors from '../selectors';
import {desktop, mobile} from '../styles';
import Button from './Button';
import FavoritesFlyout from './FavoritesFlyout';
import {ClearIcon} from './icons';
import {SearchSelector} from './SearchSelector';
import {Key} from './ShortcutsDialog';
import Text from './Text';
import TextInput from './TextInput';

let USER_HAS_TYPED = false;

const styles = {
  searchContainer: css`
    position: relative;
    text-align: center;
    padding: 64px 16px 0;

    /* Limit padding when rendered adjavent to a <header> */
    header + & {
      padding-top: 8px;
    }

    ${mobile} {
      padding: 32px 16px;
    }
  `,
  searchFormAndFavs: css`
    position: relative;
    display: flex;
    max-width: 560px;
    margin: 0 auto;
  `,
  searchForm: css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: stretch;
    border-radius: 50px;
    margin: 0 auto;
    background-color: ${colors.white};

    &:focus-within,
    &:hover {
      box-shadow: 0 0 0 3px inset ${colors.darkGray};
    }
  `,
  searchInput: css`
    font-size: ${font.xs}px;
    background-color: transparent;
    min-height: 48px;
    height: auto;
    padding-left: 24px;
    border-radius: 48px 0 0 48px;
    flex-grow: 1;

    &:placeholder {
      opacity: 1;
    }

    ${mobile} {
      padding-left: 16px;
    }
  `,
  searchButton: css`
    font-weight: ${font.regular};
    border-top-left-radius: unset;
    border-bottom-left-radius: unset;
  `,
  collapsed: css`
    padding-bottom: 0;
  `,
  clearButton: css`
    background-color: transparent;
    border-radius: unset;
    padding: 0 16px;
    line-height: inherit;
    cursor: pointer;

    &.empty {
      color: transparent;
    }

    &:hover {
      background-color: transparent;
    }

    ${desktop} {
      &:hover {
        color: ${colors.darkGray};
      }
    }
    ${mobile} {
      margin-right: 4px;
    }
  `,
  clearIcon: css`
    fill: ${colors.darkGray};
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

  return (
    <section
      className={cx(styles.searchContainer, !shouldShowHeaderAndFooter && styles.collapsed)}
      // iOS browsers need a user-initiated event to allow .focus() to pop up the keyboard
      onClick={actions.focusSearchField}>
      <div className={styles.searchFormAndFavs}>
        <form
          // TODO: Should urls like this be placed in config somewhere?
          action="https://app.instantdomainsearch.com/redirect/"
          className={cx(styles.searchForm)}
          method="get"
          onSubmit={onSubmit}
          role="search">
          <TextInput
            autoCapitalize="off"
            autoComplete="off"
            autoCorrect="off"
            autoFocus={true}
            className={styles.searchInput}
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

          {!shouldShowHeaderAndFooter && (
            <Button className={styles.clearButton} onClick={actions.clearSearchField}>
              <ClearIcon className={styles.clearIcon} />
            </Button>
          )}

          <Button className={styles.searchButton}>
            <Text id="search" />
          </Button>

          {isMobile && <input style={{display: 'none'}} type="button" value="Search" />}
        </form>
        {!isMobile && <FavoritesFlyout />}
      </div>
      <SearchSelector />
      {!shouldShowHeaderAndFooter && (
        <div className={styles.shortcutsTip} style={{opacity: showShortcutsTip ? 1 : 0}}>
          <strong>Tip:</strong> press <Key>ctrl</Key>
          <Key>/</Key> to see available keyboard shortcuts.
        </div>
      )}
    </section>
  );
}

export default React.memo(SearchBox);
