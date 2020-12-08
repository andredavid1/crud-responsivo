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
  handleUpdateCategory: (category: Omit<ICategory, 'id'>) => void;
  selectedCategory: ICategory;
}

interface IEditCategoryData {
  name: string;
}

const ModalEditCategory: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  selectedCategory,
  handleUpdateCategory,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: IEditCategoryData) => {
      handleUpdateCategory(data);
      setIsOpen();
    },
    [handleUpdateCategory, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        initialData={selectedCategory}
      >
        <h1>Editar categoria</h1>

        <Input name="name" label="Nome" placeholder="Categoria" />

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
            <p className="text">Atualizar</p>
          </button>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalEditCategory;
