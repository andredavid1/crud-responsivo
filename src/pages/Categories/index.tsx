import React, { useEffect, useState } from 'react';

import ActionsBar from '../../components/ActionsBar';
import ModalAddCategory from '../../components/Categories/ModalAddCategory';
import ModalEditCategory from '../../components/Categories/ModalEditCategory';
import TableCategories from '../../components/Categories/TableCategories';
import api from '../../services/api';

import { Container, TitleContainer, Title } from '../../styles/pages';

interface ICategory {
  id: number;
  name: string;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<ICategory>(
    {} as ICategory,
  );

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen);
  }

  async function handleAddCategory(
    category: Omit<ICategory, 'id'>,
  ): Promise<void> {
    try {
      const response = await api.post('categories', category);

      setCategories([...categories, response.data]);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  }

  async function handleDeleteCategory(id: number): Promise<void> {
    await api.delete(`/categories/${id}`);

    const updatedState = categories.filter(category => category.id !== id);

    setCategories(updatedState);
  }

  function handleEditCategory(category: ICategory): void {
    setEditingCategory(category);
    setEditModalOpen(true);
  }

  async function handleUpdateCategory(
    category: Omit<ICategory, 'id'>,
  ): Promise<void> {
    const { id } = editingCategory;

    const updatedCategory = { id, ...category };

    const response = await api.put(
      `/categories/${editingCategory.id}`,
      updatedCategory,
    );

    const updatedState = categories.filter(item => item.id !== id);

    setCategories([...updatedState, response.data]);
  }

  useEffect(() => {
    async function loadData(): Promise<void> {
      await api.get('categories').then(response => {
        setCategories(response.data);
      });
    }
    loadData();
  }, [setCategories]);

  return (
    <Container>
      <TitleContainer>
        <Title>Categorias</Title>
      </TitleContainer>

      <ActionsBar openModal={toggleModal} />

      <TableCategories
        data={categories}
        handleEditCategory={handleEditCategory}
        handleDeleteCategory={handleDeleteCategory}
      />

      <ModalAddCategory
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddCategory={handleAddCategory}
      />

      <ModalEditCategory
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingCategory={editingCategory}
        handleUpdateCategory={handleUpdateCategory}
      />
    </Container>
  );
};

export default Categories;
