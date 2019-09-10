import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
import { StyleSheet, View, Text } from 'react-native';
import { Font, AppLoading } from 'expo'

export default class Homescreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
          fontLoaded: false
        }
      }
    
      async componentDidMount() {
        await Font.loadAsync({
            'test1': require('./assets/fonts/SourceCodePro-Medium.ttf'),
        })
     
        this.setState({fontLoaded: true})
     }
  render() {
    //style: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
    return (
        
        <View style={styles.container}>
            <Text style={{fontSize:100, textAlign: 'center', color:'#00C7AF', fontWeight: 'bold'}}>START THAT RUN</Text>
            <Content>
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
        flex: 1
    }, 
    home: {
        fontSize: 20, 
        textAlign: 'center', 
        color:'white', 
        fontWeight: 'bold',
        fontFamily: 'test1'
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
