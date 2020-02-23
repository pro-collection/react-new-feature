import React, { Component, createContext } from 'react';

/*
 * 在嵌套组件中更新 Context
 *
 * 从一个在组件树中嵌套很深的组件中更新 context 是很有必要的。
 * 在这种场景下，你可以通过 context 传递一个函数，使得 consumers 组件更新 context：
 * */

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

const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

const { Provider, Consumer } = ThemeContext;
/* ==============================  const - End   ============================== */

/* ==============================  ThemeToggleButton - Start ============================== */
const ThemeToggleButton = () => {
  return (
    <Consumer>
      {({ theme, toggleTheme }) => (
        <button onClick={toggleTheme} style={{ backgroundColor: theme.background }}>
          Toggle Theme
        </button>
      )}
    </Consumer>
  );
};
/* ==============================  ThemeToggleButton - End   ============================== */

/* ==============================  ContentComponent - Start ============================== */
const Content = () => (
  <div>
    <ThemeToggleButton />
  </div>
);
/* ==============================  ContentComponent - End   ============================== */

/* ==============================  ContextDemo3 - Start ============================== */
interface ContextDemo3State {
  theme: {
    foreground: string;
    background: string;
  };
}

class ContextDemo3 extends Component<any, ContextDemo3State> {
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
      <Provider value={Object.assign({}, this.state, { toggleTheme: this.toggleTheme })}>
        <Content />
      </Provider>
    );
  }
}
export default ContextDemo3;
/* ==============================  ContextDemo3 - End   ============================== */
