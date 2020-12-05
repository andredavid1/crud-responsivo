import React, { useState } from 'react';

import ActionsBar from '../../components/ActionsBar';

import { Container, TitleContainer, Title } from '../../styles/pages';

const Products: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  return (
    <Container>
      <TitleContainer>
        <Title>Produtos</Title>
      </TitleContainer>

      <ActionsBar openModal={toggleModal} />
    </Container>
  );
};

export default Products;
