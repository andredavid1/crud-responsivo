import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    align-items: center;
    color: #312e28;
    display: flex;
    height: 4rem;
    justify-content: center;
    padding: 0.8rem 0.5rem;

    &.btnSpan {
      margin: 0;
      width: 8rem;
    }

    &:focus {
      box-shadow: none;
      outline: none;
    }

    &:hover:not(.pageActive) {
      background-color: #ddd;
      border-radius: 1rem;
    }

    &:not(.pageActive) {
      background: none;
      border: none;
    }

    &.pageActive {
      background-color: #4caf50;
      border: none;
      border-radius: 1rem;
      color: #f5f5f5;
    }
  }
`;
