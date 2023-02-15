import {Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from '../../screens/ProductScreen/styles';
import QuantitySelector from '../../components/QuantitySelector';
import product from '../../data/product';
import {Picker} from '@react-native-picker/picker';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';
import {useRoute} from '@react-navigation/native';

const ProductScreen = () => {
  const [selectedOption, setselectedOption] = useState(
    product.options ? product.options[0] : null,
  );
  const [quantity, setQuantity] = useState<number>(1);
  const route = useRoute();
  console.log('route', route);
  return (
    <ScrollView style={styles.root}>
      <Text style={styles.title}>{product.title}</Text>
      <ImageCarousel images={product.images} />
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setselectedOption(itemValue)}>
        {product.options.map(option => (
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
        onPress={() => {
          console.warn('sss');
        }}
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
