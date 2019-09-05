import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base';

export default class Homescreen extends Component {
  render() {
    return (
        <Container>
            <Text>Home Screen</Text>
            <Content>
                <Button onPress={() => this.props.navigation.navigate('New')}>
                    <Text>New Routine</Text>
                </Button>
                
                <Button onPress={() => this.props.navigation.navigate('Existing')}>
                    <Text>Existing Routine</Text>
                </Button>

                <Button onPress={() => this.props.navigation.navigate('Previous')}>
                    <Text>Previous Runs</Text>
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
