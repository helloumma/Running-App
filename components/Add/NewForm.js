import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Content, Form, Item, Input, Label, Button } from 'native-base';
import * as Font from 'expo-font'

export default class NewForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fontLoaded: false
    }
}
  async componentDidMount() {
    await Font.loadAsync({
        test0: require('../../assets/fonts/SourceCodePro-Bold.ttf'),
        test1: require('../../assets/fonts/SourceCodePro-Medium.ttf'),
        test2: require('../../assets/fonts/SourceCodePro-Light.ttf'),
    })
    this.setState({fontLoaded: true})
 }
  render() {
    if (!this.state.fontLoaded) {
      return <Text>False</Text>
    }
    return (
        <Content style={styles.content}>
          <Form>
            <Item stackedLabel >
              <Label style={styles.label}>Name</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label style={styles.label}>Time</Label>
              <Input />
            </Item>
            <Item stackedLabel>
              <Label style={styles.label}>Distance</Label>
              <Input />
            </Item>
            <Button style={styles.button}>
                <Text style={styles.navText}>Walk +</Text>
            </Button>
            <Button style={styles.button}>
                <Text style={styles.navText}>Power Walk +</Text>
            </Button>
            <Button style={styles.button}>
                <Text style={styles.navText}>Run +</Text>
            </Button>
            <Button style={styles.submitButton}>
                <Text style={styles.navText}>Submit</Text>
            </Button>
          </Form>
        </Content>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingLeft: 20,
    paddingTop:20
  },
  label: {
      fontSize:20, 
      textAlign: 'left', 
      color:'white', 
      fontFamily: 'test2',
  }, 
  button: {
    fontSize: 20, 
    textAlign: 'center', 
    color:'white', 
    fontWeight: 'bold',
    fontFamily: 'test1',
    backgroundColor: 'white',
    marginBottom: 20,
    width:'95%',
    marginLeft:10
  },
  submitButton: {
    fontSize: 20, 
    textAlign: 'center', 
    color:'white', 
    fontWeight: 'bold',
    fontFamily: 'test0',
    backgroundColor: 'white',
    fontWeight: "800",
    marginBottom: 10,
    width:'40%',
    marginLeft:100
  },
  navText: {
    fontSize:20, 
    textAlign: 'center', 
    color:'#A8CFE3', 
    fontWeight: 'bold',
    fontFamily: 'test2',
    paddingLeft:20
  },
  
  
})