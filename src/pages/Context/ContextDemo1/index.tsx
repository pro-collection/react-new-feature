import React, { Component, createContext } from 'react';
import { Button, Row, Col } from 'antd';
import BaseCodeView from '../../../components/BaseCodeView';

const ThemeContext = createContext('light');

class ContextDemo1 extends Component {
  render() {
    return (
      <>
        <Row>
          <Col span={12}>
            <BaseCodeView codePath="Context/ContextDemo1" />
          </Col>
          <Col span={12}>
            <ThemeContext.Provider value={'dark'}>
              <ToolBar />
            </ThemeContext.Provider>
          </Col>
        </Row>
      </>
    );
  }
}

const ToolBar = () => {
  return (
    <div>
      <ThemeButton />
    </div>
  );
};

class ThemeButton extends Component {
  static contextType = ThemeContext;

  render() {
    const { context } = this;
    return <Button>{context}</Button>;
  }
}

export default ContextDemo1;
