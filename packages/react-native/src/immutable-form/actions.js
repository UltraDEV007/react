// @flow
import memoize from 'lodash.memoize';
import type { Dispatch } from 'redux';

const DOM = 'FORMS/';
export const FORM_SUBMITTED = `${DOM}FORM_SUBMITTED`;
export const FORM_APPROVED = `${DOM}FORM_APPROVED`;
export const FORM_ERROR = `${DOM}FORM_ERROR`;
export const FORM_CLEAR = `${DOM}FORM_CLEAR`;
export const FIELD_UPDATED = `${DOM}FIELD_UPDATED`;
export const FIELD_CLEAR = `${DOM}FIELD_CLEAR`;
export const FIELD_ERROR = `${DOM}FIELD_RESET`;

export const submittedForm = (formName: string) => () => ({
  type: FORM_SUBMITTED,
  formName,
});

export const approvedForm = (formName: string) => (result: Object) => ({
  type: FORM_APPROVED,
  formName,
  result,
});

export const errorForm = (formName: string) => (error: string | Error) => ({
  type: FORM_ERROR,
  formName,
  error,
});

const errorMessage = err => ((typeof err !== 'string') ? err.message : err);

export const submitForm = (formName: string) => (submit: (Object) => Promise<any>) => () =>
  (dispatch: Dispatch<Object>, getState: Function) => {
    const boundSubmittedForm = submittedForm(formName);
    dispatch(boundSubmittedForm());

    const state = getState();

    submit(state).then(
      res => {
        dispatch(clearForm(formName)());
        dispatch(approvedForm(formName)(res));
      },
      err => dispatch(errorForm(formName)(errorMessage(err)))
    );
  };

export const clearForm = (formName: string) => () => ({
  type: FORM_CLEAR,
  formName,
});

export const updateField = (formName: string) => (fieldName: string) => (event: Object) => ({
  type: FIELD_UPDATED,
  formName,
  fieldName,
  value: event && event.nativeEvent && event.nativeEvent.text,
});

export const clearField = (formName: string) => (fieldName: string) => () => ({
  type: FIELD_CLEAR,
  formName,
  fieldName,
});

export const errorField = (formName: string) => (fieldName: string) => (error: string) => ({
  type: FIELD_ERROR,
  formName,
  fieldName,
  error,
});

export const createFormActions = memoize((formName: string) => ({
  submitForm: submitForm(formName),
  approvedForm: approvedForm(formName),
  errorForm: errorForm(formName),
  clearForm: clearForm(formName),
  updateField: updateField(formName),
  clearField: clearField(formName),
  errorField: errorField(formName),
}));
