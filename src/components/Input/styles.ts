import styled, { css } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Label = styled.label`
  padding: 9px 10px 8px 10px;
  font-size: 16px;
  width: 15%;
`;

export const InputContainer = styled.div<IContainerProps>`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px 10px;
  font-size: 16px;
  width: 85%;

  & + div {
    margin-top: 16px;
  }

  h1 {
    margin-bottom: 40px;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #000080;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #312e28;

    &::placeholder {
      color: #b7b7cc;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
