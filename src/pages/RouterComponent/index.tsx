import React, { FC } from 'react';
import { Button } from 'antd';

const RouterComponent: FC = props => {
  console.log(props);

  return (
    <>
      <Button type={'default'}>返回首页</Button>
    </>
  );
};

export default RouterComponent;
