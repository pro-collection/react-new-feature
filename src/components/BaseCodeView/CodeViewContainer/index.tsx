import React, { FC, useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import BaseCodeView, { BaseCodeViewProps } from '../index';
import axios from 'axios';

const CodeViewContainer: FC<Pick<BaseCodeViewProps, 'codePath'>> = props => {
  const [code, updateCode] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/code/${props.codePath}/`);
      updateCode(response.data.code);
    };
    fetchData();
  }, []);

  return (
    <>
      {code ? (
        <Row>
          <Col span={12}>
            <BaseCodeView code={code} codePath={props.codePath} />
          </Col>
          <Col span={12}>{props.children}</Col>
        </Row>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
};

export default CodeViewContainer;
