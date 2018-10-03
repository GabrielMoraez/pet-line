import React from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
    header: null,
  };

  render() {
    // Tentar diminuir a quantidade de styles diferentes

    const {container, logo, backgroundContainer, backdrop, title, titleWrapper, inputContainer, inputIcon,
      inputs, containerEmail, loginStyle, faceStyle, loginButtonText, faceButtonText, fbIcon,
      backContainer, backText} = styles;
    const {navigate} = this.props.navigation;

    return (
      //Criar um componente único para os inputs e botões

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
        <View>
          <TouchableOpacity style={loginStyle}
          onPress={() =>
            navigate('FeedScreen')
          }>
            <Text style={loginButtonText}>
              ENTRAR
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={faceStyle}
          onPress={() =>
            navigate('FeedScreen')
          }>
            <Image style={inputIcon} source={require('../assets/images/fb.png')} style={fbIcon}/>
            <Text style={faceButtonText}>
              ENTRAR COM O FACEBOOK
            </Text>
          </TouchableOpacity>
        </View>
        <View style={backContainer}>
          <Text style={backText}
          onPress={() =>
            navigate('Home')
          }>VOLTAR</Text>
        </View>
      </View>
    );
  }
}

// Fazer css externo

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
  inputs: {
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
      fontSize: 20,
      fontFamily: 'brandonG',
  },
  inputIcon: {
    width:20,
    height:20,
    marginTop:10,
    marginLeft:15,
    justifyContent: 'center'
  },
  loginStyle: {
    position: 'absolute',
    top: 300,
    backgroundColor: '#e45d25',
    justifyContent: 'center',
    alignSelf: 'stretch',
    height: 50,
    width: 280,
    alignSelf: 'center',
    borderRadius: 50,
  },
  loginButtonText: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  faceStyle: {
    position: 'absolute',
    top: 370,
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#2699fb',
    borderTopWidth: 2,
    borderTopColor: '#2699fb',
    borderLeftWidth: 2,
    borderLeftColor: '#2699fb',
    borderRightWidth: 2,
    borderRightColor: '#2699fb',
    justifyContent: 'center',
    alignSelf: 'stretch',
    height: 50,
    width: 280,
    alignSelf: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  fbIcon: {
    marginLeft: 20,
    alignSelf: 'center',
    marginRight: 'auto',
    height: 20,
    width: 20,
  },
  faceButtonText: {
    marginRight: 'auto',
    alignSelf: 'center',
    color: '#2699fb',
  },
  backContainer: {
    position:'absolute',
    top: 550,
    width: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#707070',
  },
  backText: {
    marginLeft: 'auto',
    marginRight: 5,
    color: '#707070',
    fontSize: 20,
    fontFamily: 'brandonGBlack',
  },
});
