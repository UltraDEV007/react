/* eslint-disable react/no-did-mount-set-state */
import React, { PropTypes } from 'react';

class WithCurrentUser extends React.Component {
  static propTypes = {
    accounts: PropTypes.object,
    children: PropTypes.node,
  }
  constructor(props, context) {
    super(props, context);
    this.state = {
      user: null,
    };
  }
  async componentDidMount() {
    const accounts = this.props.accounts;
    this.store = accounts.instance.store;
    this.user = null;
    this.mounted = true;
    this.unsubscribe = this.store.subscribe(() => {
      const user = accounts.user();
      if (user) {
        this.user = user;
        if (this.mounted) {
          this.setState({
            user,
          });
        }
      } else if (this.mounted) {
        this.setState({
          user: null,
        });
      }
    });
    try {
      await accounts.resumeSession();
    } catch (err) {} //eslint-disable-line
  }
  componentWillUnmount() {
    this.mounted = false;
    this.unsubscribe();
  }
  render() {
    if (this.state.user) {
      return React.cloneElement(this.props.children, {
        currentUser: this.state.user,
      });
    }
    return null;
  }
}

const withCurrentUser = accounts => Component => props =>
  <WithCurrentUser accounts={accounts}>
    <Component {...props} />
  </WithCurrentUser>;

export default withCurrentUser;
