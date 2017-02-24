import React, { PropTypes } from 'react';
import { compose, branch, lifecycle, withState } from 'recompose';
import FormTypes from './FormTypes';

const Authenticated = compose(
  withState('user', 'setUser', null),
  lifecycle({
    componentDidMount() {
      this.unsubscribe = this.store.subscribe(() => {
        const user = this.store.getState().getIn(['accounts', 'user']);
        if (!user.equals(this.user)) {
          this.user = user;
          this.props.setUser(user);
        }
      });
    },
    componentWillUnmount() {
      this.unsubscribe();
    },
  }),
)(({
  user,
  setUser,
}) => <div>{user}</div>);

export default Authenticated;
