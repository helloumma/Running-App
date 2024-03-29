import React, { Component } from 'React'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from './src/screens/Home'
import Profile from './src/screens/Profile'

const Project = createStackNavigator({
    Home: {
     screen: Home
    },
    Profile: {
     screen: Profile
    }
  });
  export default createAppContainer(Project);