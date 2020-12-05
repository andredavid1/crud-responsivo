import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
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
  editingCategory: ICategory;
}

interface IEditCategoryData {
  name: string;
}

const ModalEditCategory: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  editingCategory,
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
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingCategory}>
        <h1>Editar Categoria</h1>
        <Input name="name" placeholder="Categoria" />

        <button type="submit" data-testid="edit-category-button">
          <div className="text">Atualizar</div>
          <div className="icon">
            <FiCheckSquare size={18} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEditCategory;
