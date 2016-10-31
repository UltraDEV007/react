import React from 'react';
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
}) =>
  <Wrapper className={className} style={style.wrapper}>
    <Title style={style.title} />
    <Fields style={style.fields} />
    <Buttons style={style.buttons} />
  </Wrapper>;

Accounts.propTypes = {
  className: React.PropTypes.string,
  style: React.PropTypes.object,
};

Accounts.defaultProps = {
  style: defaultStyle,
};

export default Accounts;
