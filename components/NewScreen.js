import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Footer, FooterTab, Button, Icon } from 'native-base';

export default class Newscreen extends Component {
  render() {
    return (
        <Container>
         <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Time</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Distance</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Walk</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Power Walk</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Run</Label>
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