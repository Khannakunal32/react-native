import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImageLink} from './imagelink';
import Product from './Product';
import Header from './Header';

const items = [
  {
    name: 'samsung',
    price: 100000,
    color: 'white',
    image: ImageLink,
  },
  {
    name: 'apple',
    price: 230000,
    color: 'black',
    image: ImageLink,
  },
  {
    name: 'oneplus',
    price: 234566,
    color: 'red',
    image: ImageLink,
  },
];

const MainScreen = () => {
  return (
    <View>
      <Header />
      <ScrollView>
        {items.map((item, index) => (
          <Product key={index} item={item} index={index} />
        ))}
      </ScrollView>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
