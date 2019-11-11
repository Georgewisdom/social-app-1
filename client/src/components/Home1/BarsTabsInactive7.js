import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconsDefaultInactive4 from "./IconsDefaultInactive4";

export default class BarsTabsInactive7 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.container4}>
          <View style={styles.label4Stack}>
            <Text style={styles.label4}>Label</Text>
            <IconsDefaultInactive4 style={styles.iconsDefaultInactive42} />
            <IconsDefaultInactive4 style={styles.iconsDefaultInactive43} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  container4: {
    width: 140,
    height: 44,
    marginTop: 5
  },
  label4: {
    top: 30,
    left: 0,
    width: 140,
    height: 14,
    backgroundColor: "transparent",
    color: "rgba(78,88,110,1)",
    position: "absolute",
    fontSize: 10,
    letterSpacing: 0.16,
    textAlign: "center"
  },
  iconsDefaultInactive42: {
    top: 2,
    left: 58,
    width: 28,
    height: 28,
    backgroundColor: "transparent",
    position: "absolute",
    opacity: 0.2
  },
  iconsDefaultInactive43: {
    top: 0,
    left: 56,
    width: 28,
    height: 28,
    backgroundColor: "transparent",
    position: "absolute"
  },
  label4Stack: {
    width: 140,
    height: 44
  }
});
