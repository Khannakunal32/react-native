import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageComponent = () => {
  const [name, setName] = useState('John Doe');
  const [showName, setShowName] = useState('');

  const storData = async () => {
    try {
      await AsyncStorage.setItem('name', name);
      console.warn('Data successfully saved');
    } catch (e) {
      console.warn('Failed to save the data to the storage' + e);
    }
    getData();
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('name');
      console.warn('Data successfully removed');
    } catch (e) {
      console.warn('Failed to remove the data from storage' + e);
    }
    getData();
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('name');
      console.warn(jsonValue);
      if (jsonValue != null) {
        setShowName(jsonValue);
      } else {
        setShowName('');
      }
    } catch (error) {
      console.warn('Failed to load the data from storage' + error);
    }
  };

  useEffect(() => {
    getData();
  });
  return (
    <View>
      <Text>{name}</Text>
      <TextInput
        onChangeText={text => {
          setName(text);
        }}
      />
      <Button title="Save Data" onPress={storData} />
      <Button title="remove" onPress={removeData} />
      <Text>Async storage:{showName} </Text>
    </View>
  );
};

export default AsyncStorageComponent;

const styles = StyleSheet.create({});
