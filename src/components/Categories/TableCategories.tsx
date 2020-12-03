import React from 'react';
import { FaEdit, FaSearch, FaTrashAlt } from 'react-icons/fa';

import { Container, Table } from './stylesTable';

const TableCategories = () => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Categoria</th>
            <th>{/* Actions */}</th>
          </tr>
        </thead>
        <tbody>
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
      </Table>
    </Container>
  );
};

export default TableCategories;
