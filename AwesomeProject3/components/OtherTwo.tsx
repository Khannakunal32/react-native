import {
  View,
  Text,
  SafeAreaView,
  SafeAreaViewBase,
  Button,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

const OtherTwo = (props: any) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  return (
    <View>
      <TextInput
        style={{margin: 50}}
        placeholder="name"
        onChangeText={text => {
          setName(text);
        }}
      />
      <TextInput
        style={{margin: 50}}
        placeholder="Age"
        onChangeText={text => {
          setAge(text);
        }}
      />
      <Button
        title="Go to Company Data"
        onPress={() =>
          props.navigation.navigate('Home', {name: name, age: age})
        }
      />
    </View>
  );
};

export default OtherTwo;
