import React from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';

export default class BusinessRegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Registro de Vendedor',
    header: null,
  };

  render() {
    const {container, logo, backgroundContainer, backdrop, title, titleWrapper, containerName, inputIcon,
      inputs, containerEmail, containerPassword, containerPasswordConfirm, loginStyle, loginButtonText,
      backContainer, backText, containerCNPJ} = styles;
    const {navigate} = this.props.navigation;


    // Trasnformar os inputs desse formulário em componentes unícos
    return (
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
        <View style={containerName}>
          <Image style={inputIcon} source={require('../assets/images/user.png')}/>
          <TextInput style={inputs}
              placeholder="Nome Completo"
              underlineColorAndroid='transparent'
              onChangeText={(name) => this.setState({name})}/>
        </View>
        <View style={containerEmail}>
          <Image style={inputIcon} source={require('../assets/images/email.png')}/>
          <TextInput style={inputs}
              placeholder="Endereço de e-mail"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        <View style={containerCNPJ}>
          <Image style={inputIcon} source={require('../assets/images/menu.png')}/>
          <TextInput style={inputs}
              placeholder="CPNJ"
              underlineColorAndroid='transparent'
              onChangeText={(CNPJ) => this.setState({CNPJ})}/>
        </View>
        <View style={containerPassword}>
          <Image style={inputIcon} source={require('../assets/images/lock.png')}/>
          <TextInput style={inputs}
              placeholder="Senha"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>
        <View style={containerPasswordConfirm}>
          <Image style={inputIcon} source={require('../assets/images/lock.png')}/>
          <TextInput style={inputs}
              placeholder="Confirme sua senha"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(passwordConfirm) => this.setState({passwordConfirm})}/>
        </View>
        <View>
          <TouchableOpacity style={loginStyle}
          onPress={() =>
            navigate('FeedScreen')
          }>
            <Text style={loginButtonText}>
              REGISTRAR
            </Text>
          </TouchableOpacity>
        </View>
        <View style={backContainer}>
          <Text style={backText}
          onPress={() =>
            navigate('Register')
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
    height: 100,
  },
  logo: {
    width: 250,
    height: 70,
    marginTop: 15,
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  titleWrapper: {
    position: 'absolute',
    top: 110,
  },
  title: {
    fontSize: 40,
    color: '#505050',
    fontWeight: 'bold',
  },
  containerName: {
    position: 'absolute',
    top: 160,
    borderBottomColor: '#e45d25',
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
  },
  containerEmail: {
    position: 'absolute',
    top: 210,
    borderBottomColor: '#e45d25',
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
  },
  containerCNPJ: {
    position: 'absolute',
    top: 260,
    borderBottomColor: '#e45d25',
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
  },
  containerPassword: {
    position: 'absolute',
    top: 310,
    borderBottomColor: '#e45d25',
    borderBottomWidth: 1,
    width:300,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
  },
  containerPasswordConfirm: {
    position: 'absolute',
    top: 360,
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
    top: 350,
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
