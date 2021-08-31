import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Platform, SafeAreaView, StyleSheet, View} from 'react-native';
import List from '../components/List';
import PropTypes from 'prop-types';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.container}>
        <List navigation={navigation} />
      </View>
      <StatusBar style="auto"/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  droidSafeArea: {
    flex: 1,
    backgroundColor: '#ccc',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
