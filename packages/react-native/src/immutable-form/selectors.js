// @flow
import type { Field } from './state';

export const selectFieldProps = (field: Field) => ({
  value: field.value,
  error: (field.value && field.error) ? field.error : null,
});
