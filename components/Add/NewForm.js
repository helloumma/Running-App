import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Content, Form, Item, Input, Label } from 'native-base';
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
        <Content>
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
          </Form>
        </Content>
    );
  }
}

const styles = StyleSheet.create({
  label: {
      fontSize:20, 
      textAlign: 'left', 
      color:'white', 
      fontFamily: 'test2',
  }, 
  
})