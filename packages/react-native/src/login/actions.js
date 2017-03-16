// @flow

import AccountsClient from '@accounts/client';
import { createFormActions } from '../immutable-form/actions';
import { getStoreKey } from '../reducer';
import { selectUserField, selectPasswordField } from './selectors';

const actions = createFormActions('login');

const accountsLogin = (state: Object) => AccountsClient.loginWithPassword(
  selectUserField(state[getStoreKey()]).value,
  selectPasswordField(state[getStoreKey()]).value,
);

export const submitLoginForm = actions.submitForm(accountsLogin);
export const clearLoginForm = actions.clearForm;
export const userFieldUpdate = actions.updateField('user');
export const passwordFieldUpdate = actions.updateField('password');
export const userFieldClear = actions.clearField('user');
export const passwordFieldClear = actions.clearField('password');
