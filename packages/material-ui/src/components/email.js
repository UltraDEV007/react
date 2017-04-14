import PropTypes from 'prop-types';
import React from 'react';
import TextField from 'material-ui/TextField';

const EmailField = ({ label, ...otherProps }) =>
  <TextField
    hintText={label}
    style={{
      marginBottom: 10,
    }}
    {...otherProps}
  />;

EmailField.propTypes = {
  label: PropTypes.string.isRequired,
};

export default EmailField;
