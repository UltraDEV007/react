import React from 'react';

export default ({
  DefaultLayout,
  Avatar,
  LoginFields,
  LoginUserField,
  LoginPasswordField,
  LoginButton,
  RecoverButton,
  ...otherProps
}) =>
  <DefaultLayout>
    <Avatar />
    <LoginFields>
      <LoginUserField {...otherProps} />
      <LoginPasswordField {...otherProps} />
    </LoginFields>
    <LoginButton />
    <RecoverButton />
  </DefaultLayout>;
