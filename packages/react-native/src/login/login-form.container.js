// @flow

import { connect } from 'react-redux';
import { storeKey } from '../reducer';
import { LoginForm } from './login-form'
import { selectPropsLoginForm } from './selectors';
import { submitLoginForm } from './actions';
import type { Dispatch } from 'redux';

const mapDispatch = (dispatch: Dispatch<Object>) => ({
  onSubmit: () => dispatch(submitLoginForm()),
});

const mapState = (state: Object) => selectPropsLoginForm(state[storeKey]);

const LoginFormContainer = connect(mapState, mapDispatch)(LoginForm);

export default LoginFormContainer;
