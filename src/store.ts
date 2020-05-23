/* Copyright 2005-present Instant Domain Search, Inc. */

import {combineReducers, createStore as reduxCreateStore, Store} from 'redux';

import {Action} from './actionTypes';
import * as reducers from './reducers';

export const store = reduxCreateStore<reducers.State, Action, Store<reducers.State, Action>, Record<string, unknown>>(
  combineReducers<reducers.State>(reducers),
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export const dispatch = (action: Action) => {
  store.dispatch<Action>(action);
};
