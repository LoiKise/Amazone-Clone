import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
('@react-navigation/stack');
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import AddressScreen from '../screens/AddressScreen';
import {AppScreens} from '../navigation/type';

const Stack = createStackNavigator();

const ShoppingCartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ShoppingCartScreen}
        name={AppScreens.SHOPPING_CART}
        options={{
          title: 'Shopping Cart',
        }}
      />
      <Stack.Screen
        component={AddressScreen}
        name={AppScreens.ADDRESS}
        options={{
          title: 'Address',
        }}
      />
    </Stack.Navigator>
  );
};

export default ShoppingCartStack;
