import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';

export default class Previousscreen extends Component {
  render() {
    return (
        <Container style={{flex: 1,backgroundColor: '#A2FFAA', justifyContent: 'center'}}>
        <Text style={{fontSize:40, textAlign: 'center', color:'#00C7AF', fontWeight: 'bold'}}>START THAT RUN</Text>
        <Text style={{fontSize:40, textAlign: 'center', color:'#07B162', fontWeight: 'bold'}}>Previous Runs</Text>
        <Content>
        <Button style={{padding:'40%', backgroundColor:'#07B162'}}>
                <Text style={{fontSize:20, textAlign: 'center', color:'white', fontWeight: 'bold'}}>Date</Text>
            </Button>
            <Button style={{padding:'40%', backgroundColor:'#07B162'}}>
                <Text style={{fontSize:20, textAlign: 'center', color:'white', fontWeight: 'bold'}}>Date</Text>
            </Button>
            <Button style={{padding:'40%', backgroundColor:'#07B162'}}>
                <Text style={{fontSize:20, textAlign: 'center', color:'white', fontWeight: 'bold'}}>Date</Text>
            </Button>
            <Button style={{padding:'40%', backgroundColor:'#07B162'}}>
                <Text style={{fontSize:20, textAlign: 'center', color:'white', fontWeight: 'bold'}}>Date</Text>
            </Button>
            <Button style={{padding:'40%', backgroundColor:'#07B162'}}>
                <Text style={{fontSize:20, textAlign: 'center', color:'white', fontWeight: 'bold'}}>Date</Text>
            </Button>
            <Button style={{padding:'40%', backgroundColor:'#07B162'}}>
                <Text style={{fontSize:20, textAlign: 'center', color:'white', fontWeight: 'bold'}}>Date</Text>
            </Button>
            <Button style={{padding:'40%', backgroundColor:'#07B162'}}>
                <Text style={{fontSize:20, textAlign: 'center', color:'white', fontWeight: 'bold'}}>Date</Text>
            </Button>
            <Button style={{padding:'40%', backgroundColor:'#07B162'}}>
                <Text style={{fontSize:20, textAlign: 'center', color:'white', fontWeight: 'bold'}}>Date</Text>
            </Button>
        </Content>
    </Container>
    )
  }
}