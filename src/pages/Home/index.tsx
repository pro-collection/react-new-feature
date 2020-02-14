import React, { FC } from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import staticRotes from '../../routers/pageRouteConfig';

interface Pages {
  path: string;
  title: string;
}

const { Item: ListItem } = List;
const pages: Pages[] = staticRotes.slice(1, staticRotes.length - 1).map(item => ({
  path: item.path,
  title: item.title,
}));

const HomeContainer: FC = () => {
  return (
    <div style={{ margin: '0 20px' }}>
      <List
        dataSource={pages}
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
