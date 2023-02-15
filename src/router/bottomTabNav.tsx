import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import HomeStack from './homeStack';
import ShoppingCartStack from './ShoppingCartStack';
import Icon from '../components/Icon';
import {AppScreens, AppTabs} from '../navigation/type';

const Tab = createBottomTabNavigator();

interface tabBarIconInterface {
  focused: boolean;
  color: string;
  size: number;
}

const tabBarIconHome = (color: tabBarIconInterface) => {
  return <Icon name="home" color={color.color} />;
};

const tabBarIconShoppingCartScreen = (color: tabBarIconInterface) => {
  return <Icon name="shoppingcart" color={color.color} />;
};

const tabBarIconUser = (color: tabBarIconInterface) => {
  return <Icon name="user" color={color.color} />;
};
const tabBarIconMenu = (color: tabBarIconInterface) => {
  return <Icon name="menu-fold" color={color.color} />;
};

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#ffbd7d',
        tabBarActiveTintColor: 'red',
        headerShown: false,
      }}>
      <Tab.Screen
        component={HomeStack}
        name={AppScreens.HOME}
        options={{
          tabBarIcon: color => tabBarIconHome(color),
        }}
      />
      <Tab.Screen
        component={ShoppingCartStack}
        name={AppTabs.SHOPPING_CART}
        options={{
          tabBarIcon: tabBarIconShoppingCartScreen,
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: tabBarIconUser,
        }}
        component={HomeScreen}
        name={AppTabs.USER}
      />
      <Tab.Screen
        options={{
          tabBarIcon: tabBarIconMenu,
        }}
        component={HomeScreen}
        name={AppTabs.MENU}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
