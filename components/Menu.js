import React, { Component } from 'react';
import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
import { StyleSheet, View, Text } from 'react-native';
import Home from '../assets/Menu/Home.svg'
import Add from '../assets/Menu/Add.svg'
import Edit from '../assets/Menu/Edit.svg'
import View from '../assets/Menu/View.svg'
import Route from '../assets/Menu/Route.svg'

export default class Meu extends Component {
  render() {
    return (
        <View>
            <Container>
                <Home />
                <Add />
                <Edit />
                <View />
                <Route />
            </Container>
        </View>
        
    );
  }
}

