/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import * as React from 'react';
import {useSelector} from 'react-redux';

import * as colors from '../colors';
import * as font from '../font';
import * as selectors from '../selectors';
import {Key} from './ShortcutsDialog';

const styles = css`
  color: ${colors.mediumGray};
  font-size: ${font.xxs}px;
  text-align: center;
  transition: opacity 500ms;
`;

const ShortcutsTip = () => {
  const showShortcutsTip = useSelector(selectors.showShortcutsTip);

  return (
    <div className={styles} style={{opacity: showShortcutsTip ? 1 : 0}}>
      <strong>Tip:</strong> press <Key>ctrl</Key>
      <Key>/</Key> to see available keyboard shortcuts.
    </div>
  );
};

export default ShortcutsTip;
