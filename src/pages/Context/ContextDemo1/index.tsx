import React, { Component, createContext } from 'react';
import { Button } from 'antd';

const ThemeContext = createContext('light');

class ContextDemo1 extends Component {
  render() {
    return (
      <ThemeContext.Provider value={'dark'}>
        <ToolBar />
      </ThemeContext.Provider>
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
