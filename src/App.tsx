import React from 'react';
import { View, StatusBar } from 'react-native';
import { shade } from 'polished';

import { colors } from './theme';

import { Dashboard } from './pages';

const App: React.FC = () => (
  <>
    <StatusBar
      backgroundColor={shade(0.1, colors.primary)}
      barStyle="light-content"
    />

    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <Dashboard />
    </View>
  </>
);

export default App;
