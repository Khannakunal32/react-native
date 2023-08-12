import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const UseEffectEx = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  //   // on mount
  //   useEffect(() => {
  //     console.warn(count);
  //   });
  //   // on mount once
  //   useEffect(() => {
  //     console.warn('componentDidMount');
  //   }, []);
  //   // on mount and count change
  //   useEffect(() => {
  //     console.warn(count);
  //   }, [count]);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Text>Count2: {count2}</Text>
      <Button title="Increment2" onPress={() => setCount2(count2 + 1)} />
    </View>
  );
};

export default UseEffectEx;

const styles = StyleSheet.create({});
