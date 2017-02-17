import Accounts from '@accounts/client';
import { Form } from 'immutable-form';

const validateUser = user => user.trim().length === 0 && 'Username or email is required';

const loginForm = () => new Form('login', {
  fields: {
    user: {
      validate: [
        validateUser,
      ],
    },
    password: {
      validate: [
        password => password.length === 0 && 'Password is required',
      ],
    },
  },
}).setSubmit(({ form }) =>
  Accounts.loginWithPassword(
    form.getField('user').get('value'),
    form.getField('password').get('value'),
  ).catch((err) => {
    form.addError(err.serialize().message);
  }));

export default loginForm;
