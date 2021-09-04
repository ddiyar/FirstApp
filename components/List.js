import React from 'react';
import {FlatList} from 'react-native';
import {useMedia} from '../hooks/ApiHooks';
import ListItem from './ListItem';
import PropTypes from 'prop-types';
import Banner from './Banner';

const List = ({navigation}) => {
  const {mediaArray} = useMedia();
  console.log('List: mediaArray', mediaArray);
  return (
    <FlatList
      ListHeaderComponent={Banner}
      data={mediaArray}
      renderItem={({item}) => (
        <ListItem singleMedia={item} navigation={navigation} />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

List.propTypes = {
  navigation: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default List;
