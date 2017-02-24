// @flow

import { Record } from 'immutable';
import { validators } from '@accounts/common';
import { createFormReducer } from '../immutable-form/reducer';
import { Field } from '../immutable-form/state';

const validateUserField = value =>
  !validators.validateEmail(value) && !validators.validateUsername(value) ?
    'Invalid username or email!': null;

const validatePassword = value => !validators.validatePassword(value) ? 'Invalid password' : null;

// State definition

const LoginState = Record({
  user: new Field({ validate: validateUserField }),
  password: new Field({ validate: validatePassword }),
  submitting: false,
  error: null,
});

// Reducer

export default createFormReducer('login', new LoginState());
