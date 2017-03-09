// @flow

import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import { UserField } from './user-field';
import { userFieldUpdate } from '../actions';
import { selectPropsUserField } from '../selectors';
import { getStoreKey } from '../../reducer';

function mapDispatch(dispatch: Dispatch<Object>) {
  return {
    onChange: event => dispatch(userFieldUpdate(event)),
  };
}

const mapState = (state: Object) => selectPropsUserField(state[getStoreKey()]);

const UserFieldContainer = connect(mapState, mapDispatch, null, { withRef: true })(UserField);

export default UserFieldContainer;
