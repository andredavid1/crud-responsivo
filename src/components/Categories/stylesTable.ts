import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Table = styled.table`
  border-bottom-left-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
  border-collapse: collapse;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  overflow: hidden;
  width: 100%;

  th,
  th button {
    background: #000080;
    font-size: 1.6rem;
    color: #fff;
  }

  th,
  td {
    padding: 0.3rem;
    border: 0.1rem solid #802c00;
    text-align: center !important;
    white-space: nowrap;
  }

  td {
    font-size: 1.2rem;
  }

  tbody tr {
    color: #312e38;
  }

  tbody tr:nth-child(even) {
    background: #ccc;
  }

  tbody tr:hover {
    background: #19c589;
    color: #ffffff;
  }

  tbody tr:hover button {
    color: #ffffff;
  }

  button {
    background: none;
    border: none;
    color: green;

    &:focus {
      outline: 0;
      box-shadow: none;
    }
  }

  button + button {
    color: darkgoldenrod;
    margin-left: 0.5rem;
  }

  button + button + button {
    color: #800000;
  }

  tfoot tr td {
    font-size: 1.4rem;
    color: #312e38;
    padding: 1rem;

    span {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      strong {
        padding: 0 5px;
        font-family: Ubuntu, serif;
      }
    }
  }
`;
