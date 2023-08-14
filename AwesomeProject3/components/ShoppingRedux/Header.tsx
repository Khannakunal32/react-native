import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';

const Header = () => {
  const [countItem, setCountItem] = React.useState(0);
  const cartData = useSelector((state: any) => state.reducer);
  useEffect(() => {
    setCountItem(cartData.length);
  }, [cartData]);
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.textPack}>{countItem}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  textPack: {
    fontSize: 30,
    textAlign: 'right',
    textAlignVertical: 'center',
    paddingRight: 10,
  },
  headerStyle: {
    backgroundColor: 'orange',
    height: 50,
  },
});
