import React from 'react';
import { connect, Provider } from 'react-redux';
import { default as AccountsClient } from '@accounts/accounts';
import './Wrapper';

const defaultStyle = {
  wrapper: {
    minWidth: 500,
  },
  title: {

  },
  fields: {

  },
  buttons: {
    wrapper: {

    },
    button: {

    },
  },
};

export { defaultStyle };

const {
  Wrapper,
  Title,
  Fields,
  Buttons,
} = AccountsClient.ui;

const Accounts = ({
  className,
  style,
  formType,
}) =>
  <Wrapper className={className} style={style.wrapper}>
    <Title style={style.title} />
    <Buttons style={style.buttons} />
  </Wrapper>;


Accounts.propTypes = {
  className: React.PropTypes.string,
  style: React.PropTypes.object,
  formType: React.PropTypes.string,
};

Accounts.defaultProps = {
  style: defaultStyle,
};

// Accounts.contextTypes = {
//   store: React.PropTypes.object,
// };

// TODO Support Immutable
const mapStateToProps = state => ({
  formType: 'login',
});

export default Accounts;
