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
    margin-bottom: 40px;
    padding: 32px 24px 12px 24px;
    background-color: ${colors.extraLightGray};
    border-radius: 8px 8px 0 0;

    &:after {
      position: absolute;
      right: 0;
      bottom: -8px;
      width: 100%;
      height: 8px;
      background-color: ${colors.darkGray};
      border-radius: 0 0 8px 8px;
      content: '';
    }
  `,
  title: css`
    margin-bottom: 16px;
  `,
  columns: css`
    display: grid;
    grid-auto-rows: 1fr;
    grid-auto-flow: dense;
    grid-gap: 8px;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  `,
};

const Explainer = ({children, className, title, ...props}: ExplainerProps) => (
  <section className={cx(styles.explainer, className ? className : '')} {...props}>
    <h1 className={styles.title}>{title}</h1>
    <div className={styles.columns}>{children}</div>
  </section>
);

export default Explainer;
