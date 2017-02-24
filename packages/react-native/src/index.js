// @flow
import { AsyncStorage } from 'react-native';
import AccountsClient, { reducer } from '@accounts/client';
import type { TransportInterface } from '@accounts/client';
import type { Store } from 'redux';

export * from './login';
export * from './reducer';

export const config = (transport: TransportInterface, store?: Store<Object>) => AccountsClient.config({
  store,
  tokenStorage: AsyncStorage,
  onEnrollAccountHook: () => null,
  onResetPasswordHook: () => null,
  onVerifyEmailHook: () => null,
  onSignedInHook: () => null,
  onSignedOutHook: () => null,
}, transport);
