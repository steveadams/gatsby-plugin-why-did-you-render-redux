/* Copyright 2005-present Instant Domain Search, Inc. */

import {css, cx} from 'linaria';
import * as React from 'react';
import {useSelector} from 'react-redux';

import * as actions from '../actions';
import * as colors from '../colors';
import {localStorageKey} from '../domain';
import * as favorites from '../favorites';
import * as selectors from '../selectors';
import StarIcon from './StarIcon';

const styles = {
  default: css`
    display: block;
    text-align: center;
    cursor: pointer;
  `,
  regular: css`
    position: absolute;
    top: 35%;
    left: -16px;
    width: 14px;
    height: 14px;
  `,
  large: css`
    width: 16px;
    height: 16px;
    margin-top: 2px;
    margin-right: 12px;
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
  left?: number;
}

function DomainStar({domain, large = false, left}: DomainStarProps) {
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
        !isFavorite && styles.defaultOffColor,
        isFavorite && styles.defaultOnColor,
      )}
      onClick={toggle}
      style={{left}}
      svgRef={ref}
    />
  );
}

export default React.memo(DomainStar);
