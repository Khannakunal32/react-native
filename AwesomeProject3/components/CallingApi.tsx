import {
  ActivityIndicator,
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

type dataType = {
  userId: number;
  id: number;
  completed: boolean;
  title: string;
};

const CallingApi = () => {
  const [data, setData] = useState<dataType>();
  const [dataList, setDataList] = useState<dataType[]>();
  const getApi = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/10',
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.warn(error);
    }
  };
  const getApi2 = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        setData(json);
      })
      .catch(error => console.warn(error));
  };
  const getApiList = async () => {
    try {
      setTimeout(async () => {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos',
        );
        let result = await response.json();
        setDataList(result);
      }, 5000);
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
      {/* Use conditional rendering to show or hide the indicator */}
      {dataList ? (
        <FlatList
          data={dataList.filter(item => item.id < 30)}
          renderItem={({item}) => {
            return <TextStyled data={item} />;
          }}
        />
      ) : (
        // Show an ActivityIndicator while waiting for the data
        <View style={styles.loading}>
          <ActivityIndicator color={'#fff'} size={'large'} />
        </View>
      )}
    </View>
  );
};

const NonList = (props: any) => {
  const data = props.data;
  return (
    <View>
      {data ? <TextStyled data={data} /> : <Text>loading</Text>}
      <Button title="getApi" onPress={props.getApi} />
    </View>
  );
};

function TextStyled(props: any) {
  const data = props.data;
  return (
    <Text style={styles.ViewList}>
      User ID: {data.userId}
      {'\n'}
      ID: {data.id}
      {'\n'}
      Title: {data.title}
      {'\n'}
      Completed: {data.completed ? 'Yes' : 'No'}
    </Text>
  );
}

export default CallingApi;

const styles = StyleSheet.create({
  ViewList: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
  },
  // Add a style for the loading view
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
});
