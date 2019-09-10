import React, { Component } from 'react';
import { Container, Text, Content, Form, Item, Input, Label, Footer, FooterTab, Button, Icon } from 'native-base';

export default class Routescreen extends Component {
  render() {
    return (
        <Container style={{flex: 1,backgroundColor: '#A2FFAA', justifyContent: 'center'}}>
        <Text style={{fontSize:40, textAlign: 'center', color:'#00C7AF', fontWeight: 'bold'}}>START THAT RUN</Text>
        <Text style={{fontSize:40, textAlign: 'center', color:'#07B162', fontWeight: 'bold'}}>RouteScreen</Text>
        <Content>
          <Text>test</Text>
        </Content>
      </Container>
    )
  }
}