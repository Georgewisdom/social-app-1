import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default class Divider0Pt0Pt4 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.muted2Filler} />
        <View style={styles.muted2}>
          <Svg viewBox="-0.5 -0.5 377 3" style={styles.line5}>
            <Path
              strokeWidth={1}
              fill="transparent"
              stroke="rgba(0,0,0,1)"
              fillOpacity={0.2}
              strokeOpacity={0.2}
              d="M0.00 0.50 L375.00 0.50 "
            />
          </Svg>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  muted2Filler: {
    flex: 1
  },
  muted2: {
    height: 1,
    opacity: 0.2
  },
  line5: {
    width: 377,
    height: 3,
    backgroundColor: "transparent",
    borderColor: "transparent"
  }
});
