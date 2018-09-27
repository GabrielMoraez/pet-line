import React from 'react';
import { View, StyleSheet, Text, Image, TextInput } from 'react-native';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
    header: null,
  };

  render() {
    const {container, logo, backgroundContainer, backdrop, title, titleWrapper, inputContainer, inputIcon, inputs, containerEmail} = styles;
    return (
      <View style={container}>
        <View style={backgroundContainer}>
          <Image source={require('../assets/images/head-image.png')} resizeMode='cover' style={backdrop} />
        </View>
        <View>
          <Image style={logo} source={require('../assets/images/logo.png')} />
        </View>
        <View style={titleWrapper}>
          <Text style={title}>LOGIN</Text>
        </View>
        <View style={containerEmail}>
          <Image style={inputIcon} source={require('../assets/images/email.png')}/>
          <TextInput style={inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        <View style={inputContainer}>
          <Image style={inputIcon} source={require('../assets/images/lock.png')}/>
          <TextInput style={inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: 150,
  },
  logo: {
    width: 250,
    height: 70,
    marginTop: 40,
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  titleWrapper: {
    position: 'absolute',
    top: 180,
  },
  title: {
    fontSize: 50,
    color: '#505050',
    fontWeight: 'bold',
  },
  inputContainer: {
    position: 'absolute',
    top: 320,
    borderBottomColor: '#e45d25',
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
},
containerEmail: {
  position: 'absolute',
  top: 250,
  borderBottomColor: '#e45d25',
  borderBottomWidth: 1,
  width:300,
  height:45,
  marginBottom:20,
  flexDirection: 'row',
},
inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
    fontSize: 20,
    fontFamily: 'segoe-ui',
},
inputIcon:{
  width:20,
  height:20,
  marginTop:10,
  marginLeft:15,
  justifyContent: 'center'
},
});
