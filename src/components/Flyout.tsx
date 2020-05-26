/* Copyright 2005-present Instant Domain Search, Inc. */

import {css, cx} from 'linaria';
import * as React from 'react';
import {useSelector} from 'react-redux';

import * as actions from '../actions';
import * as colors from '../colors';
import * as font from '../font';
import * as selectors from '../selectors';

const styles = {
  parent: css`
    cursor: pointer;
  `,
  flyout: css`
    position: absolute;
    top: 100%;
    margin-top: 12px;
    left: 50%;
    border: 1px solid ${colors.lightGray};
    box-shadow: rgba(0, 0, 0, 0.03) 0 0 0 2px;
    color: ${colors.mediumDarkGray};
    border-radius: 4px;
    font-size: ${font.xxs}px;
    line-height: 18px;
    white-space: normal;
    background: #fff;
    z-index: 2;
  `,
  flyoutTip: css`
    position: absolute;
    top: 100%;
    left: 50%;
    margin-top: 3px;
    margin-left: -9px;
    z-index: 2;
  `,
};

const FlyoutTip = (props: React.HTMLAttributes<SVGSVGElement>) => {
  return (
    <svg height="12" viewBox="0 0 18 12" width="18" {...props}>
      <path d="M16 7L9 0 2 7z" fill="#000" fillOpacity=".03" stroke="none" />
      <path d="M1 11.5l8-8 8 8" fill="#FFF" stroke="none" />
      <path d="M0 9.5h3l6-6 6 6h3" fill="#FFF" stroke="#DDD" />
    </svg>
  );
};

let nextID = 0;

interface FlyoutProps {
  children: React.ReactNode;
  className: string;
  collapsedHandle: JSX.Element | string;
  expandedHandle: JSX.Element | string;
  onCollapse?: () => void;
  onExpand?: () => void;
  position?: 'relative' | 'absolute' | 'static';
  width?: number;
}

function Flyout(props: FlyoutProps) {
  const expandedFlyout = useSelector(selectors.expandedFlyout);

  const dx = React.useRef(0);
  const expandedTimeout = React.useRef(0);
  const expandTimeout = React.useRef(0);
  const flyoutElement = React.useRef<HTMLDivElement>(null);
  const id = React.useRef(nextID++);
  const justExpanded = React.useRef(false);
  const lingerTimeout = React.useRef(0);

  const onClick = () => {
    if (isExpanded() && !justExpanded.current) {
      collapse();
    } else {
      expand();
    }
    lingerTimeout.current && clearTimeout(lingerTimeout.current);
    expandedTimeout.current && clearTimeout(expandedTimeout.current);
    justExpanded.current = false;
  };

  const onChildrenClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const expand = () => {
    if (flyoutElement.current === null) return;
    const {left, right} = flyoutElement.current.getBoundingClientRect();
    const {width = 260} = props;
    dx.current = Math.max(Math.min(-width / 2, document.body.clientWidth - right - width + 6), -left - 6);
    actions.expandFlyout(id.current);
    justExpanded.current = true;
    expandTimeout.current = window.setTimeout(onExpandDone, 500);
    if (props.onExpand) {
      props.onExpand();
    }
  };

  const collapse = () => {
    if (isExpanded()) {
      actions.collapseFlyout();
    }
    if (props.onCollapse) {
      props.onCollapse();
    }
  };

  const onMouseLingerInside = () => {
    expand();
  };

  const onMouseLingerOutside = () => {
    collapse();
  };

  const onMouseEnter = () => {
    lingerTimeout.current && clearTimeout(lingerTimeout.current);
    lingerTimeout.current = window.setTimeout(onMouseLingerInside, 200);
  };

  const onMouseLeave = () => {
    lingerTimeout.current && clearTimeout(lingerTimeout.current);
    lingerTimeout.current = window.setTimeout(onMouseLingerOutside, 400);
  };

  const onExpandDone = () => {
    justExpanded.current = false;
  };

  const isExpanded = () => {
    return expandedFlyout === id.current;
  };

  const {expandedHandle, collapsedHandle, className, children, width = 260, position = 'relative'} = props;
  const expanded = isExpanded();

  return (
    <div
      className={cx(className, styles.parent)}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={flyoutElement}
      role="menu"
      style={{position}}>
      {expanded ? expandedHandle : collapsedHandle}
      {expanded && (
        <div
          className={styles.flyout}
          style={{
            width,
            transform: `translateX(${dx.current}px)`,
          }}>
          <div onClick={onChildrenClick} role="button">
            {children}
          </div>
        </div>
      )}
      {expanded && <FlyoutTip className={styles.flyoutTip} />}
    </div>
  );
}

export default React.memo(Flyout);
