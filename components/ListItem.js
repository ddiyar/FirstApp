import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, ListItem as RNEListItem} from 'react-native-elements';
import {uploadsUrl} from '../utils/variables';

const ListItem = ({singleMedia, navigation}) => {
  //console.log('singleMedia', singleMedia);
  return (
    <RNEListItem>
      bottomDivider
      onPress={() => {
        navigator.navigate('Single', singleMedia);
       }}
      >
        <Avatar
          size="large"
          square
          source={{uri: uploadsUrl + singleMedia.thumbnails.w160}}
        ></Avatar>
      <RNEListItem.Content>
        <RNEListItem.title h4>{singleMedia.title}</RNEListItem.title>
        <RNEListItem.Subtitle>{singleMedia.description}</RNEListItem.Subtitle>
      </RNEListItem.Content>
      <RNEListItem.Chevron />
    </RNEListItem>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default ListItem;
