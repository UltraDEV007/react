// @flow

import AccountsClient from '@accounts/client';
import { createFormActions } from '../immutable-form/actions';
import { storeKey } from '../reducer';
import { selectUserField, selectPasswordField } from './selectors';
const actions = createFormActions('login');

const accountsLogin = (state: Object) => AccountsClient.loginWithPassword(
  selectUserField(state[storeKey]).value,
  selectPasswordField(state[storeKey]).value,
);

export const submitLoginForm = actions.submitForm(accountsLogin);
export const userFieldUpdate = actions.updateField('user');
export const passwordFieldUpdate = actions.updateField('password');
