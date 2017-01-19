import React, { PropTypes } from 'react';
import Flexbox from 'flexbox-react';
import {
  RaisedButton,
} from 'material-ui';
import AccountsClient from '@accounts/client';
import { FormTypes, LoginFields } from '@accounts/react';

const styles = {
  button: {
    margin: 12,
  },
};

const LoginForm = ({
  form,
  fields,
  setFormType,
}) =>
  <Flexbox flexDirection="column">
    <Flexbox flexDirection="column">
      <LoginFields
        form={form}
        fields={fields}
      />
    </Flexbox>
    <Flexbox flexDirection="row" justifyContent="flex-end">
      {!AccountsClient.options().forbidClientAccountCreation &&
        <RaisedButton
          secondary
          style={styles.button}
          label="Sign up"
          onTouchTap={() => setFormType(FormTypes.SIGNUP)}
        />
      }
      <RaisedButton
        primary
        style={styles.button}
        label="Sign in"
        onTouchTap={() => form.submit()}
      />
    </Flexbox>
    <Flexbox justifyContent="center">
      {form.getFormErrors().first()}
    </Flexbox>
  </Flexbox>;

LoginForm.propTypes = {
  form: PropTypes.object,
  fields: PropTypes.object,
  setFormType: PropTypes.func,
};

export default LoginForm;
