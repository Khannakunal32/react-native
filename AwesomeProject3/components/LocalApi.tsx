import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const LocalApi = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const getApi = async () => {
    try {
      const response = await fetch('http://192.168.29.236:3000/posts');
      //   const response = await fetch('http://192.168.29.236:3001/');
      const json = await response.json();
      console.warn(json);
    } catch (error) {
      console.warn(error);
    }
  };
  const postApi = async () => {
    try {
      const response = await fetch('http://192.168.29.236:3000/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({title, author}),
      });
      const json = await response.json();
      console.warn(json);
    } catch (error) {
      console.warn(error);
    }
  };
  return (
    <View>
      <Text>LocalApi</Text>
      <TextInput
        onChangeText={text => {
          setTitle(text);
        }}
        placeholder="title"
      />
      <TextInput
        onChangeText={text => {
          setAuthor(text);
        }}
        placeholder="author"
      />
      <Button title="post api" onPress={postApi} />
      <Button title="call api" onPress={getApi} />
    </View>
  );
};

export default LocalApi;

const styles = StyleSheet.create({});
