import React from 'react';

import ActionsBar from '../../components/ActionsBar';
import TableCategories from '../../components/Categories/TableCategories';

import { Container, TitleContainer, Title } from '../../styles/pages';

const Categories: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Categorias</Title>
      </TitleContainer>

      <ActionsBar />

      <TableCategories />
    </Container>
  );
};

export default Categories;
