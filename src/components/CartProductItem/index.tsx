import {Image, Text, View} from 'react-native';
import Star from 'react-native-vector-icons/AntDesign';
import React, {useState} from 'react';

import QuantitySelector from '../QuantitySelector';

import styles from '../CartProductItem/styles';

interface cartItemProps {
  cartItem: {
    id: string;
    quantity: number;
    option?: string;
    item: {
      id: string;
      title: string;
      image: string;
      avgRating: number;
      ratings: number;
      price: number;
      oldPrice: number;
    };
  };
}

const CartProductItem = ({cartItem}: cartItemProps) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: cartItem.item.image}} />
        <View style={styles.rightContainer}>
          <Text numberOfLines={2} style={styles.title}>
            {cartItem.item.title}
          </Text>
          {/* Ratings */}
          <View style={styles.ratingsContainer}>
            {[0, 0, 0, 0, 0].map((element, i) => (
              <Star
                key={`${cartItem.item.id}${i}`}
                style={styles.star}
                name={
                  i < Math.floor(cartItem.item.avgRating) ? 'star' : 'staro'
                }
                size={18}
                color="#e47911"
              />
            ))}
            <Text>{cartItem.item.ratings}</Text>
          </View>
          {/* rating */}
          <Text style={styles.price}>
            ${cartItem.item.price}
            {cartItem.item.oldPrice && (
              <Text style={styles.oldprice}> ${cartItem.item.oldPrice}</Text>
            )}
          </Text>
        </View>
      </View>
      <View style={styles.quantityContainer}>
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </View>
    </View>
  );
};

export default CartProductItem;
