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
            <Content style={styles.content}>
            <Text style={styles.title}>Run!</Text>
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
    top: 30,
    left:30,
    right: 30,
    borderRadius:  8,
    backgroundColor: '#FFA3A7',
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
        paddingTop: 20,
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
