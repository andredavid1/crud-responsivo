import React from 'react';
import { FaPlusCircle, FaPrint } from 'react-icons/fa';
import { FiXCircle } from 'react-icons/fi';

import {
  ButtonArea,
  Container,
  InputContainer,
  LimitArea,
  SearchArea,
} from './styles';

interface IProps {
  openModal: () => void;
}

const ActionsBar: React.FC<IProps> = ({ openModal }) => {
  return (
    <Container>
      <LimitArea>
        <select name="limit" id="limit" title="resultados/página">
          <option value={0}>Todos</option>
          <option value={1}>10</option>
          <option value={2}>25</option>
          <option value={3}>50</option>
          <option value={4}>100</option>
        </select>
      </LimitArea>
      <ButtonArea>
        <button
          type="button"
          onClick={() => {
            openModal();
          }}
        >
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
