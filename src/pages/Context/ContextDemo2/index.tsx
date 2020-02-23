import React, { Component, createContext, FC } from 'react';
import CodeViewContainer from '../../../components/BaseCodeView/CodeViewContainer';

/* ==============================  const - Start ============================== */

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const ThemeContext = createContext(themes.dark);

/* ==============================  const - End   ============================== */

/* ==============================  ThemedButton - Start ============================== */
class ThemedButton extends Component<{ onClick: () => void }> {
  render() {
    const { context } = this;
    return (
      <button {...this.props} style={{ backgroundColor: context.background }}>
        {this.props.children}
      </button>
    );
  }
}

ThemedButton.contextType = ThemeContext;

/* ==============================  ThemedButton - End   ============================== */

/* ==============================  ToolBar：ThemedButton 的一个中间件 - Start ============================== */
const ToolBar: FC<{ changeTheme: () => void }> = props => {
  return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>;
};

/* ==============================  ToolBar：ThemedButton 的一个中间件 - End   ============================== */

/* ==============================  ContextDemo2 - Start ============================== */
interface ContextDemo2State {
  theme: {
    foreground: string;
    background: string;
  };
}

class ContextDemo2 extends Component<any, ContextDemo2State> {
  state = {
    theme: themes.light,
  };

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }));
  };

  render() {
    return (
      <CodeViewContainer codePath="Context/ContextDemo2">
        <ThemeContext.Provider value={this.state.theme}>
          <ToolBar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
      </CodeViewContainer>
    );
  }
}

/* ==============================  ContextDemo2 - End   ============================== */

export default ContextDemo2;
