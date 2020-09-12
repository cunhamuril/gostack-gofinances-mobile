import React from 'react';
import { View, StatusBar } from 'react-native';
import { shade } from 'polished';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import colors from './theme/colors';

import { Dashboard } from './pages';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <StatusBar
      backgroundColor={shade(0.1, colors.primary)}
      barStyle="light-content"
    />

    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <Dashboard />
    </View>
  </ThemeProvider>
);

export default App;
