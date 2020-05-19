/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';
import {Provider} from 'react-redux';

import {store} from './store';

export default ({element}: {element: React.ReactNode}) => {
  return <Provider store={store}>{element}</Provider>;
};
