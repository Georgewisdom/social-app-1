import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text style={styles.header}> Hi, Welcome to Swizz </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 20
    }
})
