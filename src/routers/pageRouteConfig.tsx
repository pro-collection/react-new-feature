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
  /* ==============================  失去焦点收起的实现 - Start ============================== */
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
  /* ==============================  失去焦点收起的实现 - End   ============================== */

  /* ==============================  context - Start ============================== */
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
    path: '/context/demo2',
    component: pages.ContextDemo2,
    exact: true,
    title: 'context - 动态 Context',
  },
  {
    path: '/context/demo3',
    component: pages.ContextDemo3,
    exact: true,
    title: 'context - 在嵌套组件中更新 Context',
  },
  /* ==============================  context - End   ============================== */

  /* ==============================  Refs 转发 - Start ============================== */
  {
    path: '/ref',
    component: pages.Refs,
    exact: true,
    title: 'ref',
  },
  {
    path: '/ref/demo1',
    component: pages.RefsDemo1,
    exact: true,
    title: 'ref - 最基础使用',
  },
  /* ==============================  Refs 转发 - End   ============================== */

  {
    path: '*',
    component: pages.NoMatchContainer,
    exact: true,
    title: '没有找到页面',
    metas: [],
  },
];

export const notIncludePath = ['/context/demo1', '/context/demo2', '/context/demo3', '/ref/demo1'];

export default staticRotes;
