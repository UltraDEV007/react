// @flow

import { connect } from 'react-redux';
import { PasswordField } from './password-field';
import { passwordFieldUpdate } from '../actions';
import { selectPropsPasswordField } from '../selectors';
import { storeKey } from '../../reducer';
import type { Dispatch } from 'redux';

function mapDispatch(dispatch: Dispatch<Object>) {
  return {
    onChange: event => dispatch(passwordFieldUpdate(event)),
  };
}

const mapState = (state: Object) => selectPropsPasswordField(state[storeKey]);

const PasswordFieldContainer = connect(mapState, mapDispatch, null, { withRef: true })(PasswordField);

export default PasswordFieldContainer;
