/* Copyright 2005-present Instant Domain Search, Inc. */

import {combineReducers, compose, createStore as reduxCreateStore, Store} from 'redux';

import {Action} from './actionTypes';
import * as reducers from './reducers';

export const store = reduxCreateStore<reducers.State, Action, Store<reducers.State, Action>, Record<string, unknown>>(
  combineReducers<reducers.State>(reducers),
  {} as reducers.State,
  // compose enhancer is defined depending on if it's needed for SSR or HMR
  typeof window === 'object' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose,
);

export const dispatch = (action: Action) => {
  store.dispatch<Action>(action);
};
