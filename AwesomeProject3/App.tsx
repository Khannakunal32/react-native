/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import NavigatorData from './components/NavigatorData';
import OldClassComponent from './components/OldClassComponent';
import UseEffectEx from './components/UseEffectEx';
import CallingApi from './components/CallingApi';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const x = 5;
  const y = 6;
  const z = x + y + 1;
  console.warn(z);
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="CallApi" component={CallingApi} />
        <Tab.Screen name="OldClass" component={OldClassComponent} />
        <Tab.Screen name="NavigatorData" component={NavigatorData} />
        <Tab.Screen name="UseEffectEx" component={UseEffectEx} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
