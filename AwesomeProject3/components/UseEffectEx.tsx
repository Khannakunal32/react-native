import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const UseEffectEx = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);
  const [hide, setHide] = useState(true);

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
      <Button title={'show ' + !hide} onPress={() => setHide(!hide)} />
      {!hide && <User info={{count, count2}} />}
    </View>
  );
};

function User(props: any): JSX.Element {
  let timer = setInterval(() => {
    console.warn('hi');
  }, 2000);
  // on unmount and count change
  useEffect(() => {
    return () => clearInterval(timer);
  });
  const {count, count2} = props.info;
  return (
    <View>
      <Text>{[count, ' ', count2]}</Text>
    </View>
  );
}

export default UseEffectEx;
