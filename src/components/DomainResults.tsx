/* Copyright 2005-present Instant Domain Search, Inc. */
import {css, cx} from 'linaria';
import * as React from 'react';
import {useSelector} from 'react-redux';

import {ClickLocation} from '../analytics';
import * as colors from '../colors';
import * as domain from '../domain';
import * as selectors from '../selectors';
import {desktop, mobile} from '../styles';
import Button from './Button';
import DomainList from './DomainList';
import {SearchType} from './SearchSelector';
import Text from './Text';

const styles = {
  extendedResults: css`
    min-height: 1056px; /* make very high to avoid scrollbar bouncing. text should fit in 1040px. */

    ${mobile} {
      min-height: initial;
    }
  `,
  columns: css`
    margin-top: 12px;
    margin-right: -24px;
    margin-left: -24px;
    padding-bottom: 32px;

    ${desktop} {
      display: flex;
    }

    ${mobile} {
      margin-right: 0;
      margin-left: 0;
    }
  `,
  col: css`
    ${desktop} {
      flex-basis: 33.333%;
      flex-grow: 1;
      flex-shrink: 0;
      box-sizing: border-box;
      width: 33.333%;
      min-width: 33.333%; /* help firefox apply text-overflow correctly */
      padding-right: 24px;
      padding-left: 24px;
    }
  `,
  errorMessage: css`
    margin-top: 48px;
    color: ${colors.mediumDarkGray};
    text-align: center;
  `,
  goDaddyButton: css`
    margin-top: 32px;
    color: ${colors.white};
    background: ${colors.green};

    &:hover {
      background: ${colors.hoverGreen};
    }
  `,
};

interface DomainResultsProps {
  showTlds?: boolean;
}

const popularTldsText = <Text id="popularTlds" />;
const suggestionsText = <Text id="suggestions" />;
const forSaleText = <Text id="forSale" />;

function DomainResults({showTlds = false}: DomainResultsProps) {
  const normalizedSearch = useSelector(selectors.normalizedSearch);
  const requestError = useSelector(selectors.requestError);
  const responseError = useSelector(selectors.responseError);
  const typedSearch = useSelector(selectors.typedSearch);

  if (typedSearch.length <= 1 && typedSearch.charCodeAt(0) < 0x80) {
    return null;
  }

  return (
    <div className={cx('extendedResults', 'wrapper')}>
      {!requestError && !responseError && (
        <div className={styles.columns}>
          {showTlds && (
            <DomainList
              category="tlds"
              className={styles.col}
              location={ClickLocation.TldsColumn}
              searchSelectorType={SearchType.Extensions}
              title={popularTldsText}
            />
          )}
          <DomainList
            category="suggestions"
            className={styles.col}
            location={ClickLocation.GeneratorColumn}
            searchSelectorType={SearchType.DomainNameGenerator}
            title={suggestionsText}
          />
          <DomainList
            category="forSale"
            className={styles.col}
            location={ClickLocation.ForSaleColumn}
            searchSelectorType={SearchType.Sale}
            title={forSaleText}
          />
        </div>
      )}
      {requestError && (
        <div className={styles.errorMessage}>
          Your search contains special characters that are not currently supported in domain names.
        </div>
      )}
      {responseError && (
        <div className={styles.errorMessage}>
          <div>We are having trouble with your search at this time.</div>
          <Button
            className={styles.goDaddyButton}
            defaultColor={false}
            eventID="click_error"
            eventInfo={`error_${normalizedSearch[1]}`}
            eventType="convert"
            href={domain.goDaddyURL(normalizedSearch[0], normalizedSearch[1])}
            rel="sponsored"
            tag="a"
            target="_blank">
            Try your search on GoDaddy
          </Button>
        </div>
      )}
    </div>
  );
}

export default React.memo(DomainResults);
