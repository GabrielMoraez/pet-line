import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Register',
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
      <Image source={require('../assets/images/head-image.png')} />
        <Text>Tela de Registro</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
