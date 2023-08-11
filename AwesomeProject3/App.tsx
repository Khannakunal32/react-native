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

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        {/* eslint-disable-next-line react-native/no-inline-styles */}
        <Text style={{fontSize: 30}}>Test is in control</Text>
        <Text style={style.text}>Test is in control</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
