import React, { FC } from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import staticRotes, { notIncludePath } from '../../routers/pageRouteConfig';

export interface Pages {
  path: string;
  title: string;
}

const { Item: ListItem } = List;
const pages: Pages[] = staticRotes
  .slice(1, staticRotes.length - 1)
  // .filter(item => !item.path.includes('/context/demo'))
  .filter(item => !notIncludePath.includes(item.path))
  .map(item => ({
    path: item.path,
    title: item.title,
  }));

interface HomeContainerProps {
  pages?: Pages[];
}

const HomeContainer: FC<HomeContainerProps> = props => {
  const { pages: renderPage = pages } = props;

  return (
    <div style={{ margin: '0 20px' }}>
      <List
        dataSource={renderPage}
        renderItem={item => (
          <ListItem>
            <Link
              to={{
                pathname: item.path,
              }}>
              {item.title}
            </Link>
          </ListItem>
        )}
      />
    </div>
  );
};

export default HomeContainer;
