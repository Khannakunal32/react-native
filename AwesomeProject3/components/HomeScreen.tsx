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
import CompanyData from './CompanyData';
import Parent from './PassingProps';
import Others from './Others';
import StylingComponent from './Styling';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OtherTwo from './OtherTwo';

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

export default HomeScreen;
