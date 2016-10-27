import React from 'react';
import Accounts from 'graphql-accounts';

const Wrapper = ({
  className,
  children
}) =>
  <div className={className}>
    {children}
  </div>

Wrapper.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node,
};

export default Wrapper;

if (!Accounts.ui.Wrapper) {
  Accounts.ui.Wrapper = Wrapper;
}
