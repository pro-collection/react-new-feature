import React, { FC } from 'react';
import { List } from 'antd';
import { Link } from 'react-router-dom';

const { Item: ListItem } = List;

const HomeContainer: FC = () => {
  const pages = [
    {
      path: '/props_child',
      title: 'this.props.children传值到子组件',
    },
    {
      path: '/use_imperative_handle',
      title: 'UseImperativeHandle',
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
