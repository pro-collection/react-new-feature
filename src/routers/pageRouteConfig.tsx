import pages from './pages';
import * as React from 'react';
import { RouteComponentProps } from 'react-router';

/*interface*/
export interface IStaticRoutes {
  path: string;
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  exact: boolean;
  title: string;
  metas?: any[];
}

export const staticRotes: IStaticRoutes[] = [
  {
    path: '/',
    component: pages.HomeContainer,
    exact: true,
    title: '主页',
    metas: [],
  },
  {
    path: '/props_child',
    component: pages.PropsChild,
    exact: true,
    title: 'PropsChild',
    metas: [],
  },
  {
    path: '/use_imperative_handle',
    component: pages.UseImperativeHandle,
    exact: true,
    title: 'UseImperativeHandle',
    metas: [],
  },
  {
    path: '/router-component',
    component: pages.RouterComponent,
    exact: true,
    title: 'RouterComponent',
    metas: [],
  },
  {
    path: '/outer-click-example',
    component: pages.OuterClickExample,
    exact: true,
    title: '外部点击',
    metas: [],
  },
  {
    path: '/blur-example',
    component: pages.BlurExample,
    exact: true,
    title: '另外一种外部点击的实现',
  },
  {
    path: '/context',
    component: pages.Context,
    exact: true,
    title: 'context',
  },
  {
    path: '/context/demo1',
    component: pages.ContextDemo1,
    exact: true,
    title: 'context - 最基础用法',
  },
  {
    path: '',
    component: pages.NoMatchContainer,
    exact: true,
    title: '主页',
    metas: [],
  },
];

export default staticRotes;
