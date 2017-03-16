// @flow

import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import { getStoreKey } from '../reducer';
import { LoginForm } from './login-form';
import { selectPropsLoginForm } from './selectors';
import { submitLoginForm } from './actions';

const mapDispatch = (dispatch: Dispatch<Object>) => ({
  onSubmit: () => dispatch(submitLoginForm()),
});

const mapState = (state: Object) => selectPropsLoginForm(state[getStoreKey()]);

const LoginFormContainer = connect(mapState, mapDispatch)(LoginForm);

export default LoginFormContainer;
