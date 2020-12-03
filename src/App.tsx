import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/global';

import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Router>
          <Header />
          <Content>
            <Routes />
          </Content>
          <Footer />
        </Router>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.main`
  align-items: center;
  background-color: #f5f5f5;
  display: flex;
  min-height: calc(100vh - 100px);
  flex-direction: column;
  justify-content: center;
  max-width: 960px;
  padding: 10px;
  width: 100%;
`;

export default App;
