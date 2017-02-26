import React, { PropTypes } from 'react';
import Flexbox from 'flexbox-react';
import {
  Paper,
} from 'material-ui';

const style = {
  minWidth: 350,
  padding: 40,
  backgroundColor: '#f7f7f7',
  marginBottom: 20,
};

const Content = ({ children, noPaper }) =>
  (noPaper ?
    <div style={style}>
      <Flexbox flexDirection="column" justifyContent="center" alignItems="center">
        {children}
      </Flexbox>
    </div>
    :
    <Paper
      style={style}
    >
      <Flexbox flexDirection="column" justifyContent="center" alignItems="center">
        {children}
      </Flexbox>
    </Paper>);

Content.propTypes = {
  children: PropTypes.node,
  noPaper: PropTypes.boolean,
};

Content.defaltProps = {
  noPaper: false,
};

export default Content;
