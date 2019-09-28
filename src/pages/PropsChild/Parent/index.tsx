import React, { FC } from 'react';

const Parent: FC = props => {
  return (
    <>
      <h3>我是parent 组件</h3>
      {props.children &&
        React.cloneElement(props.children as React.ReactElement, {
          hello: '我是parent',
        })}
    </>
  );
};

export default Parent;
