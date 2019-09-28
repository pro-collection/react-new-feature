import loadableComponent from './loadableComponent';

const HomeContainer = () => import('../pages/Home');
const NoMatchContainer = () => import('../pages/NoMatch');

const exportPages = {
  HomeContainer: loadableComponent(HomeContainer),
  NoMatchContainer: loadableComponent(NoMatchContainer),
};

export default exportPages;
