import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useRef} from 'react';

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
  const inputRef = useRef(null);
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  return (
    <View>
      <MyText color="blue">Hello bros</MyText>
      <Button title="clickRef" onPress={focusInput} />
    </View>
  );
};

export default Extra;

const styles = StyleSheet.create({});
