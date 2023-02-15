/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
('@react-navigation/stack');
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import {AppScreens} from '../navigation/type';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import Icon from '../components/Icon';

const Stack = createStackNavigator();

//style
const styles = StyleSheet.create({
  root: {
    backgroundColor: '#22e3dd',
  },
  search: {
    margin: 10,
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {height: 40, marginLeft: 18},
});

interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
}

const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: HeaderComponentProps) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.search}>
        <Icon name="search1" color="#000" />
        <TextInput
          placeholder="Search..."
          style={styles.searchInput}
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>
    </SafeAreaView>
  );
};

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }}>
      <Stack.Screen name={AppScreens.HOME} options={{title: 'HOME'}}>
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen
        component={ProductScreen}
        name={AppScreens.PRODUCT_DETAIL}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
