import {css, cx} from 'linaria';
import React, {FC} from 'react';

import * as font from '../font';
import IconLogo from './IconLogo';

const styles = {
  logo: css`
    display: flex;
    align-content: flex-start;
    justify-content: center;
    margin-bottom: 0;
    font-weight: ${font.bold};
    line-height: 1;
  `,
  icon: css`
    position: relative;
    top: 0.15em;
    width: 1.1em;
    height: 1.1em;
  `,
  registered: css`
    align-self: center;
    font-weight: ${font.regular};
    font-size: ${font.xxs}px;
  `,
};

const Logo: FC<React.HTMLAttributes<HTMLElement>> = ({className, ...props}) => (
  <div className={cx(styles.logo, className)} {...props}>
    <IconLogo className={styles.icon} />
    <span>Instant Domain Search</span>
    <span className={styles.registered}>®</span>
  </div>
);

export default Logo;
