import {css, cx} from 'linaria';
import React from 'react';

import * as colors from '../colors';

type ExplainerProps = {
  children?: React.ReactNode;
  className?: string;
  title: string;
} & React.HTMLAttributes<HTMLElement>;

const styles = {
  explainer: css`
    position: relative;
    background-color: ${colors.extraLightGray};
    border-radius: 8px 8px 0 0;
    padding: 32px 24px 12px 24px;
    margin-bottom: 40px;

    &:after {
      content: '';
      position: absolute;
      right: 0;
      bottom: -8px;
      width: 100%;
      height: 8px;
      border-radius: 0 0 8px 8px;
      background-color: ${colors.darkGray};
    }
  `,
  title: css`
    margin-bottom: 16px;
  `,
  columns: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    grid-template-rows: 1fr;
    grid-auto-flow: dense;
    grid-gap: 8px;
    grid-auto-rows: 1fr;
  `,
};

const Explainer = ({children, className, title, ...props}: ExplainerProps) => (
  <section className={cx(styles.explainer, className ? className : '')} {...props}>
    <h2 className={styles.title}>{title}</h2>
    <div className={styles.columns}>{children}</div>
  </section>
);

export default Explainer;
