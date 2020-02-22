import React, { FC } from 'react';
import { Col, Row } from 'antd';
import BaseCodeView, { BaseCodeViewProps } from '../index';

const CodeViewContainer: FC<BaseCodeViewProps> = props => {
  return (
    <Row>
      <Col span={12}>
        <BaseCodeView codePath={props.codePath} />
      </Col>
      <Col span={12}>{props.children}</Col>
    </Row>
  );
};

export default CodeViewContainer;
