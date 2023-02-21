import {Text, ScrollView, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../../screens/ProductScreen/styles';
import QuantitySelector from '../../components/QuantitySelector';
import {Picker} from '@react-native-picker/picker';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import {useRoute} from '@react-navigation/native';
import {CartProduct, Product} from '../../models';
import {Auth, DataStore} from 'aws-amplify';

interface IRoute {
  key: string;
  name: string;
  path: undefined;
  params: {id: string};
}

const ProductScreen = () => {
  const [selectedOption, setselectedOption] = useState<string | undefined>(
    undefined,
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const route = useRoute<IRoute>();

  useEffect(() => {
    DataStore.query(Product, route.params?.id).then(setProduct);
  }, [route.params?.id]);

  useEffect(() => {
    if (product?.options) {
      setselectedOption(product.options[0]);
    }
  }, [product?.options]);

  //loading khi chua product chua co
  if (!product) {
    return <ActivityIndicator />;
  }

  //Handle Cart
  const handleAddToCart = async () => {
    //console.log('ccc');
    const userData = await Auth.currentAuthenticatedUser();
    const newCartProduct = new CartProduct({
      userSub: userData.attributes.sub,
      quantity: quantity,
      option: selectedOption,
      productID: product.id,
    });
    DataStore.save(newCartProduct);
  };
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>
      <ImageCarousel images={product.images} />
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setselectedOption(itemValue)}>
        {product.options?.map(option => (
          <Picker.Item label={option} value={option} key={option} />
        ))}
      </Picker>
      <Text style={styles.price}>
        from ${product.price}
        {product.oldPrice && (
          <Text style={styles.oldPrice}>&{product.oldPrice}</Text>
        )}
      </Text>
      <Text style={styles.description}>{product.description}</Text>
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      <Button
        text={'Add To Cart'}
        onPress={handleAddToCart}
        containerStyles={{backgroundColor: 'red'}}
      />
      <Button
        text={'Buy Now'}
        onPress={() => {
          console.warn('Buy Now');
        }}
      />
    </ScrollView>
  );
};

export default ProductScreen;
