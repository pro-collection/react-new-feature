import loadableComponent from './loadableComponent';

const HomeContainer = () => import('../pages/Home');
const NoMatchContainer = () => import('../pages/NoMatch');
const PropsChild = () => import('../pages/PropsChild');
const UseImperativeHandle = () => import('../pages/UseImperativeHandle');
const RouterComponent = () => import('../pages/RouterComponent');
const OuterClickExample = () => import('../pages/OuterClickExample');
const BlurExample = () => import('../pages/BlurExample');
const Context = () => import('../pages/Context');
const ContextDemo1 = () => import('../pages/Context/ContextDemo1');

const exportPages = {
  HomeContainer: loadableComponent(HomeContainer),
  NoMatchContainer: loadableComponent(NoMatchContainer),
  PropsChild: loadableComponent(PropsChild),
  UseImperativeHandle: loadableComponent(UseImperativeHandle),
  RouterComponent: loadableComponent(RouterComponent),
  OuterClickExample: loadableComponent(OuterClickExample),
  BlurExample: loadableComponent(BlurExample),
  Context: loadableComponent(Context),
  ContextDemo1: loadableComponent(ContextDemo1),
};

export default exportPages;
