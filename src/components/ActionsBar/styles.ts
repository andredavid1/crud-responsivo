import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 40px;
  justify-content: center;
  width: 100%;
`;

export const LimitArea = styled.div`
  width: 25%;

  select {
    border-radius: 10%;
  }
`;

export const ButtonArea = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  padding: 0 10px;
  width: 30%;

  > button {
    align-items: center;
    background: none;
    display: flex;
    border: none;
    color: #000080;
    font-size: 16px;

    > span {
      display: none;
    }
  }

  > button + button {
    margin-left: 10px;
  }
`;

export const SearchArea = styled.div`
  display: flex;
  height: 30px;
  justify-content: flex-end;
  max-width: 200px;
  width: 45%;
`;

export const InputContainer = styled.div`
  align-items: center;
  background-color: #ffffff;
  border: 1px solid #312e28;
  border-radius: 8px;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  padding: 5px;
  width: 100%;

  > button {
    align-items: center;
    background: none;
    border: none;
    color: #800000;
    display: flex;
    font-size: 20px;
    justify-content: center;
    width: 10%;
  }

  > input {
    background: none;
    border: none;
    font-size: 14px;
    height: 24px;
    margin-right: 5px;
    padding: 3px;
    width: 90%;
  }
`;
