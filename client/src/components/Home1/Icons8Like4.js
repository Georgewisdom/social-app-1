import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default class Icons8Like4 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="-0 -0 19.5942798425969 16.30996705122388"
          style={styles.like1}
        >
          <Path
            strokeWidth={0}
            fill="rgba(29,29,38,1)"
            d="M10.44 1.57 L9.80 2.21 L9.16 1.57 C7.06 -0.52 3.67 -0.52 1.57 1.57 L1.57 1.57 C-0.44 3.59 -0.53 6.83 1.37 8.95 C3.72 11.55 6.30 13.94 9.08 16.07 C9.50 16.39 10.09 16.39 10.51 16.07 C13.30 13.94 15.88 11.55 18.22 8.95 C20.13 6.83 20.04 3.59 18.02 1.57 L18.02 1.57 Z"
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
  like1: {
    width: 20,
    height: 16,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 6,
    marginLeft: 4
  }
});
