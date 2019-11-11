import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class BarsHomeIndicatorBlack4 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.line1Filler} />
        <View style={styles.line1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  line1Filler: {
    flex: 1
  },
  line1: {
    width: 135,
    height: 5,
    backgroundColor: "rgba(0,0,0,1)",
    borderRadius: 100,
    marginBottom: 8,
    marginLeft: 120
  }
});
