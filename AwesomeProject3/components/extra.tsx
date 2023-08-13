import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

type dataType = {
  color?: string;
  size?: number;
  children?: any;
};
// Define a functional component that takes color and size as props
const MyText = ({color, size, children}: dataType) => {
  return (
    <Text style={{color, fontSize: size, backgroundColor: 'red', width: '50%'}}>
      {children}
    </Text>
  );
};

// Assign an object with the default prop values to the component function
MyText.defaultProps = {
  color: 'red',
  size: 20,
};

const Extra = () => {
  const inputRef = useRef<TextInput>(null);
  const [inputValue, setInputValue] = useState('');
  const prevInputValue = useRef('');

  useEffect(() => {
    prevInputValue.current = inputValue;
    console.warn(prevInputValue.current);
  }, [inputValue]);

  const updateInput = () => {
    inputRef.current?.focus();
    inputRef.current?.setNativeProps({
      style: {backgroundColor: 'red', color: 'white'},
    });
  };
  const clearText = () => {
    setInputValue('');
  };
  return (
    <View>
      <MyText color="blue">Hello bros</MyText>
      <TextInput ref={inputRef} placeholder="name" />
      <TextInput
        placeholder="Enter your name"
        value={inputValue}
        onChangeText={text => setInputValue(text)}
      />

      <Text>Current Value: {inputValue}</Text>
      <Text>Previous Value: {prevInputValue.current}</Text>
      <Button title="useRef" onPress={updateInput} />
      <Button title="clear" onPress={clearText} />
    </View>
  );
};

export default Extra;

const styles = StyleSheet.create({});
