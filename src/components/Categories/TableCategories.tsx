import React from 'react';
import { FaEdit, FaSearch, FaTrashAlt } from 'react-icons/fa';

import Pagination from '../Pagination';

import { Container, Table } from './stylesTable';

interface ICategory {
  id: number;
  name: string;
}

interface IProps {
  data: ICategory[];
  handleEditCategory: (category: ICategory) => void;
  handleConfirmDeleteCategory: (category: ICategory) => void;
  handleShowCategory: (category: ICategory) => void;
}

const TableCategories: React.FC<IProps> = ({
  data,
  handleEditCategory,
  handleConfirmDeleteCategory,
  handleShowCategory,
}) => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th className="bigger">Categoria</th>
            <th>{/* Actions */}</th>
          </tr>
        </thead>
        <tbody>
          {!data.length && (
            <tr>
              <td colSpan={3}>Nenhum registro foi encontrado.</td>
            </tr>
          )}

          {data &&
            data.map(category => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.name}</td>
                <td>
                  <button
                    type="button"
                    title="detalhes"
                    onClick={() => {
                      handleShowCategory(category);
                    }}
                  >
                    <FaSearch />
                  </button>
                  <button
                    type="button"
                    title="editar"
                    onClick={() => {
                      handleEditCategory(category);
                    }}
                  >
                    <FaEdit />
                  </button>
                  <button
                    type="button"
                    title="excluir"
                    onClick={() => {
                      handleConfirmDeleteCategory(category);
                    }}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
        <tfoot>
          {/* Se não houver registros não exibe nada */}
          <tr>
            <td colSpan={3}>
              <Pagination />
            </td>
          </tr>
        </tfoot>
      </Table>
    </Container>
  );
};

export default TableCategories;
