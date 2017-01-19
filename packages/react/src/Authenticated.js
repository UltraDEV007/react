import React, { PropTypes } from 'react';
import AccountsClient from '@accounts/client';
import FormTypes from './FormTypes';

class Authenticated extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }
  constructor(props, context) {
    super(props, context);
    this.store = AccountsClient.instance.store;
    this.user = this.store.getState().getIn(['accounts', 'user']);
  }
  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() => {
      const user = this.store.getState().getIn(['accounts', 'user']);
      if (!user.equals(this.user)) {
        this.user = user;
        this.forceUpdate();
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    if (this.user.isEmpty()) {
      return <AccountsClient.ui.Accounts formType={FormTypes.LOGIN} />;
    }
    return this.props.children;
  }
}

export default Authenticated;
