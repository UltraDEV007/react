import React, { PropTypes } from 'react';

const styles = {
  base: {
    textAlign: 'center',
  },
};

const Title = ({ title }) =>
  <div style={styles.base}>
    <h2>
      { title }
    </h2>
  </div>;

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
