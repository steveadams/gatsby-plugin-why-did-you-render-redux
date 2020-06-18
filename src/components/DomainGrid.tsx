/* Copyright 2005-present Instant Domain Search, Inc. */

import {css, cx} from 'linaria';
import * as React from 'react';
import {useSelector} from 'react-redux';
import * as scheduler from 'scheduler';

import {ClickLocation} from '../analytics';
import * as font from '../font';
import * as selectors from '../selectors';
import {mobile} from '../styles';
import TldView from './TldView';

const styles = {
  root: css`
    padding-bottom: 16px;
  `,
  category: css`
    margin-right: -24px;
    overflow: hidden;

    ${mobile} {
      margin-right: -20px;
    }
  `,
  title: css`
    padding-top: 48px;
    padding-bottom: 16px;
    font-weight: ${font.bold};
  `,
  tldWrapper: css`
    float: left;
    box-sizing: border-box;
    width: 16.666%;
    padding-right: 24px;

    ${mobile} {
      width: 33%;
      padding-right: 16px;
    }
  `,
};

function useScrollPosition(resolution = 100) {
  const [scrollBottom, setScrollBottom] = React.useState(
    Math.ceil((window.pageYOffset + window.innerHeight) / resolution) * resolution,
  );

  const latestScrollBottom = React.useRef(scrollBottom);

  React.useLayoutEffect(() => {
    latestScrollBottom.current = scrollBottom;
  }, [scrollBottom]);

  React.useEffect(() => {
    function onScroll() {
      const newScrollBottom = Math.ceil((window.pageYOffset + window.innerHeight) / resolution) * resolution;
      if (newScrollBottom !== latestScrollBottom.current) {
        scheduler.unstable_scheduleCallback(scheduler.unstable_LowPriority, () => {
          setScrollBottom(newScrollBottom);
        });
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []); // only do this once on page load

  return scrollBottom;
}

function DomainGrid() {
  const topLevelDomains = useSelector(selectors.topLevelDomains);
  const isMobile = useSelector(selectors.isMobile);
  const scrollPosition = useScrollPosition(150);
  const rowHeight = 50;
  const itemsPerRow = isMobile ? 3 : 6;
  const offset = isMobile ? 240 : 200;
  const rowsToRender = Math.ceil((scrollPosition - offset) / rowHeight);
  let remaining = rowsToRender * itemsPerRow;

  const contents = [];

  for (const {category, domains} of topLevelDomains) {
    contents.push(
      <div className={styles.category} key={category}>
        <div className={styles.title}>{category}</div>
        {domains.slice(0, remaining).map(({name, domain}) => (
          <div className={styles.tldWrapper} key={name}>
            <TldView domain={domain} position={ClickLocation.TldGrid} tld={name} />
          </div>
        ))}
      </div>,
    );
    remaining -= domains.length + itemsPerRow /* category header is approx 1 row */;
    if (remaining <= 0) break;
  }

  return <div className={cx('wrapper', styles.root)}>{contents}</div>;
}

export default React.memo(DomainGrid);
