import React, { PropTypes } from 'react';
import Flexbox from 'flexbox-react';
import { DefaultLayout } from '@accounts/react';
import {
  Paper,
} from 'material-ui';

const Container = ({ children }) =>
  <Flexbox flexDirection="column" justifyContent="center" alignItems="center">
    {children}
  </Flexbox>;

Container.propTypes = {
  children: PropTypes.node,
};

const Content = ({ children }) =>
  <Paper
    style={{
      minWidth: 350,
      padding: 40,
      backgroundColor: '#f7f7f7',
      marginBottom: 20,
    }}
  >
    <Flexbox flexDirection="column" justifyContent="center" alignItems="center">
      {children}
    </Flexbox>
  </Paper>;

Content.propTypes = {
  children: PropTypes.node,
};

export default ({ ...otherProps }) =>
  <DefaultLayout
    Container={Container}
    Content={Content}
    {...otherProps}
  />;
