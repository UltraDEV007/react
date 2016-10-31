import React from 'react';
import Accounts from '@accounts/accounts';

const Wrapper = ({
  className,
  children,
  style,
}) =>
  <div className={className} style={style}>
    {children}
  </div>;

Wrapper.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node,
  style: React.PropTypes.object,
};

export default Wrapper;

if (!Accounts.ui.Wrapper) {
  Accounts.ui.Wrapper = Wrapper;
}
