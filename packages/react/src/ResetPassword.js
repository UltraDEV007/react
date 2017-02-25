import React, { PropTypes, Component } from 'react';
import { validators } from '@accounts/common';
import { isString } from 'lodash';
import { Form, FormInput } from 'react-form';

class ResetPassword extends Component {
  static propTypes = {
    accounts: PropTypes.object,
    Container: PropTypes.node,
    Content: PropTypes.node,
    Avatar: PropTypes.node,
    ResetPasswordFields: PropTypes.node,
    ResetPasswordEmailField: PropTypes.node,
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

  renderResetPasswordFields = (form) => {
    const {
      ResetPasswordFields,
      ResetPasswordEmailField,
    } = this.props;
    return (
      <ResetPasswordFields>
        <FormInput field="email" showErrors={false}>
          {() =>
            <ResetPasswordEmailField
              {...form}
              value={form.getValue('email', '')}
              onChange={e => form.setValue('email', e.target.value)}
              errorText={form.getTouched('email') && isString(form.getError('email')) ? form.getError('email') : ''}
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
