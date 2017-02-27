import React, { PropTypes, Component } from 'react';
import isString from 'lodash/isString';
import { Form, FormInput } from 'react-form';

class ResetPassword extends Component {
  static propTypes = {
    accounts: PropTypes.object,
    Container: PropTypes.node,
    Content: PropTypes.node,
    Avatar: PropTypes.node,
    ResetPasswordFields: PropTypes.node,
    ResetPasswordPasswordField: PropTypes.node,
    ResetPasswordPasswordConfirmField: PropTypes.node,
    ResetPasswordButton: PropTypes.node,
    Header: PropTypes.node,
    Footer: PropTypes.node,
    FormError: PropTypes.node,
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      formError: '',
    };
  }

  onSubmit = async ({
    password,
  }) => {
    const { accounts, params } = this.props;
    this.setState({
      formError: '',
    });
    try {
      await accounts.resetPassword(params.token, password);
    } catch (err) {
      this.setState({
        formError: err.message,
      });
    }
  }

  validate = ({
    password,
    passwordConfirm,
  }) => {
    const toReturn = {
      password: (() => { //eslint-disable-line
        const { minimumPasswordLength } = this.props.accounts.options();
        if (!password) {
          return 'Password is required';
        }
        if (isString(password) && password.length < minimumPasswordLength) {
          return `Password must be at least ${minimumPasswordLength} characters`;
        }
      })(),
      passwordConfirm: password !== passwordConfirm ? 'Passwords do not match' : undefined,
    };
    return toReturn;
  }

  renderResetPasswordFields = (form) => {
    const {
      ResetPasswordFields,
      ResetPasswordPasswordField,
      ResetPasswordPasswordConfirmField,
    } = this.props;
    return (
      <ResetPasswordFields>
        <FormInput field="email" showErrors={false}>
          {() =>
            <ResetPasswordPasswordField
              {...form}
              value={form.getValue('password', '')}
              onChange={e => form.setValue('password', e.target.value)}
              errorText={form.getTouched('password') && isString(form.getError('password')) ? form.getError('password') : ''}
            />
          }
        </FormInput>
        <FormInput field="passwordConfirm" showErrors={false}>
          {() =>
            <ResetPasswordPasswordConfirmField
              {...form}
              value={form.getValue('passwordConfirm', '')}
              onChange={e => form.setValue('passwordConfirm', e.target.value)}
              errorText={form.getTouched('passwordConfirm') && isString(form.getError('passwordConfirm')) ? form.getError('passwordConfirm') : ''}
            />
          }
        </FormInput>
      </ResetPasswordFields>
    );
  }

  render() {
    const {
      Container,
      Content,
      Header,
      Footer,
      Avatar,
      ResetPasswordButton,
      FormError,
      ...otherProps
    } = this.props;
    return (
      <Container >
        <Header />
        <Content {...otherProps}>
          <Avatar />
          <Form
            onSubmit={this.onSubmit}
            validate={this.validate}
          >
            {form =>
              <div>
                {this.renderResetPasswordFields(form)}
                <ResetPasswordButton
                  onClick={form.submitForm}
                />
              </div>
            }
          </Form>
          <FormError errorText={this.state.formError} />
        </Content>
        <Footer />
      </Container>
    );
  }
}

export default ResetPassword;
