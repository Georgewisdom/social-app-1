import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class BarsHomeIndicatorWhite4 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.lineFiller} />
        <View style={styles.line} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "transparent"
  },
  lineFiller: {
    flex: 1
  },
  line: {
    width: 135,
    height: 5,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 100,
    marginBottom: 8,
    marginLeft: 120
  }
});
