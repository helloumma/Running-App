import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './components/HomeScreen';
import ExistingScreen from './components/ExistingScreen';
import NewScreen from './components/NewScreen';
import PreviousScreen from './components/PreviousScreen';
import RouteScreen from './components/RouteScreen';
import { Font } from 'expo';


export default class App extends React.Component {
  async componentDidMount() {
    await Font.loadAsync({
      'font1': require('./assets/fonts/SourceCodePro-Medium.ttf'),
    });
    this.props.fontLoader();
  }
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Existing: {
    screen: ExistingScreen
  },
  New: {
    screen: NewScreen
  },
  Previous: {
    screen: PreviousScreen
  }, 
  Route: {
    screen: RouteScreen
  }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});