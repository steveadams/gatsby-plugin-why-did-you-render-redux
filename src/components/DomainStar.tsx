/* Copyright 2005-present Instant Domain Search, Inc. */

import {css, cx} from 'linaria';
import * as React from 'react';
import {useSelector} from 'react-redux';

import * as actions from '../actions';
import * as colors from '../colors';
import {localStorageKey, statusName} from '../domain';
import * as favorites from '../favorites';
import * as selectors from '../selectors';
import * as statusColors from '../statusColors';
import StarIcon from './StarIcon';

const styles = {
  default: css`
    position: absolute;
    top: 50%;
    left: -20px;
    display: block;
    margin-top: -12px;
    text-align: center;
    cursor: pointer;
  `,
  regular: css`
    width: 24px;
    height: 24px;
  `,
  large: css`
    position: static;
    width: 28px;
    height: 28px;
    margin-top: 0;
    margin-right: 12px;
    margin-left: ${-28 - 12}px;
  `,
  defaultOffColor: css`
    stroke: ${colors.lightGray};

    &:hover {
      fill: ${colors.mediumGray};
      stroke: ${colors.mediumGray};
    }
  `,
  defaultOnColor: css`
    fill: ${colors.yellow};
    stroke: ${colors.yellow};

    &:hover {
      fill: ${colors.yellow};
      stroke: ${colors.yellow};
    }
  `,
  noFill: css`
    fill: none;
  `,
};

interface DomainStarProps {
  domain: Domain;
  large?: boolean;
  statusColor?: boolean;
  left?: number;
}

function DomainStar({domain, large = false, statusColor = false, left}: DomainStarProps) {
  const favs = useSelector(selectors.favoriteIDs);
  const isMobile = useSelector(selectors.isMobile);

  const [animating, setAnimating] = React.useState(false);

  const ref = React.useRef<SVGSVGElement>(null);

  const toggle = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (favs.size === 0) {
      setAnimating(true);
      // Wait long enough for element to rerender with on state
      requestAnimationFrame(() => {
        animate(() => {
          actions.toggleFavorite(domain);
          setAnimating(false);
        });
      });
    } else {
      actions.toggleFavorite(domain);
    }
  };

  const animate = (onDone: () => void) => {
    const duration = 1000;
    const padding = 200;

    const nav = document.getElementById('favorites');
    if (!nav || !ref.current) {
      if (onDone) {
        onDone();
      }
      return;
    }

    const el = ref.current.cloneNode(true) as HTMLElement;
    document.body.appendChild(el);

    const bounds = ref.current.getBoundingClientRect();
    const navBounds = nav.getBoundingClientRect();
    el.style.position = 'absolute';
    el.style.top = `${bounds.top + 12}px`;
    el.style.left = `${bounds.left}px`;
    el.style.transition = `transform ${duration}ms linear`;
    const dx = navBounds.left - bounds.left - 3;
    const dy = navBounds.top - bounds.top + 1;
    el.style.transform = `translate(${dx}px, ${dy}px) rotateZ(1080deg) scale(3, 3)`;
    setTimeout(() => {
      el.style.transform = `translate(${dx}px, ${dy}px) rotateZ(1080deg) scale(1, 1)`;
    }, duration);

    setTimeout(() => {
      document.body.removeChild(el);
      if (onDone) {
        onDone();
      }
    }, duration + padding);
  };

  if (!favorites.enabled() || isMobile) {
    return null;
  }
  const isFavorite = favs.has(localStorageKey(domain)) || animating;
  return (
    <StarIcon
      className={cx(
        styles.default,
        !large && styles.regular,
        large && styles.large,
        !isFavorite && styles.noFill,
        !statusColor && !isFavorite && styles.defaultOffColor,
        !statusColor && isFavorite && styles.defaultOnColor,
        statusColor && !isFavorite && statusColors.lightStroke[statusName(domain)],
        statusColor && !isFavorite && statusColors.lightHoverFill[statusName(domain)],
        statusColor && isFavorite && statusColors.stroke[statusName(domain)],
        statusColor && isFavorite && statusColors.fill[statusName(domain)],
      )}
      onClick={toggle}
      style={{left}}
      svgRef={ref}
    />
  );
}

export default React.memo(DomainStar);
