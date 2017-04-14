import PropTypes from 'prop-types';
import React from 'react';
import Flexbox from 'flexbox-react';

const Container = ({ children }) =>
  <Flexbox flexDirection="column" justifyContent="center" alignItems="center">
    {children}
  </Flexbox>;

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
