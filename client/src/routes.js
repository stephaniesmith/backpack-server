import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './components/home/Home';
import GearList from './containers/gear/GearList';
import BackpackList from './containers/backpacks/BackpackList';
import BackpackDetail from './containers/backpacks/BackpackDetail';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  GEAR: {
    path: '/gear',
    Component: GearList,
    linkTo: () => '/gear'
  },
  BACKPACKS: {
    path: '/backpacks',
    Component: BackpackList,
    linkTo: () => '/backpacks'
  },
  BACKPACK: {
    path: '/backpacks/:id',
    Component: BackpackDetail,
    linkTo: id => `/backpacks/${id}`
  }
};

export const rootLinks = () => {
  return Object.keys(ROUTES)
    .filter(routeName => ROUTES[routeName].linkTo.length === 0)
    .map((routeName, i) => {
      return <Link key={i} to={ROUTES[routeName].linkTo()}>{routeName.toLowerCase().replace('_', ' ')}</Link>;
    });
};

export const routerRoutes = () => {
  return Object.values(ROUTES)
    .map((route, i) => {
      return <Route exact={route.linkTo.length === 0} key={i} path={route.path} component={route.Component} />;
    });
};
