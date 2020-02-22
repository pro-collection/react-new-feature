import React, { Component, createContext } from 'react';
import { Button } from 'antd';
import CodeViewContainer from '../../../components/BaseCodeView/CodeViewContainer';

const ThemeContext = createContext('light');

class ContextDemo1 extends Component {
  render() {
    return (
      <CodeViewContainer codePath="Context/ContextDemo1">
        <ThemeContext.Provider value={'dark'}>
          <ToolBar />
        </ThemeContext.Provider>
      </CodeViewContainer>
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
