/**
 * Sample React Native NavigatorData
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Alert, Button, TextInput, View} from 'react-native';
import CompanyData from './CompanyData';
import Others from './Others';
import StylingComponent from './Styling';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OtherTwo from './OtherTwo';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

function NavigatorData(): JSX.Element {
  const customScreenOptions = {
    headerStyle: {
      backgroundColor: 'blue',
    },
    headerTintColor: 'white',
    headerTransparent: true,
    statusBarColor: 'blue',
  };
  const customStackScreenOptions = {
    headerTitle: LeftButton,
    headerRight: RightButton,
    headerTintColor: 'black',
  };

  return (
    <Stack.Navigator screenOptions={customScreenOptions}>
      <Stack.Screen
        options={customStackScreenOptions}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen name="CompanyData" component={CompanyData} />
      <Stack.Screen name="OthersTwo" component={OtherTwo} />
      <Stack.Screen name="StylingComponent" component={StylingComponent} />
      <Stack.Screen name="Others" component={Others} />
    </Stack.Navigator>
  );
}

const LeftButton = () => {
  return (
    <View>
      <Button
        title="left"
        onPress={() => {
          console.warn('hello');
        }}
      />
    </View>
  );
};
const RightButton = () => {
  return (
    <View>
      <TextInput placeholder="search" />
    </View>
  );
};

export default NavigatorData;
