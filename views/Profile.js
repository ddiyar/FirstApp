import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MainContext} from '../contexts/MainContext';
import PropTypes from 'prop-types';
import {Avatar} from 'react-native-elements/dist/avatar/Avatar';
import {Card} from 'react-native-elements';
import ListItem from '../components/ListItem';
import {uploadsUrl} from '../utils/variables';

const Profile = (props) => {
  const {setIsLoggedIn, user} = useContext(MainContext)
  //console.log('profile', isLoggedIn);
  const [avatar, setAvatar] = useState('https://placekitten.com/400/400');

  const {getFilesByTag} = useTag();

  useEffect(() => {
    (async () => {
      const file = await getFilesByTag('avatar_' + user.user_id);
      console.log('file', file);
      setAvatar(uploadsUrl + file.pop().filename);
    })();
  }, [user]);

  const logout = async () => {
    await AsyncStorage.clear();
    setIsLoggedIn(false);
    };
  return (
    <scrollView>
    <Card>
      <Card.Title>
        <Text h1>{user.username}</Text>
      </Card.Title>
      <Card.Image
        source={{uri: avatar}}
        style={styles.image}
        PlaceholderContent={<ActivityIndicator />}
      />
      <ListItem>
        <Avatar icon={{name: 'email', color: 'black'}} />
        <Text>{user.email}</Text>
      </ListItem>
      <ListItem>
        <Avatar icon={{name: 'user', type: 'font-awesome', color: 'black'}} />
        <Text>{user.full_name}</Text>
      </ListItem>
      <ListItem bottomDivider onPress={logout}>
        <Avatar icon={{name: 'logout', color: 'black'}} />
        <ListItem.Content>
          <ListItem.Title>Logout</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </Card>
    </scrollView>
  );
};

/**const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});
*/
const styles = StyleSheet.create({
  image: {width: '100%', height: undefined, aspectRatio: 1},
});

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
