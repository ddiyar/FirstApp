import React, {useContext, useEffect} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform, ImageBackground, Text
} from 'react-native';
import PropTypes from 'prop-types';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useUser} from '../hooks/ApiHooks';
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';
import {Card} from 'react-native-elements';
import ListItem from '../components/ListItem';

  const Login = () => {
    const {setIsLoggedIn, setUser} = useContext(MainContext);
    const {checkToken} = useUser();
    const [registerFormToggle, setRegisterFormToggle] = useState(false);
    // console.log('Login isLoggedIn', isLoggedIn);

    const getToken = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      console.log('logIn asyncstorage token:', userToken);
      if (userToken) {
        const userInfo = await checkToken(userToken);
        if (userInfo.user_id) {
          setUser(userInfo);
          setIsLoggedIn(true);
        }
      }
    };

    useEffect(() => {
      getToken();
    }, []);

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ImageBackground
          source={require('../assets/splash.png')}
          style={styles.image}
        >
          {registerFormToggle ? (
            <Card>
              <Card.Divider />
              <Card.Title h4>Register</Card.Title>
              <RegisterForm navigation={navigator} />
            </Card>
          ) : (
            <Card>
              <Card.Title h4>Login</Card.Title>
              <LoginForm navigation={navigator} />
            </Card>
          )}
          {/* TODO: add link/button & event handler to change state: setRegformtoggle(!regformtoggle);  */}
          <ListItem
            onPress={() => {
              setRegisterFormToggle(!registerFormToggle);
            }}
          >
            <ListItem.Content>
              <Text style={styles.text}>
                {registerFormToggle
                  ? 'Already registered? Login here'
                  : 'No account? Register here.'}
              </Text>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
});

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;
