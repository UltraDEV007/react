// @flow
import type { Reducer } from 'redux';

type Predicate = (action: Object) => boolean;

export const getState = (initialState: Object) => (state: Object = initialState) => state;

/**
 *
 * @param predicate
 * @param reducer
 * @param initialState
 * @returns {function(Object, Object): Object}
 */
export function filterActions(predicate: Predicate, reducer: Reducer<Object, Object>, initialState: Object) {

  return (state: Object, action: Object) =>
    predicate(action) ? reducer(state, action) : getState(initialState)(state);
}

/**
 *
 * @param initialState
 * @param handlers
 * @returns {reducer}
 */
export function createReducer(initialState: Object, handlers: Object) {
  return function reducer(state: Object = initialState, action: Object) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
