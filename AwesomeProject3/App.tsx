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
import LocalApi from './components/LocalApi';
import Async from './components/extra';
import Extra from './components/extra';
import AsyncStorageComponent from './components/AsyncStorage';
import MainScreen from './components/ShoppingRedux/MainScreen';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const x = 5;
  const y = 6;
  const z = x + y + 1;
  console.warn(z);
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{headerShown: false}}
          name="MainRedux"
          component={MainScreen}
        />
        <Tab.Screen name="Async" component={AsyncStorageComponent} />
        <Tab.Screen name="Extra" component={Extra} />
        <Tab.Screen name="localApi" component={LocalApi} />
        <Tab.Screen name="CallApi" component={CallingApi} />
        <Tab.Screen name="OldClass" component={OldClassComponent} />
        <Tab.Screen name="NavigatorData" component={NavigatorData} />
        <Tab.Screen name="UseEffectEx" component={UseEffectEx} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
