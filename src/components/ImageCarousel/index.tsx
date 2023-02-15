import {
  FlatList,
  Image,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useCallback, useRef, useState} from 'react';

interface ImageProps {
  images: string[];
}

const ImageCarousel = ({images}: ImageProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const windowWidth = useWindowDimensions().width;

  const onFlastListUpdate = useCallback(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }, []);

  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <Image
            source={{uri: item}}
            style={[styles.image, {width: windowWidth - 40}]}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment="center"
        decelerationRate={'fast'}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onFlastListUpdate}
      />
      <View style={styles.dots}>
        {images.map((image, index) => (
          <View
            style={[
              styles.dot,
              {backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed'},
            ]}
            key={index}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  root: {},
  image: {margin: 10, height: 250, resizeMode: 'contain'},
  dots: {flexDirection: 'row', justifyContent: 'center'},
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: '#c9c9c9',
    borderColor: '#c9c9c9',
    margin: 5,
  },
});
