import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#d1d1d1',
    backgroundColor: 'fff',
    marginVertical: 5,
    padding: 5,
  },
  row: {
    flexDirection: 'row',
  },
  image: {flex: 2, height: 150, resizeMode: 'contain'},
  title: {fontSize: 18},
  price: {fontSize: 18, fontWeight: 'bold'},
  oldprice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  rightContainer: {padding: 10, flex: 3},
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
  description: {
    fontSize: 13,
  },
  quantityContainer: {margin: 5},
});

export default styles;
