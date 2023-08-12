import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ExStyle from '../styles/Exstyle';

const StylingComponent = () => {
  return (
    <View>
      {/* inline styling  */}
      <Text style={{backgroundColor: 'blue', color: 'white', fontSize: 30}}>
        inline
      </Text>
      {/* using StyleSheet */}
      <Text style={style.text}>stylesheet</Text>
      {/* using External sheet */}
      <Text style={ExStyle.text}>external</Text>
      {/* mixed */}
      <Text
        style={[
          style.text,
          ExStyle.text,
          {borderColor: 'red', borderWidth: 2},
        ]}>
        mixed
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    marginVertical: 10,
    backgroundColor: 'blue',
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 100,
  },
});

export default StylingComponent;
