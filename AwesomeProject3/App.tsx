/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CompanyData from './components/CompanyData';
import Parent from './components/PassingProps';
import Others from './components/Others';
import StylingComponent from './components/Styling';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen(props: any): JSX.Element {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Company Data"
        onPress={() => props.navigation.navigate('CompanyData')}
      />
      <Button
        title="Go to Others"
        onPress={() => props.navigation.navigate('Others')}
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
            headerTintColor: 'black',
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="CompanyData" component={CompanyData} />
        <Stack.Screen name="StylingComponent" component={StylingComponent} />
        <Stack.Screen name="Others" component={Others} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
