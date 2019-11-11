import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default class Icons17Video3 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg viewBox="-0 -0 20.0000001 11.666666725" style={styles.video}>
          <Path
            strokeWidth={0}
            fill="rgba(29,29,38,1)"
            d="M17.89 1.15 L15.00 3.87 L15.00 2.08 C15.00 0.93 14.07 0.00 12.92 0.00 L2.08 0.00 C0.93 0.00 0.00 0.93 0.00 2.08 L0.00 9.58 C0.00 10.73 0.93 11.67 2.08 11.67 L12.92 11.67 C13.47 11.67 14.00 11.45 14.39 11.06 C14.78 10.67 15.00 10.14 15.00 9.58 L15.00 7.80 L17.89 10.52 C18.25 10.86 18.79 10.95 19.24 10.76 C19.70 10.56 20.00 10.11 20.00 9.61 L20.00 2.06 C20.00 1.56 19.70 1.11 19.24 0.91 C18.79 0.71 18.25 0.81 17.89 1.15 Z"
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
  video: {
    width: 20,
    height: 12,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 8,
    marginLeft: 4
  }
});
