import {View, Text, Button} from 'react-native';
import React, {useState} from 'react';

function Parent(): JSX.Element {
  const [name, setName] = useState('kunal');

  function nameHandler(): void {
    if (name === 'kunal') {
      setName('khanna');
    } else {
      setName('kunal');
    }
  }
  return (
    <View>
      <Text>
        <Child name={name} age={22} />{' '}
      </Text>
      <Button title="change Name" onPress={nameHandler} />
    </View>
  );
}

function Child(props: any): JSX.Element {
  return (
    <View>
      <Text style={{fontSize: 20}}>{`${props.name} ${props.age}`}</Text>
      <Text style={{fontSize: 20}}>{[props.name, ' ', props.age]}</Text>
    </View>
  );
}

export default Parent;
