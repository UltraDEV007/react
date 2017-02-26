/* eslint-disable react/no-did-mount-set-state */
import React, { PropTypes } from 'react';
import FormTypes from './FormTypes';

class Authenticate extends React.Component {
  static propTypes = {
    accounts: PropTypes.object,
    Loading: PropTypes.node,
    Dialog: PropTypes.node,
    children: PropTypes.node,
  }
  constructor(props, context) {
    super(props, context);
    this.state = {
      user: null,
      showDialog: false,
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
        this.setState({
          user,
        });
      } else {
        this.setState({
          user: null,
          showDialog: true,
        });
      }
    });
    if (this.mounted) {
      try {
        this.setState({
          showDialog: false,
        });
        await accounts.resumeSession();
      } catch (err) {
        this.setState({
          showDialog: true,
        });
      }
    }
  }
  componentWillUnmount() {
    this.mounted = false;
    this.unsubscribe();
  }
  render() {
    const { user, showDialog } = this.state;
    const { accounts, Loading, Dialog, children } = this.props;
    if (accounts.isLoading()) {
      return <Loading />;
    } else if (user) {
      return React.cloneElement(children, {
        accounts,
        user,
      });
    } else if (showDialog) {
      return <Dialog accounts={accounts} formType={FormTypes.LOGIN} />;
    }
    return null;
  }
}

export { Authenticate };

const authenticate = ({
  accounts,
  Loading,
  Dialog,
}) => Component => props =>
  <Authenticate
    accounts={accounts}
    Loading={Loading}
    Dialog={Dialog}
  >
    <Component {...props} />
  </Authenticate>;

export default authenticate;
