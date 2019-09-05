import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';

export default class Homescreen extends Component {
  render() {
    return (
        <Container style={{flex: 1,backgroundColor: '#A2FFAA', justifyContent: 'center'}}>
            <Text style={{fontSize:'100%', textAlign: 'center', color:'#00C7AF', fontWeight: 'bold'}}>START THAT RUN</Text>
            <Content>
                <Button style={{padding:'30%', backgroundColor:'#07B162'}} onPress={() => this.props.navigation.navigate('New')}>
                    <Text style={{fontSize:'20%', textAlign: 'center', color:'white', fontWeight: 'bold'}}>New Routine</Text>
                </Button>
                
                <Button style={{padding:'25%', backgroundColor:'#07B162'}} onPress={() => this.props.navigation.navigate('Existing')}>
                    <Text style={{fontSize:'20%', textAlign: 'center', color:'white', fontWeight: 'bold'}}>Existing Routine</Text>
                </Button>

                <Button style={{padding:'30%', backgroundColor:'#07B162'}} onPress={() => this.props.navigation.navigate('Previous')}>
                    <Text style={{fontSize:'20%', textAlign: 'center', color:'white', fontWeight: 'bold'}}>Previous Runs</Text>
                </Button>
            </Content>
        </Container>
    )
  }
}
/*
<Button
            title="New Routine"
            onPress={() => this.props.navigation.navigate('New')}
        />
        <Button
            title="Previous Runs"
            onPress={() => this.props.navigation.navigate('Previous')}
        />*/
