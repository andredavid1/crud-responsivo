import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 8px;
  margin: 10px 0;
  padding: 10px 0;
  width: 100%;

  &.error {
    background: #ffadad;
    border: 1px solid #ff7676;
  }

  &.success {
    background: #ade4ff;
    border: 1px solid #76d1ff;
  }

  &.warning {
    background: #ffffad;
    border: 1px solid #ffff76;
  }
`;

export const Alert = styled.p`
  color: #312e28;
  font-weight: 700;
  margin-left: 5%;
  text-align: center;
  width: 90%;

  &.error {
    color: #312e28;
  }

  &.success {
    color: #2e3128;
  }

  &.warning {
    color: #312e28;
  }
`;
