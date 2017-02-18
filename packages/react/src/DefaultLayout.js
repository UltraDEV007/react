import React from 'react';

const DefaultLayout = ({
  components,
  handleSubmitLogin,
  handleSubmitSignup,
}) => {
  const {
      Container,
      Header,
      Content,
      Avatar,
      LoginFields,
      LoginUserField,
      LoginPasswordField,
      SignupFields,
      LoginButton,
      SignupButton,
      RecoverButton,
      Footer } = components;
  return (
    <Container>
      <Header />
      <Content>
        <Avatar />
        <LoginFields>
          <LoginUserField />
          <LoginPasswordField />
        </LoginFields>
        <LoginButton />
        <RecoverButton />
      </Content>
      <SignupButton />
      <Footer />
    </Container>
  );
};

DefaultLayout.defaultProps = {
  Container: () => <div />,
  Header: () => <div />,
  Content: () => <div />,
  Avatar: () => <div />,
  LoginFields: () => <div />,
  LoginUserField: () => <div />,
  LoginPasswordField: () => <div />,
  SignupFields: () => <div />,
  LoginButton: () => <div />,
  SignupButton: () => <div />,
  RecoverButton: () => <div />,
  Footer: () => <div />,
};

export default DefaultLayout;
