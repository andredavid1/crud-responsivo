import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, HOME, PRODUCTS } from '../../routes/routes';

import { Brand, Container, Item, Navbar, Navlink } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Brand>
        <Link to={HOME}>Store</Link>
      </Brand>
      <Navbar>
        <Item>
          <Navlink to={CATEGORIES}>Categorias</Navlink>
        </Item>
        <Item>
          <Navlink to={PRODUCTS}>Produtos</Navlink>
        </Item>
      </Navbar>
    </Container>
  );
};

export default Header;
