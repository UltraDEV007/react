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

const UserFieldContainer =
        connect((state: Object) => selectPropsUserField(state[storeKey]), mapDispatch)(UserField);

export default UserFieldContainer;
