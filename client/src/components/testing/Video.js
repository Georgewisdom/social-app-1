import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Video from 'react-native-video';

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> Video </Text>
      </View>
    );
  }
}
