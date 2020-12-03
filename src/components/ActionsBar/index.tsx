import React from 'react';
import { FaPlusCircle, FaPrint } from 'react-icons/fa';
import { FiXCircle } from 'react-icons/fi';

import { ButtonArea, Container, InputContainer, SearchArea } from './styles';

const ActionsBar: React.FC = () => {
  return (
    <Container>
      <ButtonArea>
        <button type="button">
          <FaPlusCircle />
          <span>Cadastrar</span>
        </button>

        <button type="button">
          <FaPrint />
          <span>Imprimir</span>
        </button>
      </ButtonArea>
      <SearchArea>
        <InputContainer>
          <input type="text" name="search" placeholder="pesquisar" />
          <button type="button">
            <FiXCircle />
          </button>
        </InputContainer>
      </SearchArea>
    </Container>
  );
};

export default ActionsBar;
