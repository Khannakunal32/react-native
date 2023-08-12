/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Alert,
  Button,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import CompanyData from './components/CompanyData';
import Parent from './components/PassingProps';
import Others from './components/Others';
import StylingComponent from './components/Styling';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OtherTwo from './components/OtherTwo';

const Stack = createNativeStackNavigator();

function HomeScreen(props: any): JSX.Element {
  const {name, age} = props.route.params || {name: 'kunal', age: '22'};
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Button
        title="Go to Company Data"
        onPress={() => props.navigation.navigate('CompanyData')}
      />
      <Button
        title="Go to Others"
        onPress={() => props.navigation.navigate('Others')}
      />
      <Button
        title="Go to OthersTwo"
        onPress={() => props.navigation.navigate('OthersTwo')}
      />
    </View>
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: 'white',
          headerTransparent: true,
          statusBarColor: 'blue',
        }}>
        <Stack.Screen
          options={{
            headerTitle: LeftButton,
            headerRight: RightButton,
            headerTintColor: 'black',
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="CompanyData" component={CompanyData} />
        <Stack.Screen name="OthersTwo" component={OtherTwo} />
        <Stack.Screen name="StylingComponent" component={StylingComponent} />
        <Stack.Screen name="Others" component={Others} />
      </Stack.Navigator>
    </NavigationContainer>
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

export default App;
