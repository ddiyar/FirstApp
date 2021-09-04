import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {Settings} from 'react-native-feather';
const Banner = () => {
  return (
    <View
      style={{
        flex: 5,
        borderBottomRightRadius: 40,
        justifyContent: 'center',
        height: 250,
      }}
    ><ImageBackground
        source={{
          uri: '',
        }}
        resizeMode="cover"
        imageStyle={{borderBottomRightRadius: 70}}
        style={{
          height: 250,
          flex: 5,
          justifyContent: 'center',
          borderBottomRightRadius: 40,
        }}
      >

      <View style={{position: 'absolute', top: 5, right: 90}}>
          <Settings width={500} />
        </View>
        <Text
          style={{
            position: 'absolute',
            bottom: 20,
            color: 'black',
            fontSize: 28,
            lineHeight: 54,
            fontWeight: 'bold',
            textAlign: 'left',
            backgroundColor: '#FF0000',
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
        </Text>

    </ImageBackground>
    </View>
  );
};

export default Banner;
