import styled from 'styled-components';
import { Form as UnForm } from '@unform/web';

export const Form = styled(UnForm)`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 700;
    font-size: 1.9rem;
    margin-bottom: 40px;
    text-align: center;
    width: 100%;
  }

  button {
    margin-top: 36px;
    align-self: flex-end;
  }

  button {
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    background: #39b100;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      padding: 8px 3px 8px 10px;
    }

    .icon {
      display: flex;
      padding: 8px 12px 8px 3px;
      background: none;
      border: none;
      margin: 0 auto;
    }
  }
`;
