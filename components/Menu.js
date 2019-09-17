import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
import { StyleSheet, View, Text } from 'react-native';
import Home from '../assets/Menu/Home.svg'
import Add from '../assets/Menu/Add.svg'
import Edit from '../assets/Menu/Edit.svg'
import ViewIcon from '../assets/Menu/View.svg'
import Route from '../assets/Menu/Route.svg'

export default class Meu extends Component {
  render() {
    return (
        <View style={styles.content}>
            <Container style={styles.icon}><Home /></Container>
            <Container style={styles.icon2} onPress={() => this.props.navigation.navigate('New')}><Add /></Container>
            <Container style={styles.icon3} onPress={() => this.props.navigation.navigate('Existing')}><Edit /></Container>
            <Container style={styles.icon4} onPress={() => this.props.navigation.navigate('Previous')}><ViewIcon /></Container>
            <Container style={styles.icon5} onPress={() => this.props.navigation.navigate('Route')}><Route /></Container>
                
        </View>
        
    );
  }
}
const styles = StyleSheet.create({
    content: {
        top:75,
        left:40,
        zIndex:1
    },
    icon: {
        paddingLeft:30
    },
    icon2: {
        paddingLeft:90
    },
    icon3: {
        paddingLeft:150
    },
    icon4: {
        paddingLeft:210
    },
    icon5: {
        paddingLeft:270
    },
})

