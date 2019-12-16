import React, { useEffect } from 'react';
// import { loadUser } from './actions/AuthAction';
import { BrowserRouter as Router } from 'react-router-dom';
import { loadTheme } from 'office-ui-fabric-react/lib/Styling';
import { Routes } from './router/router';
import { Provider } from 'react-redux';
import configureStore from './stores/indexReducer';
const store = configureStore();
loadTheme({
  palette: {
    themePrimary: '#0078d4',
    themeLighterAlt: '#eff6fc',
    themeLighter: '#deecf9',
    themeLight: '#c7e0f4',
    themeTertiary: '#71afe5',
    themeSecondary: '#2b88d8',
    themeDarkAlt: '#106ebe',
    themeDark: '#005a9e',
    themeDarker: '#004578',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#c2c2c2',
    neutralSecondary: '#858585',
    neutralPrimaryAlt: '#4b4b4b',
    neutralPrimary: '#333333',
    neutralDark: '#272727',
    black: '#1d1d1d',
    white: '#ffffff'
  }
});
const App: React.FC = () => {
  // useEffect(() => {
  //   loadUser();
  // }, []);
  return (
    <Provider store={store}>
      <div className='App'>
        <Router>
          <Routes />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
