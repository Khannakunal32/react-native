import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

type dataType = {
  userId: number;
  id: number;
  completed: boolean;
  title: string;
};

const CallingApi = () => {
  const [data, setData] = useState<dataType>();
  const [dataList, setDataList] = useState<dataType[]>([]);
  const getApi = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/10',
      );
      const json = await response.json();
      setData(json);
      console.warn(json);
    } catch (error) {
      console.warn(error);
    }
  };
  const getApi2 = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        console.warn(json);
        setData(json);
      })
      .catch(error => console.warn(error));
  };
  const getApiList = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
      );
      let result = await response.json();
      setDataList(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getApiList();
  }, []);

  return (
    <View>
      <NonList data={data} getApi={getApi} />
      <ScrollView>
        {dataList
          .filter(item => item.id <= 30)
          .map(item => {
            return (
              <View style={styles.ViewList} key={item.id}>
                <Text>
                  User ID: {item.userId}
                  {'\n'}
                  ID: {item.id}
                  {'\n'}
                  Title: {item.title}
                  {'\n'}
                  Completed: {item.completed ? 'Yes' : 'No'}
                </Text>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
};

const NonList = (props: any) => {
  const data = props.data;
  return (
    <View>
      <Button title="getApi" onPress={props.getApi} />
      {data ? (
        <Text>
          User ID: {data.userId}
          {'\n'}
          ID: {data.id}
          {'\n'}
          Title: {data.title}
          {'\n'}
          Completed: {data.completed ? 'Yes' : 'No'}
        </Text>
      ) : (
        <Text>loading</Text>
      )}
    </View>
  );
};

export default CallingApi;

const styles = StyleSheet.create({
  ViewList: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
  },
});
