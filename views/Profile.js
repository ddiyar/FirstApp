import React, {useContext} from 'react';
import {StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MainContext} from '../contexts/MainContext';
import PropTypes from 'prop-types';

const Profile = (props) => {
  const {isLoggedIn, setIsLoggedI, user} = useContext(MainContext)
  console.log('profile', isLoggedIn);
  const logout = async () => {
    await AsyncStorage.clear();
    setIsLoggedIn(false);
    };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile</Text>
      <Text>{user.user_id}</Text>
      <Text>{user.username}</Text>
      <Text>{user.email}</Text>
      <Text>{user.full_name}</Text>
      <Button title={'Logout'} onPress={logout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
