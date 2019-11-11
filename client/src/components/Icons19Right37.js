import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default class Icons19Right37 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="-0 -0 13.953496256345 19.53491152851035"
          style={styles.right31}
        >
          <Path
            strokeWidth={0}
            fill="rgba(0,0,0,1)"
            d="M2.23 0.28 L13.40 8.65 C13.75 8.91 13.95 9.33 13.95 9.77 C13.95 10.21 13.75 10.62 13.40 10.88 L2.23 19.26 C1.81 19.57 1.24 19.62 0.77 19.39 C0.30 19.15 -0.00 18.66 0.00 18.13 L0.00 1.39 C0.00 0.86 0.30 0.38 0.77 0.15 C1.25 -0.09 1.81 -0.04 2.23 0.28 Z"
          />
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  right31: {
    width: 14,
    height: 20,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 4,
    marginLeft: 7
  }
});
