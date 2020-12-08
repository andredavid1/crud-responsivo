import React, { useEffect, useState } from 'react';

import ActionsBar from '../../components/ActionsBar';
import AlertsBar from '../../components/AlertsBar';
import ModalAddCategory from '../../components/Categories/ModalAddCategory';
import ModalDeleteCategory from '../../components/Categories/ModalDeleteCategory';
import ModalEditCategory from '../../components/Categories/ModalEditCategory';
import ModalShowCategory from '../../components/Categories/ModalShowCategory';
import TableCategories from '../../components/Categories/TableCategories';
import api from '../../services/api';

import { Container, TitleContainer, Title } from '../../styles/pages';

interface ICategory {
  id: number;
  name: string;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [typeAlert, setTypeAlert] = useState('');
  const [messageAlert, setMessageAlert] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [showModalOpen, setShowModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ICategory>(
    {} as ICategory,
  );

  function clearAlert(): void {
    setTypeAlert('');
    setMessageAlert('');
  }

  function toggleModal(): void {
    clearAlert();
    setModalOpen(!modalOpen);
  }

  function toggleDeleteModal(): void {
    clearAlert();
    setDeleteModalOpen(!deleteModalOpen);
  }

  function toggleEditModal(): void {
    clearAlert();
    setEditModalOpen(!editModalOpen);
  }

  function toggleShowModal(): void {
    clearAlert();
    setShowModalOpen(!showModalOpen);
  }

  async function handleAddCategory(
    category: Omit<ICategory, 'id'>,
  ): Promise<void> {
    try {
      const response = await api.post('categories', category);

      setCategories([...categories, response.data]);

      setTypeAlert('success');
      setMessageAlert('Categoria criada com sucesso.');
    } catch (err) {
      setTypeAlert('error');
      setMessageAlert(`Erro ao cadastrar a categoria ${err.message}`);
    }
  }

  function handleConfirmDeleteCategory(category: ICategory): void {
    setSelectedCategory(category);
    setDeleteModalOpen(true);
  }

  async function handleDeleteCategory(category: ICategory): Promise<void> {
    try {
      await api.delete(`/categories/${category.id}`);

      const updatedState = categories.filter(item => item.id !== category.id);

      setCategories(updatedState);

      setTypeAlert('success');
      setMessageAlert('Categoria deletada com sucesso.');
    } catch (err) {
      setTypeAlert('error');
      setMessageAlert(`Erro ao deletar a categoria ${err.message}`);
    }
  }

  function handleEditCategory(category: ICategory): void {
    setSelectedCategory(category);
    setEditModalOpen(true);
  }

  function handleShowCategory(category: ICategory): void {
    setSelectedCategory(category);
    setShowModalOpen(true);
  }

  async function handleUpdateCategory(
    category: Omit<ICategory, 'id'>,
  ): Promise<void> {
    try {
      const { id } = selectedCategory;

      const updatedCategory = { id, ...category };

      const response = await api.put(
        `/categories/${selectedCategory.id}`,
        updatedCategory,
      );

      const updatedState = categories.filter(item => item.id !== id);

      setCategories([...updatedState, response.data]);

      setTypeAlert('success');
      setMessageAlert('Categoria atualizada com sucesso.');
    } catch (err) {
      setTypeAlert('error');
      setMessageAlert(`Erro ao atualizar a categoria ${err.message}`);
    }
  }

  useEffect(() => {
    async function loadData(): Promise<void> {
      await api.get('categories').then(response => {
        setCategories(response.data);
      });
    }
    loadData();
  }, [categories]);

  return (
    <Container>
      <TitleContainer>
        <Title>Categorias</Title>
      </TitleContainer>

      <ActionsBar openModal={toggleModal} />

      {messageAlert && <AlertsBar type={typeAlert} message={messageAlert} />}

      <TableCategories
        data={categories}
        handleEditCategory={handleEditCategory}
        handleConfirmDeleteCategory={handleConfirmDeleteCategory}
        handleShowCategory={handleShowCategory}
      />

      <ModalAddCategory
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddCategory={handleAddCategory}
      />

      <ModalDeleteCategory
        isOpen={deleteModalOpen}
        setIsOpen={toggleDeleteModal}
        selectedCategory={selectedCategory}
        handleDeleteCategory={handleDeleteCategory}
      />

      <ModalEditCategory
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        selectedCategory={selectedCategory}
        handleUpdateCategory={handleUpdateCategory}
      />

      <ModalShowCategory
        isOpen={showModalOpen}
        setIsOpen={toggleShowModal}
        selectedCategory={selectedCategory}
      />
    </Container>
  );
};

export default Categories;
