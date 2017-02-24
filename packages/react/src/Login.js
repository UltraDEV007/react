import React, { PropTypes, Component } from 'react';
import { isString } from 'lodash';
import { Form, FormInput } from 'react-form';

class Login extends Component {
  static propTypes = {
    accounts: PropTypes.object,
    DefaultLayout: PropTypes.node,
    Avatar: PropTypes.node,
    LoginFields: PropTypes.node,
    LoginUserField: PropTypes.node,
    LoginPasswordField: PropTypes.node,
    RecoverButton: PropTypes.node,
    LoginButton: PropTypes.node,
    SignupButton: PropTypes.node,
    Header: PropTypes.node,
    Footer: PropTypes.node,
    setFormType: PropTypes.func,
  }
  onSubmit = async (values) => {
    const { accounts } = this.props;
    await accounts.loginWithPassword(values.user, values.password);
  }
  validate = ({
    user,
    password,
  }) => ({
    user: !user ? 'Username or Email is required' : undefined,
    password: (() => { //eslint-disable-line
      const { minimumPasswordLength } = this.props.accounts.options();
      if (!password) {
        return 'Password is required';
      }
      if (isString(password) && password.length < minimumPasswordLength) {
        return `Password must be at least ${minimumPasswordLength} characters`;
      }
    })(),
  })
  render() {
    const {
      DefaultLayout,
      Header,
      Footer,
      Avatar,
      LoginFields,
      LoginUserField,
      LoginPasswordField,
      LoginButton,
      RecoverButton,
      ...otherProps
    } = this.props;
    return (
      <DefaultLayout Header={Header} Footer={Footer}>
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
                    onChange={e => form.setValue('password', e.target.value)}
                    value={form.getValue('password', '')}
                    errorText={form.getTouched('password') && isString(form.getError('password')) ? form.getError('password') : ''}
                  />
                }
              </FormInput>
              <LoginButton
                onClick={form.submitForm}
                {...otherProps}
              />
            </LoginFields>
          }
        </Form>
        <RecoverButton {...otherProps} />
      </DefaultLayout>
    );
  }
}

export default Login;
