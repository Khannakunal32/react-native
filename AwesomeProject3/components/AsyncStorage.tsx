import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageComponent = () => {
  const [name, setName] = useState('John Doe');
  const [showName, setShowName] = useState('');

  const storData = async () => {
    try {
      const expiryTime = 1;
      const now = new Date();

      now.setMinutes(now.getMinutes() + expiryTime);
      const expiryTimeinTimeStamp = Math.floor(now.getTime() / 1000);
      const data = {
        name: name,
        expiryTime: expiryTimeinTimeStamp,
      };
      await AsyncStorage.setItem('name', JSON.stringify(data));
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
      let jsonValue = await AsyncStorage.getItem('name');
      const newNow = new Date();
      const timeNowinTimeStamp = Math.floor(newNow.getTime() / 1000);

      if (
        jsonValue != null &&
        timeNowinTimeStamp < JSON.parse(jsonValue)?.expiryTime
      ) {
        console.warn('data not expired');
        setShowName(JSON.parse(jsonValue).name);

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
  }, []);
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
      <Button title="check expiry" onPress={getData} />
      <Text>Async storage:{showName} </Text>
    </View>
  );
};

export default AsyncStorageComponent;

const styles = StyleSheet.create({});
