import React from 'react';
import { AccountsClient } from '@accounts/accounts';

const withUser = Component => class Wrapper extends React.Component {
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
    const user = this.user ? this.user.toJS() : null;
    return <Component {...this.props} user={user} />;
  }
};

export default withUser;
