import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PetOwnerRegisterScreen from '../screens/PetOwnerRegisterScreen';
import BusinessRegisterScreen from '../screens/BusinessRegisterScreen';
import FeedScreen from '../screens/FeedScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarVisible: false,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-home'}
    />
  ),
};

const LoginStack = createStackNavigator({
  Login: LoginScreen,
});

LoginStack.navigationOptions = {
  tabBarLabel: 'Login',
  tabBarVisible: false,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-contacts'}
    />
  ),
};

const RegisterStack = createStackNavigator({
  Register: RegisterScreen,
});

RegisterStack.navigationOptions = {
  tabBarLabel: 'Register',
  tabBarVisible: false,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'ios-add'}
    />
  ),
};

const PetOwnerRegisterStack = createStackNavigator({
  PetOwnerRegister: PetOwnerRegisterScreen,
});

PetOwnerRegisterStack.navigationOptions = {
  tabBarLabel: 'PetOwnerRegister',
  tabBarVisible: false,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'ios-add'}
    />
  ),
};

const BusinessRegisterStack = createStackNavigator({
  BusinessRegister: BusinessRegisterScreen,
});

BusinessRegisterStack.navigationOptions = {
  tabBarLabel: 'BusinessRegister',
  tabBarVisible: false,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'ios-add'}
    />
  ),
};

const FeedScreenStack = createStackNavigator({
  FeedScreen: FeedScreen,
});

FeedScreenStack.navigationOptions = {
  tabBarLabel: 'FeedScreen',
  tabBarVisible: false,
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'ios-add'}
    />
  ),
};

export default createBottomTabNavigator({
  FeedScreenStack,
  HomeStack,
  LoginStack,
  RegisterStack,
  PetOwnerRegisterStack,
  BusinessRegisterStack,
});
