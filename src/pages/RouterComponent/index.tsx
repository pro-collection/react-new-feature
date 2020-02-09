import React, { FC } from 'react';
import { Button } from 'antd';
import { RouteComponentProps } from 'react-router';
import queryString from 'query-string';

const RouterComponent: FC<RouteComponentProps> = props => {
  const handleGoHome = () => props.history.goBack();

  const handlePushParams = () => {
    props.history.replace(
      `/router-component?${queryString.stringify({
        name: 'YanLeLe',
        age: 27,
        address: 'CQ',
      })}`,
    );
  };

  const handleGetParams = () => {
    console.log(queryString.parse(props.location.search));
  };

  return (
    <>
      <Button type={'default'} onClick={handleGoHome}>
        返回首页
      </Button>
      <Button type={'default'} onClick={handlePushParams}>
        推送参数
      </Button>

      <Button onClick={handleGetParams}>获取参数</Button>
    </>
  );
};

export default RouterComponent;
