import React from 'react';

import Button from './Button';
import {LongLeftArrowIcon} from './icons';
import Text from './Text';

export default function BackButton() {
  return (
    <Button onClick={() => history.back()}>
      <LongLeftArrowIcon />
      <span>
        <Text id="back" />
      </span>
    </Button>
  );
}
