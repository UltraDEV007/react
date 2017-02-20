import React, { PropTypes, Component } from 'react';
import AccountsClient from '@accounts/client';
import FormTypes from './FormTypes';
import connectLoginForm from './connectLoginForm';

class Accounts extends Component {
  static propTypes = {
    formType: PropTypes.string,
    Login: PropTypes.node,
    Signup: PropTypes.node,
  }
  static defaultProps = {
    formType: FormTypes.LOGIN,
  }
  constructor(props) {
    super(props);
    this.state = {
      formType: this.props.formType,
    };
  }
  setFormType = (formType) => {
    this.setState({
      formType,
    });
  }
  render() {
    const {
      Login,
      Signup,
    } = this.props;
    let ConnectedForm;
    switch (this.state.formType) {
      case FormTypes.LOGIN:
        ConnectedForm = connectLoginForm(<Login />);
        break;
      default:
        break;
    }
    return <ConnectedForm setFormType={this.setFormType} {...this.props} />;
  }
}

AccountsClient.ui.Accounts = Accounts;
export default Accounts;
