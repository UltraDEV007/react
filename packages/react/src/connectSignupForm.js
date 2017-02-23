import Accounts from '@accounts/client';
import { Form, connectForm } from 'immutable-form';
import { PasswordSignupFields, validators } from '@accounts/common';

const validateUsername = username => username.trim().length === 0 && 'Username is required';
const validateEmail = email => !validators.isEmail(email) && 'Not a valid email address';

export default component =>
  connectForm(() => new Form('signup', {
    fields: ({
      password: {
        validate: [
          password =>
            password.length < Accounts.options().minimumPasswordLength
              && `Password must be at least ${Accounts.options().minimumPasswordLength} characters`,
        ],
      },
      passwordConfirm: {
        validate: [
          (confirmPassword, { form }) => confirmPassword !== form.getField('password').get('value')
            && 'Passwords do not match',
        ],
      },
      // eslint-disable-next-line consistent-return
      ...(() => {
        const {
        EMAIL_ONLY,
        USERNAME_ONLY,
        USERNAME_AND_EMAIL,
        USERNAME_AND_OPTIONAL_EMAIL,
      } = PasswordSignupFields;
        switch (Accounts.options().passwordSignupFields) {
          case EMAIL_ONLY:
            return {
              email: {
                validate: [
                  validateEmail,
                ],
              },
            };
          case USERNAME_ONLY:
            return {
              username: {
                validate: [
                  validateUsername,
                ],
              },
            };
          case USERNAME_AND_EMAIL:
          case USERNAME_AND_OPTIONAL_EMAIL:
            return {
              username: {
                validate: [
                  validateUsername,
                ],
              },
              email: {
                validate: [
                  validateEmail,
                ],
              },
            };
          default:
            break;
        }
      })(),
    }),
  }).setSubmit(({ form }) => Accounts.createUser({
    password: form.getField('password').get('value'),
    username: form.getField('username').get('value'),
    email: form.getField('email').get('value'),
  }).catch((err) => {
    form.addError(err.serialize().message);
  })))(component);
