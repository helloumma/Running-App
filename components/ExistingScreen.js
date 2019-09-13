import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font'
import HeaderLines from '../assets/Edit/HeaderLines.svg'
import RightLines from '../assets/Edit/RightLines.svg'
import LeftLines from '../assets/Edit/LeftLines.svg'

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
            <Content style={styles.greenBox}>
                <HeaderLines style={styles.headerLines}/>
            </Content>
            <Content style={styles.rightLines}>
                <RightLines/>
            </Content>
            <LeftLines style={styles.leftLines}/>
            <Content style={styles.content}>
            <Text style={styles.title}>Edit Runs</Text>
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
        backgroundColor: '#C0A4F2',
        justifyContent: 'center',
        flex: 1,
    }, 
    content: {
        position: 'absolute',
        borderWidth: 1,
        borderColor: '#fff',
        top: -555,
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
        backgroundColor: '#F9DC56',
        zIndex:0
    },
    greenBox: {
        position: 'absolute',
        top: -10,
        left: -70,
        height: 120, 
        width: 400,
        backgroundColor: '#00F6B7',
        zIndex:1
    },
    headerLines: {
        left:170,
        bottom:30
    },
    rightLines: {
        left:30,
        top: 10
    },
    leftLines: {
        left:300,
        top:200
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
        fontSize:20, 
        textAlign: 'center', 
        color:'#00F6B7', 
        fontWeight: 'bold',
        fontFamily: 'test2',
        paddingLeft:20
    }
})
