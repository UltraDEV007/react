import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const SubmitButton = ({ label, ...otherProps }) =>
  <RaisedButton
    primary
    fullWidth
    label={label}
    style={{
      marginTop: 10,
      marginBottom: 10,
    }}
    {...otherProps}
  />;

SubmitButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SubmitButton;
