// @flow

import { connect } from 'react-redux';
import { UserField } from './user-field';
import { userFieldUpdate } from '../actions';
import { selectPropsUserField } from '../selectors';
import { storeKey } from '../../reducer';
import type { Dispatch } from 'redux';

function mapDispatch(dispatch: Dispatch<Object>) {
  return {
    onChange: event => dispatch(userFieldUpdate(event)),
  };
}

const mapState = (state: Object) => selectPropsUserField(state[storeKey]);

const UserFieldContainer = connect(mapState, mapDispatch, null, { withRef: true })(UserField);

export default UserFieldContainer;
