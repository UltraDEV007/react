import React, { PropTypes, Component } from 'react';
import isString from 'lodash/isString';
import { Form, FormInput } from 'react-form';

class Login extends Component {
  static propTypes = {
    accounts: PropTypes.object,
    setFormType: PropTypes.func,
    Avatar: PropTypes.node,
    LoginFields: PropTypes.node,
    LoginUserField: PropTypes.node,
    LoginPasswordField: PropTypes.node,
    RecoverButton: PropTypes.node,
    LoginButton: PropTypes.node,
    SignupButton: PropTypes.node,
    Header: PropTypes.node,
    Footer: PropTypes.node,
    Container: PropTypes.node,
    Content: PropTypes.node,
    FormError: PropTypes.node,
  }
  static defaultProps = {
    Container: () => <div />,
    Header: () => <div />,
    Content: () => <div />,
    Footer: () => <div />,
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
      formError: '',
    };
  }
  onSubmit = async (values) => {
    const { accounts } = this.props;
    this.setState({
      formError: '',
    });
    try {
      await accounts.loginWithPassword(values.user, values.password);
    } catch (err) {
      this.setState({
        formError: err.message,
      });
    }
  }
  validate = ({
    user,
    password,
  }) => ({
    user: !user ? 'Username or Email is required' : undefined,
    password: !password ? 'Password is required' : undefined,
  })
  render() {
    const {
      Container,
      Content,
      Header,
      Footer,
      Avatar,
      LoginFields,
      LoginUserField,
      LoginPasswordField,
      LoginButton,
      RecoverButton,
      FormError,
      ...otherProps
    } = this.props;
    return (
      <Container>
        <Header />
        <Content {...otherProps}>
          <Avatar {...otherProps} />
          <Form
            onSubmit={this.onSubmit}
            validate={this.validate}
          >
            {form =>
              <LoginFields>
                <FormInput field="user" showErrors={false}>
                  {() =>
                    <LoginUserField
                      {...form}
                      label="Username or email"
                      value={form.getValue('user', '')}
                      onChange={e => form.setValue('user', e.target.value)}
                      errorText={form.getTouched('user') && isString(form.getError('user')) ? form.getError('user') : ''}
                    />
                  }
                </FormInput>
                <FormInput field="password" showErrors={false}>
                  {() =>
                    <LoginPasswordField
                      {...form}
                      label="Password"
                      onChange={e => form.setValue('password', e.target.value)}
                      value={form.getValue('password', '')}
                      errorText={form.getTouched('password') && isString(form.getError('password')) ? form.getError('password') : ''}
                    />
                  }
                </FormInput>
                <LoginButton
                  label="Sign in"
                  onClick={form.submitForm}
                  {...otherProps}
                />
              </LoginFields>
            }
          </Form>
          <RecoverButton {...otherProps} />
          <FormError errorText={this.state.formError} />
        </Content>
        <Footer />
      </Container>
    );
  }
}

export default Login;
