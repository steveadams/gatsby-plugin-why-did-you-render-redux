/* Copyright 2005-present Instant Domain Search, Inc. */

import {css, cx} from 'linaria';
import * as React from 'react';

import * as colors from '../colors';

const styles = {
  column: css`
    display: inline-block;
    width: 33%;
    box-sizing: border-box;
  `,
  cell: css`
    padding: 6px;
    margin: 6px;
    border: 1px solid;
  `,
  blue: css`
    background: ${colors.blue};
    border-color: ${colors.blue};
    color: '#fff';
  `,
  green: css`
    background: ${colors.green};
    border-color: ${colors.green};
    color: '#fff';
  `,
  red: css`
    background: ${colors.red};
    border-color: ${colors.red};
    color: '#fff';
  `,
  yellow: css`
    background: ${colors.yellow};
    border-color: ${colors.yellow};
    color: '#fff';
  `,
  blueBorder: css`
    border-color: ${colors.borderBlue};
    color: ${colors.blue};
  `,
  greenBorder: css`
    border-color: ${colors.borderGreen};
    color: ${colors.green};
  `,
  redBorder: css`
    border-color: ${colors.borderRed};
    color: ${colors.red};
  `,
  yellowBorder: css`
    border-color: ${colors.borderYellow};
    color: ${colors.yellow};
  `,
  blueText: css`
    color: ${colors.blue};
  `,
  borderBlueText: css`
    color: ${colors.borderBlue};
  `,
  borderLightBlueText: css`
    color: ${colors.borderLightBlue};
  `,
  greenText: css`
    color: ${colors.green};
  `,
  borderGreenText: css`
    color: ${colors.borderGreen};
  `,
  borderLightGreenText: css`
    color: ${colors.borderLightGreen};
  `,
  redText: css`
    color: ${colors.red};
  `,
  borderRedText: css`
    color: ${colors.borderRed};
  `,
  borderLightRedText: css`
    color: ${colors.borderLightRed};
  `,
  yellowText: css`
    color: ${colors.yellow};
  `,
  borderYellowText: css`
    color: ${colors.borderYellow};
  `,
  borderLightYellowText: css`
    color: ${colors.borderLightYellow};
  `,
};

function UiController() {
  return (
    <div>
      <h1>Colors</h1>
      <div className={styles.column}>
        <div className={cx(styles.cell, styles.blue)}>solid blue</div>
        <div className={cx(styles.cell, styles.green)}>solid green</div>
        <div className={cx(styles.cell, styles.red)}>solid red</div>
        <div className={cx(styles.cell, styles.yellow)}>solid yellow</div>
      </div>
      <div className={styles.column}>
        <div className={cx(styles.cell, styles.blueBorder)}>blue border</div>
        <div className={cx(styles.cell, styles.greenBorder)}>green border</div>
        <div className={cx(styles.cell, styles.redBorder)}>red border</div>
        <div className={cx(styles.cell, styles.yellowBorder)}>yellow border</div>
      </div>
      <div className={styles.column}>
        <div className={cx(styles.cell, styles.blue)}>
          background blue
          <span className={styles.borderLightBlueText}>☆</span>
          <span className={styles.borderBlueText}>☆</span>
          <span className={styles.blueText}>★</span>
        </div>
        <div className={cx(styles.cell, styles.green)}>
          background green
          <span className={styles.borderLightGreenText}>☆</span>
          <span className={styles.borderGreenText}>☆</span>
          <span className={styles.greenText}>★</span>
        </div>
        <div className={cx(styles.cell, styles.red)}>
          background red
          <span className={styles.borderLightRedText}>☆</span>
          <span className={styles.borderRedText}>☆</span>
          <span className={styles.redText}>★</span>
        </div>
        <div className={cx(styles.cell, styles.yellow)}>
          background yellow
          <span className={styles.borderLightYellowText}>☆</span>
          <span className={styles.borderYellowText}>☆</span>
          <span className={styles.yellowText}>★</span>
        </div>
      </div>
    </div>
  );
}

export default React.memo(UiController);
