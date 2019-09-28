import React, { FC } from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';

const { Item: ListItem } = List;

const HomeContainer: FC = () => {
  const pages = [
    {
      page: '/props_child',
      name: 'this.props.children传值到子组件',
    },
  ];

  return (
    <div style={{ marginLeft: '20px' }}>
      <List
        dataSource={pages}
        renderItem={item => (
          <ListItem>
            <Link
              to={{
                pathname: item.page,
              }}>
              {item.name}
            </Link>
          </ListItem>
        )}
      />
    </div>
  );
};

export default HomeContainer;
