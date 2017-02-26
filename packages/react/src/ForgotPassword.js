import React, { PropTypes, Component } from 'react';
import { validators } from '@accounts/common';
import { isString } from 'lodash';
import { Form, FormInput } from 'react-form';

class ForgotPassword extends Component {
  static propTypes = {
    accounts: PropTypes.object,
    Container: PropTypes.node,
    Content: PropTypes.node,
    Avatar: PropTypes.node,
    ForgotPasswordFields: PropTypes.node,
    ForgotPasswordEmailField: PropTypes.node,
    ForgotPasswordButton: PropTypes.node,
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
    email,
  }) => {
    const { accounts } = this.props;
    this.setState({
      formError: '',
    });
    try {
      await accounts.requestPasswordReset(email);
    } catch (err) {
      this.setState({
        formError: err.message,
      });
    }
  }

  validate = ({
    email,
  }) => {
    const toReturn = {
      email: (() => {
        if (!email) {
          return 'Email is required';
        }
        if (!validators.isEmail(email)) {
          return 'Email is not valid';
        }
        return undefined;
      })(),
    };
    return toReturn;
  }

  renderForgotPasswordFields = (form) => {
    const {
      ForgotPasswordFields,
      ForgotPasswordEmailField,
    } = this.props;
    return (
      <ForgotPasswordFields>
        <FormInput field="email" showErrors={false}>
          {() =>
            <ForgotPasswordEmailField
              {...form}
              value={form.getValue('email', '')}
              onChange={e => form.setValue('email', e.target.value)}
              errorText={form.getTouched('email') && isString(form.getError('email')) ? form.getError('email') : ''}
            />
          }
        </FormInput>
      </ForgotPasswordFields>
    );
  }

  render() {
    const {
      Container,
      Content,
      Header,
      Footer,
      Avatar,
      ForgotPasswordButton,
      FormError,
    } = this.props;
    return (
      <Container>
        <Header />
        <Content>
          <Avatar />
          <Form
            onSubmit={this.onSubmit}
            validate={this.validate}
          >
            {form =>
              <div>
                {this.renderForgotPasswordFields(form)}
                <ForgotPasswordButton
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

export default ForgotPassword;
