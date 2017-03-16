import React, { PropTypes } from 'react';
import { red500 } from 'material-ui/styles/colors';

const FormError = ({ errorText }) =>
(errorText.length > 0
  ?
    <div
      style={{
        marginTop: 20,
        color: red500,
      }}
    >
      {errorText}
    </div>
  : null);

FormError.propTypes = {
  errorText: PropTypes.node,
};

export default FormError;
