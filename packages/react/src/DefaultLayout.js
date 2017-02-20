import React, { PropTypes } from 'react';

const DefaultLayout = ({
  Container,
  Header,
  Content,
  Footer,
  children,
}) => (
  <Container>
    <Header />
    <Content>
      {children}
    </Content>
    <Footer />
  </Container>
  );


DefaultLayout.propTypes = {
  children: PropTypes.node,
  Container: PropTypes.node,
  Header: PropTypes.node,
  Content: PropTypes.node,
  Footer: PropTypes.node,
};

DefaultLayout.defaultProps = {
  Container: () => <div />,
  Header: () => <div />,
  Content: () => <div />,
  Footer: () => <div />,
};

export default DefaultLayout;
