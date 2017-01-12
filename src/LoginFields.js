import React, { PropTypes } from 'react';
import { AccountsClient } from '@accounts/accounts';

const LoginFields = ({ form, fields }) =>
  <div>
    <AccountsClient.ui.UserField
      value={fields.getIn(['user', 'value'])}
      errorText={fields.getIn(['user', 'errors']).first()}
      onChange={event => form.setField('user', event.target.value)}
    />
    <AccountsClient.ui.PasswordField
      value={fields.getIn(['password', 'value'])}
      errorText={fields.getIn(['password', 'errors']).first()}
      onChange={event => form.setField('password', event.target.value)}
    />
  </div>;

LoginFields.propTypes = {
  form: PropTypes.object,
  fields: PropTypes.object,
};

export default LoginFields;
