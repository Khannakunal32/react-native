import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const arr = [
  {
    id: 1,
    name: 'kunal',
  },
  {
    id: 2,
    name: 'khanna',
  },
  {
    id: 3,
    name: 'kunal',
  },
  {
    id: 4,
    name: 'khanna',
  },
  {
    id: 5,
    name: 'kunal',
  },
  {
    id: 6,
    name: 'khanna',
  },
  {
    id: 7,
    name: 'kunal',
  },
  {
    id: 8,
    name: 'khanna',
  },
  {
    id: 9,
    name: 'khanna',
  },
];

function CompanyData(): JSX.Element {
  return (
    <ScrollView>
      {/* using map */}
      {arr.map(item => (
        <Text
          style={{
            fontSize: 24,
            margin: 10,
            backgroundColor: 'blue',
            color: 'white',
          }}
          key={item.id}>
          {item.name}
        </Text>
      ))}
      {/* using flat list */}
      <FlatList
        data={arr}
        renderItem={({item}) => <Text>{item.id}</Text>}
        keyExtractor={item => item.id.toString()}
      />
      {/* creating grid */}
      <View
        style={{
          flex: 1,
          marginTop: 30,
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}>
        {arr.map(item => (
          <Text
            style={{
              width: '20%',
              textAlign: 'center',
              padding: 10,
              fontSize: 24,
              margin: 10,
              backgroundColor: 'blue',
              color: 'white',
            }}
            key={item.id}>
            {item.name}
          </Text>
        ))}
      </View>
      {/* using component in flatlist */}
      <FlatList data={arr} renderItem={({item}) => <UserData item={item} />} />
    </ScrollView>
  );
}

const UserData = (props: any) => {
  return (
    <View>
      <Text key={props.item.id}>{props.item.name}</Text>
    </View>
  );
};

export default CompanyData;
