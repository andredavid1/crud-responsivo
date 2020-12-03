import React from 'react';

import ActionsBar from '../../components/ActionsBar';

import { Container, TitleContainer, Title } from '../../styles/pages';

const Products: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Produtos</Title>
      </TitleContainer>

      <ActionsBar />
    </Container>
  );
};

export default Products;
