import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  tbody tr:nth-child(odd) {
    background: yellow;
  }

  th,
  td {
    border: 1px solid #312e28;
    color: #312e28;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
    padding: 4px;
    white-space: nowrap;
  }

  th {
    font-size: 18px;
    font-weight: 700;
  }

  td {
    font-size: 14px;

    button {
      background: none;
      color: green;
      border: none;
    }

    button + button {
      color: darkgoldenrod;
      margin-left: 3px;
    }

    button + button + button {
      color: darkred;
    }
  }
`;
