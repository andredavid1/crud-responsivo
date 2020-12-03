import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  background-color: #000080;
  display: flex;
  flex-direction: column;
  height: 60px;
  max-width: 960px;
  width: 100%;

  @media (min-width: 576px) {
    align-items: center;
    flex-direction: row;
  }
`;

export const Brand = styled.div`
  align-items: center;
  border-bottom: 1px outset #ffffff;
  color: #ffffff;
  display: flex;
  height: 60%;
  justify-content: center;
  text-align: center;
  width: 100%;

  a {
    align-items: center;
    color: #ffffff;
    display: flex;
    font-size: 28px;
    height: 100%;
    justify-content: center;
    text-decoration: none;
    width: 100%;
  }

  @media (min-width: 576px) {
    border: none;
  }
`;

export const Navbar = styled.ul`
  align-items: center;
  display: flex;
  height: 40%;
  list-style: none;
  padding: 0;
  width: 100%;

  @media (min-width: 576px) {
    height: 100%;
  }
`;

export const Item = styled.li`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 50%;
`;

export const Navlink = styled(Link)`
  align-items: center;
  color: #ffffff;
  display: flex;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  width: 100%;

  &:hover {
    background: white;
    color: #312e28;
  }
`;
