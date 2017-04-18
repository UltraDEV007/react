import PropTypes from 'prop-types';
import React from 'react';
import withProps from 'recompose/withProps';
import { Route } from 'react-router';
import FormTypes from './FormTypes';

const DefaultContainer = ({ children }) => children;

const onEnter = accounts => async (nextState, replace, callback) => {
  try {
    if (accounts.user()) {
      replace(accounts.options().homePath);
    }
    callback();
  } catch (err) {
    callback();
  }
};

const accountRoutes = ({
  accounts,
  component,
  container = DefaultContainer,
}) => {
  const Component = component;
  const Container = container;
  return (
    <Route onEnter={onEnter(accounts)}>
      <Route
        path={accounts.options().loginPath}
        component={
          () =>
            <Container>
              {withProps({
                formType: FormTypes.LOGIN,
                accounts,
              })(Component)()}
            </Container>
        }
      />
      <Route
        path={accounts.options().signUpPath}
        component={
          () =>
            <Container>
              {withProps({
                formType: FormTypes.SIGNUP,
                accounts,
              })(Component)()}
            </Container>
        }
      />
      <Route
        path={accounts.options().forgotPasswordPath}
        component={
          () =>
            <Container>
              {withProps({
                formType: FormTypes.FORGOT_PASSWORD,
                accounts,
              })(Component)()}
            </Container>
        }
      />
      <Route
        path={accounts.options().resetPasswordPath}
        component={
          ({ params }) =>
            <Container>
              {withProps({
                formType: FormTypes.RESET_PASSWORD,
                accounts,
                token: params.token,
              })(Component)()}
            </Container>
        }
      />
    </Route>
  );
};

accountRoutes.propTypes = {
  accounts: PropTypes.object,
  component: PropTypes.func,
  container: PropTypes.func,
};

export default accountRoutes;
