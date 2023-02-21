/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';

import {View} from 'react-native';
import React from 'react';
import {Amplify} from 'aws-amplify';
import config from './src/aws-exports';
import Router from './src/router';
import {withAuthenticator} from 'aws-amplify-react-native';
Amplify.configure(config);

const App = () => {
  const backgroundStyle = {flex: 1};
  return (
    <View style={backgroundStyle}>
      <Router />
    </View>
  );
};

export default withAuthenticator(App);
