/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import NavigatorData from './components/NavigatorData';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import OldClassComponent from './components/OldClassComponent';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="OldClass" component={OldClassComponent} />
        <Tab.Screen name="NavigatorData" component={NavigatorData} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
