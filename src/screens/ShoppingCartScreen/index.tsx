import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import products from '../../data/cart';
import CartProductItem from '../../components/CartProductItem';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps, AppScreens} from '../../navigation/type';

const ShoppingCartScreen = () => {
  const totalPrice = products.reduce((summedPrice, product) => {
    return summedPrice + product.item.price;
  }, 0);
  const navigation = useNavigation<NavigationProps>();

  const onCheckOutHandle = () => {
    navigation.navigate(AppScreens.ADDRESS);
  };
  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        keyExtractor={({id}) => id}
        renderItem={({item}) => <CartProductItem cartItem={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <Text style={{fontSize: 18}}>
              Subtotal({products.length} items):{''}
              <Text style={{color: '#e47911'}}>${totalPrice.toFixed(2)}</Text>
            </Text>
            <Button
              text="Proceed to checkout"
              onPress={onCheckOutHandle}
              containerStyles={{backgroundColor: '#f7e300'}}
            />
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({page: {padding: 10}});

export default ShoppingCartScreen;
