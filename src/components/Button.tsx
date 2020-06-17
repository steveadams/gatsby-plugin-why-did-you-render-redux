/* Copyright 2005-present Instant Domain Search, Inc. */

import {css, cx} from 'linaria';
import * as React from 'react';

import * as actions from '../actions';
import * as analytics from '../analytics';
import * as colors from '../colors';
import * as font from '../font';
import {mobile} from '../styles';

const styles = {
  button: css`
    color: ${colors.white};
    box-sizing: border-box;
    font-weight: ${font.bold};
    font-size: ${font.s}px;
    outline: none;
    border: none;
    height: 48px;
    border-radius: 32px;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 12px 24px;
    line-height: 24px;
    user-select: none;
    transition: background-color 150ms, color 150ms;

    &:hover {
      text-decoration: none;
    }

    &:focus {
      outline: none;
    }

    svg {
      width: 14px;
      height: 14px;
    }

    /* If an icon is added as a child, provide proper spacing before or after the icon */
    span + svg {
      margin-left: 8px;
    }

    svg + span {
      margin-left: 8px;
    }
  `,
  defaultColor: css`
    background: ${colors.darkGray};
    color: ${colors.white};

    &:hover,
    &:active {
      /* TODO: Handle this with variables */
      color: rgba(255, 255, 255, 0.72);
    }
  `,
  textButton: css`
    height: auto;
    padding: unset;
    background: unset;
    color: ${colors.blue};

    &:hover {
      color: ${colors.hoverBlue};
    }

    svg {
      font-size: ${font.xs}px;
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

function useTapped(ref: React.RefObject<HTMLElement>): (() => void)[] {
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
  textButton?: boolean;
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
  textButton = false,
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
        defaultColor && !textButton && styles.defaultColor,
        textButton && styles.textButton,
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
