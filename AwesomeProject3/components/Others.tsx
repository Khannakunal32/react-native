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
import CompanyData from './CompanyData';
import Parent from './PassingProps';
import InputBox from './InputBox';
import StylingComponent from './Styling';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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

function Others(props: any): JSX.Element {
  const [name, setName] = useState('kunal');

  function stateHandler(): void {
    if (name === 'kunal') {
      setName('khanna');
    } else {
      setName('kunal');
    }
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Text style={{fontSize: 30}}>Test is in control</Text>
        <Ex />
        <Text>{fruit()}</Text>
        <Button title="Click Me" onPress={() => EX2('hello')} />
        <Text style={style.text}>{name}</Text>
        <Button title="Click Me" onPress={stateHandler} />
        <Parent />
        <StylingComponent />
        <InputBox />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Others;
