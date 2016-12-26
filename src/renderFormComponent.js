import React from 'react';
import { AccountsClient } from '@accounts/accounts';
import FormTypes from './FormTypes';
import renderFormComponent from './renderFormComponent';

const renderFormComponent = (formType, props) => {
  let form;
  switch (formType) {
    case FormTypes.LOGIN:
      form = <AccountsClient.ui.LoginForm {...props} />;
      break;
    default:
      break;
  }
  return form;
};

export default renderFormComponent;
