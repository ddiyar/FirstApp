import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types';

class ListItem extends React.Component {
  render() {
    console.log('ITEM: ' + this.props.singleMedia);
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('Single', this.props.singleMedia);
        }}
        style={{
          flexDirection: 'row',
          backgroundColor: '#242834',
          padding: 10,
          marginTop: 20,
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <View>
          <Image
            source={{
              uri:
                'https://media.mw.metropolia.fi/wbma/uploads/' +
                this.props.singleMedia.thumbnails?.w165,
            }}
            style={{
              borderBottomLeftRadius: 50,
              borderRadius: 10,
              width: 160,
              height: 100,
              marginRight: 10,
              flex: 2,
            }}
          />
        </View>
        <View>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
            {this.props.singleMedia.title}
          </Text>
          <Text
            style={{
              flexWrap: 'wrap',
              width: 200,
              paddingRight: 10,
              color: 'grey',
            }}
          >
            {this.props.singleMedia.description}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
export default ListItem;
