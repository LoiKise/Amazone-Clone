/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import Router from './src/router';

// import Router from './src/router';
// import AddressScreen from './src/screens/AddressScreen';
// import ShoppingCartScreen from './src/screens/ShoppingCartScreen';

// import ProductScreen from './src/screens/ProductScreen';
// import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  const backgroundStyle = {flex: 1};
  return (
    <View style={backgroundStyle}>
      <Router />
    </View>
  );
};

export default App;
