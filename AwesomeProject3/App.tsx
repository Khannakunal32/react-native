/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';

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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function EX2(): void {
  console.log('xyz2');
}

// 3rd way
const Ex3 = () => {
  console.log('xyz3');
};

// 4th way
function fruit() {
  return 'apple';
}

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <Text style={{fontSize: 30}}>Test is in control</Text>
        <Ex />
        <Text>{fruit()}</Text>
        <Text style={style.text}>Test is in control</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
