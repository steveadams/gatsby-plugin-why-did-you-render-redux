/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import * as React from 'react';

import * as actions from '../actions';
import * as colors from '../colors';

import {ClearIcon} from './icons';

const styles = {
  overlay: css`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  `,
  wrapper: css`
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    text-align: center;
  `,
  dialog: css`
    background: ${colors.white};
    display: inline-block;
    max-width: 420px;
    padding: 48px 64px 32px 64px;
    border-radius: 4px;
    position: relative;
  `,
  dismissButton: css`
    stroke: ${colors.mediumGray};
    position: absolute;
    cursor: pointer;
    top: 6px;
    right: 6px;
    border-radius: 12px;
    &:hover {
      background: ${colors.lightGray};
    }
  `,
};

interface DialogProps {
  children: React.ReactNode;
  onDismiss?: () => void;
}

function Dialog(props: DialogProps) {
  const onDismiss = () => {
    if (props.onDismiss) {
      props.onDismiss();
    }
    actions.dismissDialog();
  };

  const preventDismiss = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const {children} = props;

  return (
    <div className={styles.overlay} onClick={onDismiss}>
      <div className={styles.wrapper}>
        <div className={styles.dialog} onClick={preventDismiss}>
          {children}
          <ClearIcon className={styles.dismissButton} onClick={onDismiss} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Dialog);
