import React from 'react';
import Accounts from '@accounts/accounts';

const Title = ({
  style,
}) => <div style={style}><h2>{Accounts.ui._options.title}</h2></div>;

Title.propTypes = {
  style: React.PropTypes.object,
};

export default Title;

if (!Accounts.ui.Wrapper) {
  Accounts.ui.Title = Title;
}
