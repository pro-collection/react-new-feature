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
const ContextDemo2 = () => import('../pages/Context/ContextDemo2');
const ContextDemo3 = () => import('../pages/Context/ContextDemo3');
const Refs = () => import('../pages/Refs');
const RefsDemo1 = () => import('../pages/Refs/RefsDemo1');

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
  ContextDemo2: loadableComponent(ContextDemo2),
  ContextDemo3: loadableComponent(ContextDemo3),
  Refs: loadableComponent(Refs),
  RefsDemo1: loadableComponent(RefsDemo1),
};

export default exportPages;
