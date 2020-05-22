/* Copyright 2005-present Instant Domain Search, Inc. */

import {css, cx} from 'linaria';
import * as React from 'react';

import * as actions from '../actions';
import * as analytics from '../analytics';
import * as colors from '../colors';
import * as font from '../font';
import {desktop, mobile} from '../styles';

const styles = {
  button: css`
    color: ${colors.white};
    box-sizing: border-box;
    font-weight: ${font.regular};
    font-size: ${font.s}px;
    outline: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    padding: 10px 22px;
    line-height: 20px;
    user-select: none;
    &:hover {
      text-decoration: none;
    }
    &:focus {
      outline: none;
    }
  `,
  defaultColor: css`
    background: ${colors.blue};
    color: ${colors.white};
    ${desktop} {
      &:hover {
        background: ${colors.hoverBlue};
      }
    }
    ${mobile} {
      &:active {
        background: ${colors.hoverBlue};
      }
    }
  `,
  hoverButton: css`
    border-radius: 4px;
    padding: 10px 12px;
    cursor: pointer;
    &:hover {
      text-decoration: none;
    }
    &:focus {
      outline: none;
    }
    ${mobile} {
      padding: 10px 16px;
    }
  `,
};

function useTapped(ref: React.RefObject<HTMLElement>) {
  const timeout = React.useRef(0);

  const onTouchStart = React.useCallback(() => {
    timeout.current = window.setTimeout(() => {
      ref.current && ref.current.classList.add('tapped');
    }, 100);
  }, [ref]);

  const onTouchEnd = React.useCallback(() => {
    window.clearTimeout(timeout.current);
    ref.current && ref.current.classList.remove('tapped');
  }, [ref]);

  const onTouchMove = React.useCallback(() => {
    window.clearTimeout(timeout.current);
    ref.current && ref.current.classList.remove('tapped');
  }, [ref]);

  React.useEffect(() => {
    return () => window.clearTimeout(timeout.current);
  });

  return [onTouchStart, onTouchMove, onTouchEnd];
}

type ButtonProps<Tag extends 'a' | 'button'> = {
  rel?: string;
  className?: string;
  defaultColor?: boolean;
  eventID?: string;
  eventInfo?: string;
  eventValue?: number;
  eventType?: string;
  focused?: boolean;
  hoverStyle?: boolean;
  tag?: Tag;
  href?: string;
  target?: string;
} & React.HTMLAttributes<HTMLElement>;

function Button<Tag extends 'a' | 'button'>({
  className,
  tag: Tag = 'button' as Tag,
  hoverStyle = false,
  defaultColor = true,
  children,
  onFocus,
  focused,
  rel = 'nofollow',
  onClick: onClickProp,
  eventType,
  eventID,
  eventInfo,
  eventValue,
  ...props
}: ButtonProps<Tag>) {
  const ref = React.useRef<Tag extends 'a' ? HTMLAnchorElement : HTMLButtonElement>(null);

  React.useEffect(() => {
    if (focused) {
      ref.current && ref.current.focus();
    }
  }, [focused]);

  const onClick = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (eventType && eventID) {
        analytics.event(eventType, eventID, eventInfo, eventValue);
        analytics.firstConvert();
      }
      if (onClickProp) {
        onClickProp(event);
      }
      actions.focusSearchField();
    },
    [eventType, eventID, eventInfo, eventValue, onClickProp],
  );

  const [onTouchStart, onTouchMove, onTouchEnd] = useTapped(ref);

  // TODO: TS does not like this in JSX for some reason
  return React.createElement(
    Tag,
    {
      className: cx(
        className,
        !hoverStyle && styles.button,
        defaultColor && styles.defaultColor,
        hoverStyle && styles.hoverButton,
      ),
      onClick,
      onFocus,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      ref,
      rel,
      role: 'button',
      ...props,
    },
    children,
  );
}

export default React.memo(Button);
