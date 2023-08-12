import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';

const InputBox = () => {
  const [name, setName] = useState('kunal');
  function changeHandler(val: any): void {
    setName(val);
  }
  return (
    <View>
      <Text style={{fontSize: 35}}>{name}</Text>
      <TextInput
        style={style.input}
        value={name}
        onChangeText={changeHandler}
      />
      <Button title="clear" onPress={() => setName('')} />
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    fontSize: 18,
    color: 'blue',
    borderColor: 'blue',
    borderWidth: 2,
  },
});

export default InputBox;
