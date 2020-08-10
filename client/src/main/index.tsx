import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import {outerTheme} from './styles';
import Routes from '../routes';
import 'fontsource-roboto';

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={outerTheme}>
        <Routes />
      </ThemeProvider>
    </div>
  );
};

export default App;
