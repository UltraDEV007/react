// @flow
import type { Field } from './state';

export const selectFieldProps = (field: Field) => ({
  value: field.value,
  error: field.error,
});
