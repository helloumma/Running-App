import React, { Component } from 'react';
import { Container, Text, Content, Form, Item, Input, Label, Footer, FooterTab, Button, Icon } from 'native-base';

export default class Newscreen extends Component {
  render() {
    return (
        <Container style={{flex: 1,backgroundColor: '#A2FFAA', justifyContent: 'center'}}>
        <Text style={{fontSize:40, textAlign: 'center', color:'#00C7AF', fontWeight: 'bold'}}>START THAT RUN</Text>
        <Text style={{fontSize:40, textAlign: 'center', color:'#07B162', fontWeight: 'bold'}}>New Routine</Text>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label style={{fontSize:20, textAlign: 'left', color:'#07B162', fontWeight: '500'}}>Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label style={{fontSize:20, textAlign: 'left', color:'#07B162', fontWeight: '500'}}>Time</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label style={{fontSize:20, textAlign: 'left', color:'#07B162', fontWeight: '500'}}>Distance</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label style={{fontSize:20, textAlign: 'left', color:'#07B162', fontWeight: '500'}}>Walk</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label style={{fontSize:20, textAlign: 'left', color:'#07B162', fontWeight: '500'}}>Power Walk</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label style={{fontSize:20, textAlign: 'left', color:'#07B162', fontWeight: '500'}}>Run</Label>
              <Input />
            </Item>
          </Form>
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}