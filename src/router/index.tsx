import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
('@react-navigation/stack');
import BottomTabNav from './bottomTabNav';
import {NavigationContainer} from '@react-navigation/native';
import {AppScreens} from '../navigation/type';

const Root = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Root.Navigator screenOptions={{headerShown: false}}>
        <Root.Screen component={BottomTabNav} name={AppScreens.HOME} />
      </Root.Navigator>
    </NavigationContainer>
  );
};

export default Router;
