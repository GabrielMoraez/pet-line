import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
    header: null,
  };

  render() {
    const {container, logo, backgroundContainer, backdrop, title, titleWrapper, buttonBottom, textStyle, buttonStyle, buttonsWrapper,
      backContainer, backText} = styles;
    const {navigate} = this.props.navigation;

    return (

      // Criar um componente único para os botões

      <View style={container}>
        <View style={backgroundContainer}>
          <Image source={require('../assets/images/head-image.png')} resizeMode='cover' style={backdrop} />
        </View>
        <View>
          <Image style={logo} source={require('../assets/images/logo.png')} />
        </View>
        <View style={titleWrapper}>
          <Text style={title}>REGISTRAR</Text>
        </View>
        <View style={buttonsWrapper}>
          <TouchableOpacity style={buttonStyle}
            onPress={() =>
              navigate('PetOwnerRegister')
            }>
            <Text style={textStyle}>
              SOU DONO DE PET
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={buttonBottom}
            onPress={() =>
              navigate('BusinessRegister')
            }>
            <Text style={textStyle}>
              SOU VENDEDOR
            </Text>
          </TouchableOpacity>
        </View>
        <View style={backContainer}>
          <Text onPress={() =>
            navigate('Home')
          } style={backText}>VOLTAR</Text>
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
  textStyle: {
    alignSelf: 'center',
    color: '#ffffff',
    fontSize: 25,
    fontWeight: 'bold',
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
  },
  buttonsWrapper: {
    position:'absolute',
    top: 300,
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
