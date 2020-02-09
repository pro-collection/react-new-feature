import React, { FC } from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';
import { pages } from './consts';

const { Item: ListItem } = List;

const HomeContainer: FC = () => {
  return (
    <div style={{ marginLeft: '20px' }}>
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
