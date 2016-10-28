import React from 'react';
import { default as AccountsClient } from 'graphql-accounts';
import './Wrapper';

const defaultStyle = {
  wrapper: {
    minWidth: 500,
  },
  title: {

  },
  fields: {

  },
};

const {
  Wrapper,
  Title,
  Fields,
} = AccountsClient.ui;

const Accounts = ({
  className,
  style,
}) =>
  <Wrapper className={className} style={style.wrapper}>
    <Title style={style.title} />
    <Fields style={style.fields} />
  </Wrapper>;

Accounts.propTypes = {
  className: React.PropTypes.string,
  style: React.PropTypes.object,
};

Accounts.defaultProps = {
  style: defaultStyle,
};

export default Accounts;
