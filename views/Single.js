import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import PropTypes from 'prop-types';
import {uploadsUrl} from '../utils/variables';
import {DateTime} from 'luxon';

const Single = ({route}) => {
  const {params} = route;
  return (
    <SafeAreaView style={styles.container}>
      <Text>{params.title}</Text>
      <Image
        source={{
          uri:
          'https://media.mw.metropolia.fi/wbma/uploads/' +
          useRoute().params.filename,
        }}
        style={{
          borderBottomLeftRadius: 50,
          borderRadius: 10,
          width: 300,
          marginRight: 10,
          height: 300
        }}
      />
      <Text>{params.description}</Text>
      <Text>
        {DateTime.fromISO(params.time_added)
        .setLocale('fi')
        .toLocaleString({month: 'long', day: 'numeric', year: 'numeric'})}
      </Text>
      <Text>{params.title}</Text>
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

Single.propTypes = {
  route: PropTypes.object.isRequired,
};
export default Single;
