import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const InputBox = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);
  const [veiw, setView] = useState(false);
  return (
    <View>
      <Text style={{fontSize: 35}}>{name}</Text>
      <TextInput
        style={style.input}
        value={name}
        placeholder="username"
        onChangeText={text => {
          setName(text);
        }}
      />
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <TextInput
          style={[style.input, {flex: 2}]}
          value={password}
          secureTextEntry={!veiw}
          placeholder="password"
          onChangeText={text => {
            setPassword(text);
          }}
        />
        <TouchableOpacity style={{flex: 1}}>
          <Text
            style={{
              flex: 1,
              textAlign: 'center',
              textAlignVertical: 'center',
              backgroundColor: 'blue',
              color: 'white',
            }}
            onPress={() => {
              veiw ? setView(false) : setView(true);
            }}>
            View
          </Text>
        </TouchableOpacity>
      </View>
      <Button
        title="show"
        onPress={() => {
          display ? setDisplay(false) : setDisplay(true);
        }}
      />

      <Button title="clear" onPress={() => [setName(''), setPassword('')]} />
      {display ? (
        <View>
          <Text style={{fontSize: 35}}>{name}</Text>
          <Text style={{fontSize: 35}}>{password}</Text>
        </View>
      ) : (
        <Text />
      )}
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
