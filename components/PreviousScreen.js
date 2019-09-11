import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font'
import HomeSvg from './Home/HomeIcon'
import Image from 'react-native-svg'
import testSvg from '../assets/Home/Home.svg';

export default class Previousscreen extends Component {
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
            <Text style={styles.title}>View Runs</Text>
            <Button style={styles.button}>
                <Text style={styles.navText}>Run One</Text>
            </Button>
            <Button style={styles.button}>
                <Text style={styles.navText}>Run Two</Text>
            </Button>
            <Button style={styles.button}>
                <Text style={styles.navText}>Run Three</Text>
            </Button>
            <Button style={styles.button}>
                <Text style={styles.navText}>Run Four</Text>
            </Button>
            <Button style={styles.button}>
                <Text style={styles.navText}>Run Five</Text>
            </Button>
            <Button style={styles.button}>
                <Text style={styles.navText}>Run Six</Text>
            </Button>
            <Button style={styles.button}>
                <Text style={styles.navText}>Run Seven</Text>
            </Button>
            </Content>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFB9BB',
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
    button: {
        top:70,
        left: 35,
        fontSize: 20, 
        textAlign: 'center', 
        color:'white', 
        fontWeight: 'bold',
        fontFamily: 'test1',
        backgroundColor: 'white',
        width: '85%',
        marginBottom: 20
    },
    yellowBox: {
        position: 'absolute',
        top: 60,
        left: 60,
        height: 625, 
        width: 600,
        backgroundColor: '#F0D923',
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
        fontSize:55, 
        textAlign: 'left', 
        color:'white', 
        fontWeight: 'bold',
        fontFamily: 'test1',
        paddingTop: 70,
        zIndex: 1,
        left:5,
        top: 10
    }, 
    navText: {
        fontSize:20, 
        textAlign: 'center', 
        color:'#00F6B7', 
        fontWeight: 'bold',
        fontFamily: 'test2',
        paddingLeft:20
    }
})
