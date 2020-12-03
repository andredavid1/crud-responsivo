import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Categories from '../pages/Categories';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Products from '../pages/Products';

import { CATEGORIES, HOME, PRODUCTS } from './routes';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={HOME} exact component={Home} />
      <Route path={CATEGORIES} component={Categories} />
      <Route path={PRODUCTS} component={Products} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
