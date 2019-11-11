import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import IconsDefaultActive4 from "./IconsDefaultActive4";

export default class BarsTabsActive4 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.container2}>
          <View style={styles.label2Stack}>
            <Text style={styles.label2}>Label</Text>
            <IconsDefaultActive4 style={styles.iconsDefaultActive4} />
            <IconsDefaultActive4 style={styles.iconsDefaultActive41} />
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
  container2: {
    width: 140,
    height: 44,
    marginTop: 5
  },
  label2: {
    top: 30,
    left: 0,
    width: 140,
    height: 14,
    backgroundColor: "transparent",
    color: "rgba(245,75,100,1)",
    position: "absolute",
    fontSize: 10,
    letterSpacing: 0.16,
    textAlign: "center"
  },
  iconsDefaultActive4: {
    top: 2,
    left: 60,
    width: 28,
    height: 28,
    backgroundColor: "transparent",
    position: "absolute",
    opacity: 0.2
  },
  iconsDefaultActive41: {
    top: 0,
    left: 56,
    width: 28,
    height: 28,
    backgroundColor: "transparent",
    position: "absolute"
  },
  label2Stack: {
    width: 140,
    height: 44
  }
});
