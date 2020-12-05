import React, { useRef, useCallback } from 'react';

import { FiCheckSquare } from 'react-icons/fi';
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
        <h1>Nova Categoria</h1>
        <Input name="name" placeholder="categoria" />

        <button type="submit" data-testid="add-category-button">
          <p className="text">Salvar</p>
          <div className="icon">
            <FiCheckSquare size={18} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddCategory;
