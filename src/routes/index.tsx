import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { transparentize } from 'polished';

import listIcon from '../assets/icons/list/list.png';
import listIconActive from '../assets/icons/list/list-active.png';
import currencySignIcon from '../assets/icons/currency-sign/currency-sign.png';
import currencySignIconActive from '../assets/icons/currency-sign/currency-sign-active.png';

import colors from '../theme/colors';
import fonts from '../theme/fonts';

import { Dashboard, Register } from '../pages';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 56,
        },

        tabStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },

        iconStyle: {
          flex: 0,
          width: 24,
          height: 24,
        },

        labelStyle: {
          fontFamily: fonts.medium,
          fontSize: 14,
          marginLeft: 15,
          lineHeight: 21,
        },

        inactiveTintColor: transparentize(0.4, colors.title),
        activeTintColor: colors.title,
        activeBackgroundColor: colors.background,
      }}
    >
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Listagem',
          tabBarIcon: props => {
            return props.focused ? ( // eslint-disable-line
              <Image source={listIconActive} />
            ) : (
              <Image style={{ opacity: 0.6 }} source={listIcon} />
            );
          },
        }}
      />
      <Screen
        name="Register"
        component={Register}
        options={{
          tabBarLabel: 'Cadastrar',
          tabBarIcon: props => {
            return props.focused ? ( // eslint-disable-line
              <Image source={currencySignIconActive} />
            ) : (
              <Image style={{ opacity: 0.6 }} source={currencySignIcon} />
            );
          },
        }}
      />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
