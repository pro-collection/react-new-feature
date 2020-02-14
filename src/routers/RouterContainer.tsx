import React, { FC } from 'react';
import { Route } from 'react-router';
import { IStaticRoutes } from './pageRouteConfig';

const RouterContainer: FC<IStaticRoutes> = props => {
  document.title = props.title;
  return <Route exact={props.exact} path={props.path} component={props.component} title={props.title} />;
};

export default RouterContainer;
