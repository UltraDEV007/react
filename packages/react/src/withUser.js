import React from 'react';
import AccountsClient from '@accounts/client';

const withUser = Component => class Wrapper extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.store = AccountsClient.instance.store;
    this.user = this.store.getState().getIn(['accounts', 'user']);
  }
  componentDidMount() {
    this.mounted = true;
    this.unsubscribe = this.store.subscribe(() => {
      const user = this.store.getState().getIn(['accounts', 'user']);
      if (this.mounted && !user.equals(this.user)) {
        this.user = user;
        this.forceUpdate();
      }
    });
  }
  componentWillUnmount() {
    this.mounted = false;
    this.unsubscribe();
  }
  render() {
    const user = this.user ? this.user.toJS() : null;
    return <Component {...this.props} user={user} />;
  }
};

export default withUser;
