import {css, cx} from 'linaria';
import React, {FC, useState} from 'react';

import * as actions from '../../actions';
import * as colors from '../../colors';
import * as font from '../../font';
import Button from '../Button';
import Icon from '../Icon';
import type {ToastProps} from '.';

const toastWidth = 300;
const toastPadding = 32;

const styles = {
  wrapper: css`
    position: absolute;
    top: ${toastPadding}px;
    right: ${toastPadding}px;
    width: ${toastWidth + toastPadding * 2}px;
    height: ${650 - toastPadding * 2}px;
  `,
  toast: css`
    position: sticky;
    top: ${toastPadding}px;
    bottom: ${toastPadding}px;
    z-index: 3;
    width: ${toastWidth}px;
    padding: ${toastPadding}px;
    color: ${colors.lighterGray};
    text-align: center;
    background-color: ${colors.darkerGray};
    border-radius: 12px;
    opacity: 0;
  `,
  clearButton: css`
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    height: auto;
    padding: ${toastPadding / 2}px;
    color: ${colors.lightGray};
    background-color: transparent;
    cursor: pointer;

    &:hover {
      color: ${colors.white};
      background-color: transparent;
    }
  `,
  icon: css`
    display: inline-block;
    margin-bottom: 12px;
    font-size: 40px;
    line-height: 1;
  `,
  title: css`
    margin-bottom: 8px;
    font-weight: ${font.bold};
    font-size: ${font.m}px;
  `,
  content: css`
    margin-bottom: 24px;
    color: ${colors.mediumGray};
    font-size: ${font.s}px;
    line-height: ${font.l}px;
  `,
  button: css`
    display: inline-block;
    padding: 8px 16px;
    color: ${colors.darkGray};
    font-size: ${font.xs}px;
    background-color: ${colors.white};

    &:hover {
      color: ${colors.mediumDarkGray};
    }
  `,
};

type ToastItem = FC<React.HtmlHTMLAttributes<HTMLElement>>;

export const Wrapper: ToastItem = ({children}) => <div className={styles.wrapper}>{children}</div>;

export const ToastIcon: ToastItem = ({children, className, ...props}) => (
  <span className={cx(styles.icon, className)} {...props}>
    {children}
  </span>
);

export const Title: ToastItem = ({children, className, ...props}) => (
  <h3 className={cx(styles.title, className)} {...props}>
    {children}
  </h3>
);

export const Content: ToastItem = ({children, className, ...props}) => (
  <p className={cx(styles.content, className)} {...props}>
    {children}
  </p>
);

export const Action: FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({children, ...props}) => (
  <Button className={styles.button} {...props} tag="a">
    {children}
  </Button>
);

export const Toast: FC<ToastProps> = ({children, hide = false, toastID}) => {
  const [hidden, setHidden] = useState(hide);
  const toastRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => setHidden(hide), [hide]);

  const hideToast = () => {
    setHidden(true);
    toastRef.current?.classList.replace('fadeInDown', 'fadeOutDown');
  };

  const dismissToast = () => {
    actions.dismissToast(toastID);
  };

  return (
    <div
      className={cx(styles.toast, 'animated', hide ? 'fadeOutDown' : 'fadeInDown')}
      onAnimationEnd={() => hidden && dismissToast()}
      ref={toastRef}>
      <Button className={styles.clearButton} onClick={hideToast}>
        <Icon name="Clear" />
      </Button>
      {children}
    </div>
  );
};
