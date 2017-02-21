// @flow
import AccountsClient from '@accounts/client';

export * from './login';
export * from './reducer';

export const config = transport => AccountsClient.config({}, transport);
