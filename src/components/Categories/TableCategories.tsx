import React from 'react';
import { FaEdit, FaSearch, FaTrashAlt } from 'react-icons/fa';

import Pagination from '../Pagination';

import { Container, Table } from './stylesTable';

const TableCategories = () => {
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
          <tr>
            <td>1</td>
            <td>Categoria 1</td>
            <td>
              <button type="button" title="detalhes">
                <FaSearch />
              </button>
              <button type="button" title="editar">
                <FaEdit />
              </button>
              <button type="button" title="excluir">
                <FaTrashAlt />
              </button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Categoria 1</td>
            <td>
              <button type="button">
                <FaSearch />
              </button>
              <button type="button">
                <FaEdit />
              </button>
              <button type="button">
                <FaTrashAlt />
              </button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Categoria 1</td>
            <td>
              <button type="button">
                <FaSearch />
              </button>
              <button type="button">
                <FaEdit />
              </button>
              <button type="button">
                <FaTrashAlt />
              </button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Categoria 1</td>
            <td>
              <button type="button">
                <FaSearch />
              </button>
              <button type="button">
                <FaEdit />
              </button>
              <button type="button">
                <FaTrashAlt />
              </button>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Categoria 1</td>
            <td>
              <button type="button">
                <FaSearch />
              </button>
              <button type="button">
                <FaEdit />
              </button>
              <button type="button">
                <FaTrashAlt />
              </button>
            </td>
          </tr>
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
