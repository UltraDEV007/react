import React, { PropTypes } from 'react';
import { withProps } from 'recompose';
import { Route } from 'react-router';
import FormTypes from './FormTypes';

const DefaultContainer = ({ children }) => children;

const accountRoutes = ({
  accounts,
  component,
  container = DefaultContainer,
}) => {
  const Component = component;
  const Container = container;
  return (
    <Route>
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
    </Route>
  );
};

accountRoutes.propTypes = {
  accounts: PropTypes.object,
  component: PropTypes.func,
  container: PropTypes.func,
};

export default accountRoutes;
