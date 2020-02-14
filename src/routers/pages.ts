import loadableComponent from './loadableComponent';

const HomeContainer = () => import('../pages/Home');
const NoMatchContainer = () => import('../pages/NoMatch');
const PropsChild = () => import('../pages/PropsChild');
const UseImperativeHandle = () => import('../pages/UseImperativeHandle');
const RouterComponent = () => import('../pages/RouterComponent');
const OuterClickExample = () => import('../pages/OuterClickExample');

const exportPages = {
  HomeContainer: loadableComponent(HomeContainer),
  NoMatchContainer: loadableComponent(NoMatchContainer),
  PropsChild: loadableComponent(PropsChild),
  UseImperativeHandle: loadableComponent(UseImperativeHandle),
  RouterComponent: loadableComponent(RouterComponent),
  OuterClickExample: loadableComponent(OuterClickExample),
};

export default exportPages;
