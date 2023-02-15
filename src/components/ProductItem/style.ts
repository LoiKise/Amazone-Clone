import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#d1d1d1',
    backgroundColor: 'fff',
    marginVertical: 5,
  },
  image: {flex: 2, height: 150, resizeMode: 'contain'},
  title: {fontSize: 18},
  price: {fontSize: 18, fontWeight: 'bold', paddingRight: 10},
  oldprice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  rightContainer: {padding: 10, flex: 3, width: '100%'},
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
});

export default styles;
