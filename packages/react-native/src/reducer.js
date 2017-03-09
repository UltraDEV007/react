// @flow

import { combineReducers } from 'redux';
import login from './login/reducer';

let k = 'accounts-ui';
export const getStoreKey = () => k;
// eslint-disable-next-line no-return-assign
export const setStoreKey = (storeKey: string) => k = storeKey;

export const reducer = combineReducers({
  login,
});
