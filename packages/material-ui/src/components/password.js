import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const PasswordField = ({ label, ...otherProps }) =>
  <TextField
    hintText={label}
    type="password"
    style={{
      marginBottom: 10,
    }}
    {...otherProps}
  />;

PasswordField.propTypes = {
  label: PropTypes.string.isRequired,
};

export default PasswordField;
