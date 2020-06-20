/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import * as React from 'react';

import * as actions from '../actions';
import * as colors from '../colors';
import Icon from './Icon';

const styles = {
  overlay: css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.3);
  `,
  wrapper: css`
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    text-align: center;
    transform: translateY(-50%);
  `,
  dialog: css`
    position: relative;
    display: inline-block;
    max-width: 420px;
    padding: 48px 64px 32px 64px;
    background-color: ${colors.white};
    border-radius: 4px;
  `,
  dismissButton: css`
    position: absolute;
    top: 12px;
    right: 12px;
    width: 16px;
    height: 16px;
    color: ${colors.mediumGray};
    cursor: pointer;

    &:hover {
      color: ${colors.mediumDarkGray};
    }
  `,
};

interface DialogProps {
  children: React.ReactNode;
  onDismiss?: () => void;
}

function Dialog(props: DialogProps) {
  const onDismiss = (event: React.MouseEvent<HTMLOrSVGElement>) => {
    if (props.onDismiss) {
      props.onDismiss();
    }

    // Stop races with preventDismiss
    event.stopPropagation();

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
          <Icon className={styles.dismissButton} name="Clear" onClick={onDismiss} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Dialog);
