import { createReducer, filterActions } from '../redux/util';

import {
  FIELD_UPDATED,
  FIELD_ERROR,
  FIELD_CLEAR,
  FORM_SUBMITTED,
  FORM_APPROVED,
  FORM_ERROR,
  FORM_CLEAR,
} from './actions';

const fieldUpdatedHandler = (state, action) => {
  const validate = state.getIn([action.fieldName, 'validate']);

  return state.setIn([action.fieldName, 'value'], action.value)
              .setIn([action.fieldName, 'error'], validate(action.value));
};

const formReducer = initialState => createReducer(initialState, {
  // Per field reducers
  [FIELD_UPDATED]: fieldUpdatedHandler,
  [FIELD_CLEAR]: (state, action) => state.remove(action.fieldName),
  [FIELD_ERROR]: (state, action) => state.setIn([action.fieldName, 'error'], action.error),

  // Per form reducer
  [FORM_SUBMITTED]: state => state.set('submitting', true),
  [FORM_APPROVED]: state => state.set('submitting', false),
  [FORM_ERROR]: (state, action) => state.set('error', action.error),
  [FORM_CLEAR]: () => initialState,
});

const formNameFilter = formName => action => action.formName === formName;
export const createFormReducer = (formName, initialState) =>
  filterActions(formNameFilter(formName), formReducer(initialState), initialState);
