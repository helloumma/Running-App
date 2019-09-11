import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font'
export default class Homescreen extends Component {
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
    //style: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
    return (
        <View style={styles.container}>
            <Content style={styles.blueBox}></Content>
            <Content style={styles.pinkBox}></Content>

            <Content style={styles.content}>
            <Text style={styles.title}>Run!</Text>
            <Text style={styles.navText}>Home</Text>
            <Text style={styles.navText}>Add</Text>
            <Text style={styles.navText}>Edit</Text>
            <Text style={styles.navText}>View</Text>
            <Text style={styles.navText}>Route</Text>
            </Content>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFA3A7',
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
    blueBox: {
        position: 'absolute',
        top: 75,
        left: 60,
        height: 600, 
        width: 600,
        backgroundColor: '#A8CFE3',
        zIndex:0
    },
    pinkBox: {
        position: 'absolute',
        top: -70,
        left: -25,
        height: 475, 
        width: 200,
        backgroundColor: '#FFB9BB',
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
        fontSize:70, 
        textAlign: 'center', 
        color:'white', 
        fontWeight: 'bold',
        fontFamily: 'test1',
        paddingTop: 40,
        zIndex: 1,
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
/*
<Button
            title="New Routine"
            onPress={() => this.props.navigation.navigate('New')}
        />
        <Button
            title="Previous Runs"
            onPress={() => this.props.navigation.navigate('Previous')}
        />*/


        /*
         <Button style={{padding:'30%', backgroundColor:'#07B162'}} onPress={() => this.props.navigation.navigate('New')}>
                    <Text style={styles.home}>New Routine</Text>
                </Button>
                <Button style={{padding:'25%', backgroundColor:'#07B162'}} onPress={() => this.props.navigation.navigate('Existing')}>
                    <Text style={styles.home}>Existing Routine</Text>
                </Button>
                <Button style={{padding:'30%', backgroundColor:'#07B162'}} onPress={() => this.props.navigation.navigate('Previous')}>
                    <Text style={styles.home}>Previous Runs</Text>
                </Button>
                <Button style={{padding:'30%', backgroundColor:'#07B162'}} onPress={() => this.props.navigation.navigate('Route')}>
                    <Text style={styles.home}>Routes</Text>
                </Button>
         */