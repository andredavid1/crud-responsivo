import React from 'react';
import { Container, Alert } from './styles';

interface IProps {
  type: string;
  message: string;
}

const AlertsBar: React.FC<IProps> = ({ type, message }) => {
  return (
    <Container className={`${type}`}>
      <Alert>{message}</Alert>
    </Container>
  );
};

export default AlertsBar;
