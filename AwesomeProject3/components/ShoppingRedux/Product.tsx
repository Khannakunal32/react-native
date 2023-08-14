import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/actions';
import {useSelector} from 'react-redux';

const Product = (props: any) => {
  const {item, index} = props;
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.reducer);
  const [isAdded, setIsAdded] = React.useState(false);

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      cartItems.forEach((element: any) => {
        if (element.name === item.name) {
          setIsAdded(true);
        }
      });
    }
  }, [cartItems, item.name]);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  function handleAddToCart(item: any) {
    dispatch(addToCart(item));
  }
  function handleRemoveFromCart() {
    console.log(item);
  }
  return (
    <View style={styles.pack} key={index}>
      <Text style={styles.textPart}>{item.name}</Text>
      <Text style={styles.textPart}>{item.price}</Text>
      <Text style={styles.textPart}>{item.color}</Text>
      <Image
        style={{width: 200, height: 200, flex: 1, margin: 10}}
        resizeMode="contain"
        source={{uri: item.image}}
      />
      {!isAdded ? (
        <Button title="Add to cart" onPress={() => handleAddToCart(item)} />
      ) : (
        <Button
          title="Remove from cart"
          onPress={() => handleRemoveFromCart()}
        />
      )}
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  pack: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderBottomColor: 'orange',
    borderBottomWidth: 2,
    padding: 10,
  },
  textPart: {
    fontSize: 20,
  },
});
