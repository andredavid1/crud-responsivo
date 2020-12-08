import React, { useRef, useCallback } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../../Modal';
import Input from '../../Input';

interface ICategory {
  id: number;
  name: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleDeleteCategory: (category: ICategory) => void;
  selectedCategory: ICategory;
}

const ModalEditCategory: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  selectedCategory,
  handleDeleteCategory,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ICategory) => {
      handleDeleteCategory(data);
      setIsOpen();
    },
    [handleDeleteCategory, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        initialData={selectedCategory}
      >
        <h1>Deseja realmente excluir essa categoria?</h1>

        <Input name="id" label="Id" disabled />
        <Input name="name" label="Nome" disabled />

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
            data-testid="edit-category-button"
            title="atualizar"
            type="submit"
          >
            <p className="text">Deletar</p>
          </button>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalEditCategory;
