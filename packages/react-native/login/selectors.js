// @flow

import { createSelector } from 'reselect';
import { selectFieldProps } from '../immutable-form/selectors';

export const selectLoginState = (state: Object) => state.login;

export const selectUserField = createSelector(
  selectLoginState,
  loginState => loginState.user,
);

export const selectPasswordField = createSelector(
  selectLoginState,
  loginState => loginState.password,
);

export const selectPropsUserField = createSelector(
  selectUserField,
  selectFieldProps,
);

export const selectPropsPasswordField = createSelector(
  selectPasswordField,
  selectFieldProps,
);

export const selectPropsLoginForm = createSelector(
  selectLoginState,
  selectUserField,
  selectPasswordField,
  (loginState, user, password) => ({
    submitting: loginState.submitting,
    error: loginState.error || user.error || password.error,
  })
);
