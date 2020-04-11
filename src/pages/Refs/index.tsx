import React, { FC } from 'react';
import HomeContainer, { Pages } from '../Home';
import staticRotes from '../../routers/pageRouteConfig';

const pages: Pages[] = staticRotes
  .filter(item => item.path.includes('/ref/demo'))
  .map(item => ({
    path: item.path,
    title: item.title,
  }));

const Index: FC = () => {
  return <HomeContainer pages={pages} />;
};

export default Index;
