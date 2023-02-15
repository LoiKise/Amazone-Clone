import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import Star from 'react-native-vector-icons/AntDesign';
import {AppScreens, NavigationProps} from '../../navigation/type';
import styles from './style';

interface productItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

const ProductItem = ({item}: productItemProps) => {
  const navigation = useNavigation<NavigationProps>();

  const onPressHandle = () => {
    navigation.navigate(AppScreens.PRODUCT_DETAIL, {id: item.id});
  };
  return (
    <Pressable onPress={onPressHandle} style={styles.root}>
      <Image style={styles.image} source={{uri: item.image}} />
      <View style={styles.rightContainer}>
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
        {/* Ratings */}
        <View style={styles.ratingsContainer}>
          {[0, 0, 0, 0, 0].map((element, i) => (
            <Star
              key={`${item.id}${i}`}
              style={styles.star}
              name={i < Math.floor(item.avgRating) ? 'star' : 'staro'}
              size={18}
              color="#e47911"
            />
          ))}
          <Text>{item.ratings}</Text>
        </View>
        {/* rating */}
        <Text style={styles.price}>
          ${item.price}
          {item.oldPrice && (
            <Text style={styles.oldprice}> ${item.oldPrice}</Text>
          )}
        </Text>
      </View>
    </Pressable>
  );
};

export default ProductItem;
