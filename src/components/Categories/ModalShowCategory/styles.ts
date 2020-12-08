import styled from 'styled-components';
import { Form as UnForm } from '@unform/web';

export const Form = styled(UnForm)`
  padding: 30px 20px;
  display: flex;
  flex-direction: column;

  h1 {
    color: #312e28;
    font-weight: 700;
    font-size: 1.9rem;
    margin-bottom: 20px;
    text-align: center;
    width: 100%;
  }

  label {
    color: #404040;
    font-weight: 700;
    margin: 6px 0;
    padding-left: 5px;
  }

  .btnModal {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
  }

  button {
    align-self: center;
  }

  button {
    font-weight: 600;
    border-radius: 8px;
    border: 0;
    color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;

    .text {
      padding: 8px 10px;
    }
  }

  button + button {
    margin-left: 10px;
  }

  .btnGreen {
    background-color: #008000;
  }

  .btnRed {
    background-color: #800000;
  }
`;
