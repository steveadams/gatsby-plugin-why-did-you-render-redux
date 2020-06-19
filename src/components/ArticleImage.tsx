import {css, cx} from 'linaria';
import React from 'react';

import * as colors from '../colors';
import * as font from '../font';

const styles = {
  figure: css`
    margin-bottom: 32px;
  `,
  image: css`
    border-radius: 8px;
  `,
  caption: css`
    width: 100%;
    margin-top: 16px;
    color: ${colors.mediumDarkGray};
    font-size: ${font.xs}px;
    text-align: center;
  `,
};

const ArticleImage = ({
  caption,
  className,
  src,
}: {caption?: string; src: string} & React.HTMLAttributes<HTMLElement>) => (
  <figure className={cx(styles.figure, className)}>
    <img alt={caption} className={styles.image} src={src} />
    {caption && <caption className={styles.caption}>{caption}</caption>}
  </figure>
);

export default ArticleImage;
