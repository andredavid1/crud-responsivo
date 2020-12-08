import React, { useRef, useCallback } from 'react';

import { FiXCircle } from 'react-icons/fi';
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
  selectedCategory: ICategory;
}

const ModalShowCategory: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  selectedCategory,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async () => {
    setIsOpen();
  }, [setIsOpen]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        initialData={selectedCategory}
      >
        <h1>Detalhes da Categoria</h1>
        <label htmlFor="idCategory">Id:</label>
        <Input id="idCategory" name="id" disabled />
        <label htmlFor="name">Nome:</label>
        <Input id="name" name="name" disabled />

        <button
          data-testid="noShow-category-button"
          title="Fechar"
          type="button"
          onClick={setIsOpen}
        >
          <div className="text">Fechar</div>
          <div className="icon">
            <FiXCircle size={18} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalShowCategory;
