import React from 'react';
import { StatusBar } from 'react-native';
import { shade } from 'polished';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import colors from './theme/colors';

import Routes from './routes';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <StatusBar
      backgroundColor={shade(0.1, colors.primary)}
      barStyle="light-content"
    />

    <Routes />
  </ThemeProvider>
);

export default App;
