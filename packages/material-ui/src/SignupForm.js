import React, { PropTypes } from 'react';
import Flexbox from 'flexbox-react';
import RaisedButton from 'material-ui/RaisedButton';
import AccountsClient from '@accounts/client';
import { FormTypes, SignupFields } from '@accounts/react';

const styles = {
  button: {
    margin: 12,
  },
};

const SignupForm = ({
  form,
  fields,
  setFormType,
}) =>
  <Flexbox flexDirection="column">
    <Flexbox flexDirection="column">
      <SignupFields
        form={form}
        fields={fields}
      />
    </Flexbox>
    <Flexbox flexDirection="row" justifyContent="flex-end">
      {!AccountsClient.options().forbidClientAccountCreation &&
        <RaisedButton
          secondary
          style={styles.button}
          label="Sign in"
          onTouchTap={() => setFormType(FormTypes.LOGIN)}
        />
      }
      <RaisedButton
        primary
        style={styles.button}
        label="Sign up"
        onTouchTap={() => form.submit()}
      />
    </Flexbox>
    <Flexbox justifyContent="center">
      {form.getFormErrors().first()}
    </Flexbox>
  </Flexbox>;

SignupForm.propTypes = {
  form: PropTypes.object,
  fields: PropTypes.object,
  setFormType: PropTypes.func,
};

export default SignupForm;
