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
import Icon from './Icon';
import SearchSelector from './SearchSelector';
import {Key} from './ShortcutsDialog';
import Text from './Text';
import TextInput from './TextInput';

let USER_HAS_TYPED = false;

const styles = {
  searchContainer: css`
    position: relative;
    text-align: center;
  `,
  searchFormAndFavs: css`
    position: relative;
    display: flex;
    margin: 0 auto;
    padding: 0 16px;

    ${mobile} {
      margin-bottom: 0;
    }
  `,
  searchForm: css`
    position: relative;
    display: flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    max-width: 560px;
    margin: 0 auto 32px auto;
    background-color: ${colors.white};
    border-radius: 50px;

    &.collapsed {
      margin-top: 32px;
    }

    &:before {
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      z-index: 1;
      color: transparent;
      border: 3px solid transparent;
      border-radius: 50px;
      content: ' ';
      pointer-events: none;
    }

    &:focus-within {
      &:before {
        border-color: ${colors.darkGray};
      }
    }

    &:hover:not(:focus-within) {
      &:before {
        border-color: ${colors.mediumGray};
      }
    }
  `,
  searchInput: css`
    z-index: 2;
    display: flex;
    flex-grow: 1;
    padding-left: 24px;
    font-size: ${font.xs}px;
    background-color: transparent;
    border-radius: 48px 0 0 48px;

    &::placeholder,
    &:focus::placeholder {
      color: ${colors.darkGray};
      opacity: 1;
    }

    ${mobile} {
      padding-left: 16px;
      /* Prevent input zooming on iOS Safari */
      font-size: ${font.s}px;
    }
  `,
  searchButton: css`
    z-index: 2;
    display: flex;
    font-weight: ${font.regular};
    border-top-left-radius: unset;
    border-bottom-left-radius: unset;
  `,
  clearButton: css`
    z-index: 2;
    display: flex;
    padding: 0 16px;
    line-height: inherit;
    background-color: transparent;
    border-radius: unset;
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
    color: ${colors.darkGray};
  `,
  shortcutsTip: css`
    position: absolute;
    right: 0;
    bottom: -14px;
    left: 0;
    color: ${colors.mediumGray};
    font-size: ${font.xxs}px;
    text-align: center;
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

  // Only focus the search field in the desktop view
  const onClick = () => (!isMobile ? actions.focusSearchField() : () => {});

  return (
    <section className={styles.searchContainer} onClick={onClick}>
      <div className={styles.searchFormAndFavs}>
        <form
          // TODO: Should urls like this be placed in config somewhere?
          action="https://app.instantdomainsearch.com/redirect/"
          className={cx(styles.searchForm, !shouldShowHeaderAndFooter && 'collapsed')}
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
            <Button className={styles.clearButton} onClick={actions.clearSearchField} tag="a">
              <Icon className={styles.clearIcon} name="Clear" />
            </Button>
          )}

          <Button className={styles.searchButton}>
            <Text id="search" />
          </Button>

          {isMobile && <input style={{display: 'none'}} type="button" value="Search" />}
          {!isMobile && <FavoritesFlyout />}
        </form>
      </div>
      <SearchSelector mobile={isMobile} />
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
