import React, { FC } from 'react';

const Parent: FC = props => {
  return (
    <>
      <h3>我是parent 组件</h3>
      {props.children}
    </>
  );
};

export default Parent;
