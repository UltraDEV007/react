import { Record } from 'immutable';

export const Field = Record({
  value: null,
  error: null,
  validate: () => null,
});