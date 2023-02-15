import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View} from 'react-native';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';

const HomeScreen = (searchValue: {searchValue: string}) => {
  console.log('concu', searchValue);
  return (
    <View style={styles.page}>
      {/* Render Product Componet */}
      <FlatList
        data={products}
        keyExtractor={({id}) => id}
        renderItem={({item}) => <ProductItem item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {padding: 5, flex: 1},
});

export default HomeScreen;
