/* Copyright 2005-present Instant Domain Search, Inc. */

import {css, cx} from 'linaria';
import * as React from 'react';

import * as colors from '../colors';
import * as font from '../font';

const styles = {
  textInput: css`
    font-size: ${font.m}px;
    height: 48px;
    /* stylelint-disable-next-line unit-no-unknown */
    line-height: 48px\\9; /* hack: center text vertically in ie8 */
    width: 100%;
    outline: none;
    border: none;
    box-sizing: border-box;
    font-weight: ${font.regular};
    appearance: none;
    &::-ms-clear {
      /* http://stackoverflow.com/questions/14007655/remove-ie10s-clear-field-x-button-on-certain-inputs */
      display: none;
    }
    &::placeholder {
      /* Font family required to override browser defaults */
      font-family: ${font.sansFamily};
      font-weight: ${font.regular};
      color: ${colors.darkGray};
      /* Firefox uses opacity: 0.5 by default */
      opacity: 1;
    }
    &:focus::placeholder {
      color: ${colors.mediumDarkGray};
    }
  `,
};

type TextInputProps = {inputRef?: React.Ref<HTMLInputElement>} & React.InputHTMLAttributes<HTMLInputElement>;

function TextInput({type = 'text', className, inputRef, ...props}: TextInputProps) {
  return (
    <input
      autoComplete="off"
      className={cx(className, styles.textInput)}
      ref={inputRef}
      spellCheck={false}
      type={type}
      {...props}
    />
  );
}

export default React.memo(TextInput);
