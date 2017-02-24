import React, { PropTypes } from 'react';
import Flexbox from 'flexbox-react';
import {
  Paper,
} from 'material-ui';

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

export default Content;
