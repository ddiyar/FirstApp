import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, ListItem as RNEListItem} from 'react-native-elements';
import {uploadsUrl} from '../utils/variables';

const ListItem = ({singleMedia, navigation, showButtons}) => {
  //console.log('singleMedia', singleMedia);
  const {deleteMedia} = useMedia();
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
        {showButtons && (
          <>
            <Button
              title="Modify"
              onPress={() => {
                navigation.navigate('Modify', {singleMedia, navigation});
              }}
            />
            <Button
              title="Delete"
              onPress={async () => {
                try {
                  const token = await AsyncStorage.getItem('userToken');
                  const response = await deleteMedia(
                    singleMedia.file_id,
                    token
                  );
                  console.log('Delete', response);
                  if (response.message) {
                    setUpdate(update + 1);
                  }
                } catch (e) {
                  console.log('ListItem, delete: ', e.message);
                }
              }}
            />
          </>
        )}
      </RNEListItem.Content>
      <RNEListItem.Chevron />
    </RNEListItem>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  showButtons: PropTypes.bool.isRequired,
};

export default ListItem;
