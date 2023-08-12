/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import CompanyData from './components/CompanyData';

const style = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

// 1st way
function Ex(): JSX.Element {
  return <Text>Show This</Text>;
}

// 2nd way
function EX2(val: any): void {
  console.warn(val);
}

// 3rd way
const Ex3 = () => {
  console.log('xyz3');
};

// 4th way
function fruit(): String {
  return 'apple';
}

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <CompanyData />
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <Text style={{fontSize: 30}}>Test is in control</Text>
        <Ex />
        <Text>{fruit()}</Text>
        <Text style={style.text}>Test is in control</Text>
        <Button title="Click Me" onPress={() => EX2('hello')} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
