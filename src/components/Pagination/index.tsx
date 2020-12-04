import React from 'react';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

import { Container } from './styles';

const Pagination: React.FC = () => {
  return (
    <Container>
      <button type="button" title="primeira">
        <FiChevronsLeft />
      </button>

      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button">4</button>
      <button type="button">5</button>

      <button type="button" title="última">
        <FiChevronsRight />
      </button>
    </Container>
  );
};

export default Pagination;
