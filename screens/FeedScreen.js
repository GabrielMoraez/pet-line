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
import { bold } from 'ansi-colors';


export default class FeedScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    header: null,
  };

  render() {
    const { container, profilePic, profileWrapper, searchIcon, searchInput, searchWrapper, header, body, category, categoryTitle,
      categoryView, categoryPic, categoryText, categoryScroll, business, businessTitle, businessView, businessPic, businessName, businessCategory,
      businessAddress, starContainer, star, starText, businessInfo, addressTab, addressTitle, addressText, addressWrapper, firstHeader, secondHeader } = styles;

      const categories = require('../data/category.json');

      const categoriesRender = categories.map((category, i)=>
        <TouchableOpacity style={categoryView}
        onPress={() => alert('OpenCategory')} key={i}>
          <Image source={{uri: category.image}} style={categoryPic}/>
          <Text style={categoryText}>{category.name}</Text>
        </TouchableOpacity>);


      const estabs = require('../data/establishments.json');

      const estabsRender = estabs.map((estabs, i)=>
        <TouchableOpacity style={businessView}
        onPress={() => alert('OpenBusiness')} key={i}>
          <Image source={{uri: estabs.image}} style={businessPic}/>
          <View style={businessInfo}>
            <Text style={businessName}>{estabs.name}</Text>
            <Text style={businessCategory}>Categoria: {estabs.category}</Text>
            <Text style={businessAddress}>Endereço: {estabs.address}</Text>
          </View>
          <View style={starContainer}>
            <Image source={require('../assets/images/star.png')} style={star} />
            <Text style={starText}>{estabs.rating}</Text>
          </View>
        </TouchableOpacity>);

    return (
      <View style={container}>
        <View style={header}>
          <View style={firstHeader}>
            <TouchableOpacity style={addressWrapper}
            onPress={() => alert('OpenAddress')}>
              <Text style={addressTitle}>ENDEREÇO ATUAL</Text>
              <Text style={addressText}>Rua Afonso Cavalcanti, 13</Text>
            </TouchableOpacity>

            <TouchableOpacity style={profileWrapper}
            onPress={() => alert('aaa') }>
              <Image source={require('../assets/images/avatar.gif')} style={profilePic}/>
            </TouchableOpacity>
          </View>

          <View style={secondHeader}>
            <View style={searchWrapper}>
              <Image style={searchIcon} source={require('../assets/images/search.png')}/>
              <TextInput style={searchInput}
                  placeholder="Procure por itens ou nomes"
                  underlineColorAndroid='transparent'
                  onChangeText={(searchText) => this.setState({searchText})}/>
            </View>

          </View>
        </View>
        
        <ScrollView style={body} vertical={true} showsVerticalScrollIndicator={false}>
          <View style={category}>
            <Text style={categoryTitle}>Categorias</Text>
            <ScrollView style={categoryScroll} horizontal={true} vertical={false} showsHorizontalScrollIndicator={false}>
              {categoriesRender}
            </ScrollView>
          </View>

          <View style={business}>
            <Text style={businessTitle}>Estabelecimentos</Text>
            {estabsRender}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#F5F5F5',
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
    width:'100%',
    fontFamily: 'brandonG',
    fontSize: 20,
  },
  searchWrapper: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 20,
    width: '80%',
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
    backgroundColor: "#FFF",
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'column',
  },
  category: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#FFF",
  },
  categoryTitle: {
    color: '#707070',
    fontFamily: 'segoe-ui-sb',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20,
  },
  categoryScroll: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  categoryView: {
    alignItems: 'center',
    width: 100,
    marginRight: 20,
    marginLeft: 20,
  },
  categoryPic: {
    width: 100,
    height: 60,
    borderRadius: 10,
  },
  categoryText: { 
    color: '#707070',
    fontFamily: 'segoe-ui-sl',
  },
  business: {
    backgroundColor: "#FFF",
  },
  businessView: {
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(112,112,112,0.2)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(112,112,112,0.2)',
  },
  businessTitle: {
    color: '#707070',
    fontFamily: 'segoe-ui-sb',
    fontSize: 17,
    marginTop: 10,
    marginLeft: 20,
  },
  businessPic: {
    width: 50,
    height: 50,
    marginLeft: 20,
  },
  businessInfo: {
    flexDirection: 'column',
    marginRight: 'auto',
    marginLeft: 20,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  addressWrapper: {
    width: '80%',
    marginTop: 20,
    marginLeft: 20,
  },
  addressTitle: {
    fontSize: 15,
    color: 'grey',
    fontFamily: 'segoe-ui-sl',
    fontWeight: 'bold',
  },
  addressText: {
    color: 'black',
    fontSize: 17,
    fontFamily: 'segoe-ui-sl',
  },
  star: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  firstHeader: {
    flexDirection:'row',
  },
  secondHeader: {
    marginBottom: 20,
  },
});
