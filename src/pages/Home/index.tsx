import React from 'react';
import styled from 'styled-components';

import LogoImg from '../../assets/images/logo.png';

const Home: React.FC = () => {
  return (
    <ContainerImg>
      <Img src={LogoImg} alt="logomarca" />
    </ContainerImg>
  );
};

const ContainerImg = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Img = styled.img`
  border-radius: 20px;
  height: calc(100vh - 150px);
`;

export default Home;
