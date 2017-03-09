// @flow

import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import { PasswordField } from './password-field';
import { passwordFieldUpdate } from '../actions';
import { selectPropsPasswordField } from '../selectors';
import { getStoreKey } from '../../reducer';

function mapDispatch(dispatch: Dispatch<Object>) {
  return {
    onChange: event => dispatch(passwordFieldUpdate(event)),
  };
}

const mapState = (state: Object) => selectPropsPasswordField(state[getStoreKey()]);

const PasswordFieldContainer =
  connect(mapState, mapDispatch, null, { withRef: true })(PasswordField);

export default PasswordFieldContainer;
