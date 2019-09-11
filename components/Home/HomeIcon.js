import Image from 'react-native-svg'
import React, { Component } from 'react';

import testSvg from '../../assets/Home/Home.svg';
export default class HomeIcon extends Component  {
    render() {
        return (
            <Image
  source={{ uri: '../../assets/Home/Home.svg' }}
  style={{ width: 100, height: 100}}
/>
        )
    }
 
}