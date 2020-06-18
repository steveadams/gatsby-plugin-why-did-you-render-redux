/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import * as React from 'react';
import {useSelector} from 'react-redux';

import * as colors from '../colors';
import * as favorites from '../favorites';
import * as font from '../font';
import * as selectors from '../selectors';
import Dialog from './Dialog';

const styles = {
  text: css`
    text-align: left;
  `,
  title: css`
    font-weight: ${font.bold};
    font-size: ${font.l}px;
  `,
  subtitle: css`
    margin-top: 16px;
  `,
  row: css`
    margin-bottom: 8px;
  `,
  key: css`
    display: inline-block;
    min-width: 16px;
    margin-right: 2px;
    padding: 0 3px;
    color: ${colors.mediumDarkGray};
    font-size: ${font.xxs};
    line-height: 20px;
    text-align: center;
    vertical-align: 1px;
    border: 1px solid ${colors.lightGray};
    border-radius: 3px;
    box-shadow: ${colors.mediumGray} 0 2px 0;
  `,
};

export const Key = ({children}: {children: string}) => <span className={styles.key}>{children}</span>;

const Subtitle = ({children}: {children: string}) => <h2 className={styles.subtitle}>{children}</h2>;

const Row = ({children}: {children: Array<JSX.Element | string>}) => <div className={styles.row}>{children}</div>;

function ShortcutsDialog() {
  const shown = useSelector(selectors.shortcutsDialogShown);

  if (!shown) {
    return null;
  }

  return (
    <Dialog>
      <h1 className={styles.title}>Keyboard shortcuts</h1>
      <div className={styles.text}>
        <Subtitle>Move selection</Subtitle>
        <Row>
          Select next result: <Key>↓</Key> or <Key>ctrl</Key>
          <Key>J</Key>
        </Row>
        <Row>
          Select previous result: <Key>↑</Key> or <Key>ctrl</Key>
          <Key>K</Key>
        </Row>
        <Row>
          Move to the next column: <Key>ctrl</Key>
          <Key>F</Key>
        </Row>
        <Row>
          Move to the previous column: <Key>ctrl</Key>
          <Key>B</Key>
        </Row>
        <Subtitle>Actions</Subtitle>
        <Row>
          Buy domain: <Key>↵</Key>
        </Row>
        {favorites.enabled() && (
          <Row>
            Favorite domain toggle: <Key>ctrl</Key>
            <Key>S</Key>
          </Row>
        )}
        <Subtitle>Search</Subtitle>
        <Row>
          Focus on the search field: <Key>/</Key>
        </Row>
        <Row>
          Clear the current search: <Key>Esc</Key>
        </Row>
      </div>
    </Dialog>
  );
}

export default React.memo(ShortcutsDialog);
