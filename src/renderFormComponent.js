import React from 'react';
import { AccountsClient } from '@accounts/accounts';
import { Form, connectForm } from 'immutable-form';
import FormTypes from './FormTypes';

const loginForm = new Form('login', {
  fields: {
    user: {

    },
    password: {

    },
  },
});

const renderFormComponent = (formType, props) => {
  let form;
  switch (formType) {
    case FormTypes.LOGIN:
      form = connectForm(loginForm)(<AccountsClient.ui.LoginForm {...props} />);
      break;
    default:
      break;
  }
  return form;
};

export default renderFormComponent;
