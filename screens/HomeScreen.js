import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  Alert,
  Button,
  TouchableOpacity,
} from 'react-native';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    header: null,
  };

  render() {
    const resizeMode = 'center';
    const { buttonStyle, textStyle, buttonBottom } = styles;
    const { navigate } = this.props.navigation;

    return (
      <ImageBackground source={require('../assets/images/home-bg.png')}  style={{width: '100%', height: '100%'}}>
        <Image source={require('../assets/images/logo.png')} style={{flex:1, marginBottom: 50, width: 300, alignSelf: 'center'}} resizeMode="contain" />
        <TouchableOpacity style={buttonStyle}
          onPress={() =>
            navigate('Login')
          }>
          <Text style={textStyle}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonBottom}
          onPress={() =>
            navigate('Register')
          }>
          <Text style={textStyle}>
            REGISTRAR
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textStyle: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 25,
    fontWeight: '600',
  },
  buttonStyle: {
    backgroundColor: '#e45d25',
    justifyContent: 'center',
    alignSelf: 'stretch',
    height: 50,
    width: 280,
    alignSelf: 'center',
    borderRadius: 50,
    marginBottom: 20,
  },
  buttonBottom: {
    backgroundColor: '#e45d25',
    justifyContent: 'center',
    alignSelf: 'stretch',
    height: 50,
    width: 280,
    alignSelf: 'center',
    borderRadius: 50,
    marginBottom: 100,
  }
});
