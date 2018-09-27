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
    const { container, profilePic, profileWrapper, searchIcon, searchInput, searchWrapper, header, body, category, categoryTitle,
      categoryView, categoryPic, categoryText, categoryScroll, business } = styles;

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
        <ScrollView style={body} vertical={true} showsVerticalScrollIndicator={false}>
          <View style={category}>
            <Text style={categoryTitle}>Categorias</Text>
            <ScrollView style={categoryScroll} horizontal={true} vertical={false} showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={categoryView}
              onPress={() => alert('OpenCategory')}>
                <Image source={require('../assets/images/petshop.png')} style={categoryPic}/>
                <Text style={categoryText}>PetShops</Text>
              </TouchableOpacity>
              <TouchableOpacity style={categoryView}
              onPress={() => alert('OpenCategory')}>
                <Image source={require('../assets/images/vets.png')} style={categoryPic}/>
                <Text style={categoryText}>Clínicas</Text>
              </TouchableOpacity>
              <TouchableOpacity style={categoryView}
              onPress={() => alert('OpenCategory')}>
                <Image source={require('../assets/images/hotel.png')} style={categoryPic}/>
                <Text style={categoryText}>Hoteis</Text>
              </TouchableOpacity>
              <TouchableOpacity style={categoryView}
              onPress={() => alert('OpenCategory')}>
                <Image source={require('../assets/images/walkers.png')} style={categoryPic}/>
                <Text style={categoryText}>PetWalkers</Text>
              </TouchableOpacity>
            </ScrollView>
            <View style={business}>

            </View>
          </View>

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
    height: 160,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(112,112,112,0.4)',
  },
  categoryTitle: {
    fontFamily: 'segoe-ui-sb',
    fontSize: 17,
    marginTop: 10,
    marginLeft: 20,
  },
  categoryScroll: {
    marginTop: 20,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  categoryView: {
    alignItems: 'center',
    width: 100,
    height: 80,
    marginRight: 10,
  },
  categoryPic: {
    width: 100,
    height: 60,
    borderRadius: 10,
  },
  categoryText:{ 
    fontFamily: 'segoe-ui-sli',
    marginTop: 5,
  },
});
