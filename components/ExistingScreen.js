import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';

export default class Existingscreen extends Component {
  render() {
    return (
        <Container style={{flex: 1,backgroundColor: '#A2FFAA', justifyContent: 'center'}}>
        <Text style={{fontSize:'90%', textAlign: 'center', color:'#00C7AF', fontWeight: 'bold'}}>Existing Routines</Text>
        <Content>
            <Button style={{padding:'35%', backgroundColor:'#07B162'}}>
                <Text style={{fontSize:'20%', textAlign: 'center', color:'white', fontWeight: 'bold'}}>Routine</Text>
            </Button>
            <Button style={{padding:'35%', backgroundColor:'#07B162'}}>
                <Text style={{fontSize:'20%', textAlign: 'center', color:'white', fontWeight: 'bold'}}>Routine</Text>
            </Button>
            <Button style={{padding:'35%', backgroundColor:'#07B162'}}>
                <Text style={{fontSize:'20%', textAlign: 'center', color:'white', fontWeight: 'bold'}}>Routine</Text>
            </Button>
            <Button style={{padding:'35%', backgroundColor:'#07B162'}}>
                <Text style={{fontSize:'20%', textAlign: 'center', color:'white', fontWeight: 'bold'}}>Routine</Text>
            </Button>
            <Button style={{padding:'35%', backgroundColor:'#07B162'}}>
                <Text style={{fontSize:'20%', textAlign: 'center', color:'white', fontWeight: 'bold'}}>Routine</Text>
            </Button>
            <Button style={{padding:'35%', backgroundColor:'#07B162'}}>
                <Text style={{fontSize:'20%', textAlign: 'center', color:'white', fontWeight: 'bold'}}>Routine</Text>
            </Button>
            <Button style={{padding:'35%', backgroundColor:'#07B162'}}>
                <Text style={{fontSize:'20%', textAlign: 'center', color:'white', fontWeight: 'bold'}}>Routine</Text>
            </Button>
            <Button style={{padding:'35%', backgroundColor:'#07B162'}}>
                <Text style={{fontSize:'20%', textAlign: 'center', color:'white', fontWeight: 'bold'}}>Routine</Text>
            </Button>
        </Content>
    </Container>
    )
  }
}