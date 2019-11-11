import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
export default class posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch('http://192.168.8.103:5000/api/posts')
      .then(res => res.json())
      .then(data => console.log('that' + data))
      .catch(error => console.log(error));

    console.log('this' + this.state.posts);
  }

  render() {
    return <View />;
  }
}
