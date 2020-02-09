import React, { FC } from 'react';
import { Button } from 'antd';
import { RouteComponentProps } from 'react-router';
import queryString from 'query-string';

const RouterComponent: FC<RouteComponentProps> = props => {
  const handleGoHome = () => props.history.goBack();

  const handlePushParams = () => {
    props.history.push(
      `/router-component?${queryString.stringify({
        name: 'YanLeLe',
        age: 27,
        address: 'CQ',
      })}`,
    );
  };

  return (
    <>
      <Button type={'default'} onClick={handleGoHome}>
        返回首页
      </Button>
      <Button type={'default'} onClick={handlePushParams}>
        推送参数
      </Button>
    </>
  );
};

export default RouterComponent;
