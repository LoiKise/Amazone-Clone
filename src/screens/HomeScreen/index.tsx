import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View} from 'react-native';
import ProductItem from '../../components/ProductItem';
import {DataStore} from 'aws-amplify';
import {Product} from '../../models';

const HomeScreen = (searchValue: {searchValue: string}) => {
  const [products, setProducts] = useState<Product[]>([]);
  console.log('🚀 ~ file: index.tsx:11 ~ HomeScreen ~ products:', products);

  useEffect(() => {
    DataStore.query(Product).then(setProducts);
  }, []);
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
