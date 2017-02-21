// @flow

import { combineReducers } from 'redux';
import login from './login/reducer';

let k = 'accounts';
export const storeKey = k;
export const setStoreKey = (storeKey: string) => k = storeKey;

export const reducer = combineReducers({
  login,
});
