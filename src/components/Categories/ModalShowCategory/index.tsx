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

        <Input name="id" label="Id" disabled />
        <Input name="name" label="Nome" disabled />

        <div className="btnModal">
          <button
            className="btnGreen"
            data-testid="noShow-category-button"
            title="Fechar"
            type="button"
            onClick={setIsOpen}
          >
            <p className="text">Fechar</p>
          </button>
        </div>
      </Form>
    </Modal>
  );
};

export default ModalShowCategory;
