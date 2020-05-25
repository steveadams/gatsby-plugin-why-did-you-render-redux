/* Copyright 2005-present Instant Domain Search, Inc. */

import * as reducers from './reducers';

import {combineReducers, createStore as reduxCreateStore, Store} from 'redux';
import {Action} from './actionTypes';
import {composeWithDevTools} from 'redux-devtools-extension';

export const store = reduxCreateStore<reducers.State, Action, Store<reducers.State, Action>, Record<string, unknown>>(
  combineReducers<reducers.State>(reducers),
  {} as reducers.State,
  composeWithDevTools(),
);

export const dispatch = (action: Action) => {
  store.dispatch<Action>(action);
};
