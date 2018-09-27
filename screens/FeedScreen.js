import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default class FeedScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    header: null,
  };

  render() {
    const { container, profilePic, profileWrapper, searchIcon, searchInput, searchWrapper, header, body, category, categoryTitle } = styles;

    return (
      <View style={container}>
        <View style={header}>
          <View style={searchWrapper}>
            <Image style={searchIcon} source={require('../assets/images/search.png')}/>
            <TextInput style={searchInput}
                placeholder="Procure por itens ou nomes"
                underlineColorAndroid='transparent'
                onChangeText={(searchText) => this.setState({searchText})}/>
          </View>

          <TouchableOpacity style={profileWrapper}
          onPress={() => alert('OpenMenu')}>
            <Image source={require('../assets/images/avatar.gif')} style={profilePic}/>
          </TouchableOpacity>

        </View>
        <ScrollView style={body}>
          <ScrollView style={category}>
            <Text style={categoryTitle}>Categorias</Text>
          </ScrollView>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
  },
  profileWrapper:{
    overflow: 'hidden',
    borderRadius: 100,
    height: 50,
    width: 50,
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 20,
  },
  profilePic: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  searchInput: {
    width:250,
    fontFamily: 'brandonG',
    fontSize: 20,
  },
  searchWrapper: {
    backgroundColor: '#efefef',
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 20,
    width:250,
    height:50,
    flexDirection: 'row',
  },
  searchIcon:{
    alignSelf: 'center',
    height: 25,
    width: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(112,112,112,0.1)',
    height: 85,
  },
  category: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(112,112,112,0.1)',
  },
  categoryTitle: {
    fontFamily: 'segoe-ui-sb',
    fontSize: 17,
    marginTop: 20,
    marginLeft: 20,
  },
});
