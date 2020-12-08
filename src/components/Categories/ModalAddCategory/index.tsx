import React, { useRef, useCallback } from 'react';

import { FormHandles } from '@unform/core';
// import { Form } from '@unform/web';
import Modal from '../../Modal';
import Input from '../../Input';

import { Form } from './styles';

interface ICategory {
  id: number;
  name: string;
}

interface ICreateCategoryData {
  name: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddCategory: (category: Omit<ICategory, 'id'>) => void;
}

const ModalAddCategory: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddCategory,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ICreateCategoryData) => {
      handleAddCategory(data);
      setIsOpen();
    },
    [handleAddCategory, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Cadastrar categoria</h1>

        <Input name="name" label="Nome" placeholder="nome da categoria" />

        <div className="btnModal">
          <button
            className="btnRed"
            data-testid="noShow-category-button"
            title="cancelar"
            type="button"
            onClick={setIsOpen}
          >
            <p className="text">Cancelar</p>
          </button>

          <button
            className="btnGreen"
            title="salvar"
            type="submit"
            data-testid="add-category-button"
          >
            <p className="text">Salvar</p>
          </button>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalAddCategory;
