import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet, Text,
  View
} from 'react-native';
import List from './components/List';

const App = () => {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.container}>
        <List />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

 //const styles = StyleSheet.create({
   // container: {
    //backgroundColor: '#fff',
  //},
  //droidSafeArea: {
    //flex: 1,
    //backgroundColor: '#ccc',
    //paddingTop: Platform.OS === 'android' ? 25 : 0,
  //},
//});
  const Flex = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.main} />
          <ImageBackground source={require('./assets.homeless-kittens.jpeg')} resizeMode="cover style"={styles.catLogoArea}>
            <Text style={styles.kitten_slogan}>Homeless kittens</Text>
          </ImageBackground>
          <View style={styles.aa}></View>
          <View style={styles.bb}></View>
        <View style={styles.footer} />
      </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //flexDirection: 'column',
      //alignItems: 'center',
      //justifyContent: 'center',
      //padding: 20,
      backgroundColor: 'red',
    },
    header: {
      //width: 200,
      //height: 200,
      flexBasis: 300,
      backgroundColor: "green",
      position: 'relative',
    },
    box: {
      width: 50,
      height: 50,
      backgroundColor: 'pink',
      position: 'absolute',
      //top: 20,
      //left: 40,
    },
    main: {
      flex: 1,
      //width: '50%',
      //height: 100,
      backgroundColor: "darkorange",
      flexDirection: 'row',
    },
    aa: {
      //flex: 2,
      flexBasis: 50,
      backgroundColor: 'gray',
    },
    bb: {
      flex: 1,
      backgroundColor: 'gray',
    },
    footer: {
      flex: 1,
      flexBasis: 50,
      //width: 200,
      //height: 200,
      backgroundColor: "yellow"
    }
  });

export default App;
