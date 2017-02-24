import React from 'react';
import { compose, lifecycle, withState, withProps } from 'recompose';
import FormTypes from './FormTypes';

const authenticate = ({
  accounts,
  Loading,
  Dialog,
}) => Component => compose(
  withState('user', 'setUser', null),
  withState('dialog', 'showDialog', false),
  lifecycle({
    async componentDidMount() {
      this.store = accounts.instance.store;
      this.user = null;
      this.unsubscribe = this.store.subscribe(() => {
        const user = this.store.getState().getIn(['accounts', 'user']);
        if (user.size > 0) {
          this.user = user;
          this.props.setUser(user.toJS());
        } else {
          this.props.showDialog(true);
          this.props.setUser(null);
        }
      });
      try {
        this.props.showDialog(false);
        await accounts.resumeSession();
      } catch (err) {
        this.props.showDialog(true);
      }
    },
    componentWillUnmount() {
      this.unsubscribe();
    },
  }),
)(({ user, dialog }) => {
  if (accounts.isLoading()) {
    return <Loading />;
  } else if (user) {
    return withProps({
      accounts,
      user,
    })(Component)();
  } else if (dialog) {
    return withProps({
      accounts,
      formType: FormTypes.LOGIN,
    })(Dialog)();
  }
  return null;
});

export default authenticate;
