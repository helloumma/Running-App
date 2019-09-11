import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font'
import HomeSvg from './Home/HomeIcon'
import Image from 'react-native-svg'
import testSvg from '../assets/Home/Home.svg';

export default class Existingscreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
          fontLoaded: false
        }
    }
      async componentDidMount() {
        await Font.loadAsync({
            test1: require('../assets/fonts/SourceCodePro-Medium.ttf'),
            test2: require('../assets/fonts/SourceCodePro-Light.ttf'),
        })
        this.setState({fontLoaded: true})
     }
     
  render() {
    if (!this.state.fontLoaded) {
        return <Text>False</Text>
      }
    return (
        <View style={styles.container}>
            <Content style={styles.yellowBox}></Content>
            <Content style={styles.greenBox}></Content>
            <Content style={styles.content}>
            <Text style={styles.title}>Edit Runs</Text>
            <Text style={styles.navText}>Home</Text>
            <Content style={styles.imageContent}>
            <Image
                source={{ uri: '../assets/Home/Home.svg' }}
                style={{ width: 100, height: 100}}
            />
            </Content>
            <Text style={styles.navText} onPress={() => this.props.navigation.navigate('New')}>Add</Text>
            <Text style={styles.navText} onPress={() => this.props.navigation.navigate('Existing')}>Edit</Text>
            <Text style={styles.navText} onPress={() => this.props.navigation.navigate('Previous')}>View</Text>
            <Text style={styles.navText} onPress={() => this.props.navigation.navigate('Route')}>Route</Text>
            </Content>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#C0A4F2',
        justifyContent: 'center',
        flex: 1,
    }, 
    content: {
        position: 'absolute',
        borderWidth: 1,
        borderColor: '#fff',
        top: -425,
        left:30,
        right: 30,
        borderRadius:  8,
        backgroundColor: 'transparent',
        height: 675,
        zIndex:-1
    },
    imageContent: {
        position: 'absolute',
        top: 75,
        left: 160,
        zIndex: 2
    },
    yellowBox: {
        position: 'absolute',
        top: 60,
        left: 60,
        height: 625, 
        width: 600,
        backgroundColor: '#F9DC56',
        zIndex:0
    },
    greenBox: {
        position: 'absolute',
        top: -130,
        left: -70,
        height: 120, 
        width: 400,
        backgroundColor: '#00F6B7',
        zIndex:1
    },
    home: {
        fontSize: 20, 
        textAlign: 'center', 
        color:'white', 
        fontWeight: 'bold',
        fontFamily: 'test1'
        },
    title: {
        fontSize:53, 
        textAlign: 'left', 
        color:'white', 
        fontWeight: 'bold',
        fontFamily: 'test1',
        paddingTop: 70,
        zIndex: 1,
        left:10,
        top: 15
    }, 
    navText: {
        fontSize:30, 
        textAlign: 'left', 
        color:'white', 
        fontWeight: 'bold',
        fontFamily: 'test2',
        paddingTop: 40,
        paddingLeft: '50%',
        zIndex: 1,
    }
})
