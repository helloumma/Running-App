import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
export default class NewForm extends Component {
  render() {
    return (
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
    );
  }
}