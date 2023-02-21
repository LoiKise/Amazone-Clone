import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import {Auth} from 'aws-amplify';

const MenuScreen = () => {
  const handleLogOut = () => {
    Auth.signOut();
  };
  return (
    <SafeAreaView style={styles.btnLogout}>
      <Button text="Sign out" onPress={handleLogOut} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnLogout: {},
});

export default MenuScreen;
