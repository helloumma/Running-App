import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
import { StyleSheet, View, Text} from 'react-native';
import * as Font from 'expo-font'
import NewForm from './Add/NewForm'
import Dots from '../assets/Add/Dots.svg'
import Lines from '../assets/Add/TitleLines.svg'

export default class Newscreen extends Component {
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
            <Content style={styles.blueBox}></Content>
            <Content style={styles.greenBox}><Lines style={styles.lines}/></Content>
            <Dots style={styles.dots}/>
            <Content style={styles.content}> 
            <Text style={styles.title}>Add Run</Text>
            <NewForm />
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
    blueBox: {
        position: 'absolute',
        top: 60,
        left: 60,
        height: 625, 
        width: 600,
        backgroundColor: '#A8CFE3',
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
    dots: {
        position: 'absolute',
        top: 600,
        left: 270,
    },
    lines: {
        width:'800px',
        left: 60,
        top:7
    },
    home: {
        fontSize: 20, 
        textAlign: 'center', 
        color:'white', 
        fontWeight: 'bold',
        fontFamily: 'test1'
        },
    title: {
        fontSize:66, 
        textAlign: 'left', 
        color:'white', 
        fontWeight: 'bold',
        fontFamily: 'test1',
        paddingTop: 70,
        zIndex: 1,
        left:10,
        top: 10
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
