import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default class Icons13Photo3 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg viewBox="-0 -0 20.0000001 15.000000075" style={styles.photo}>
          <Path
            strokeWidth={0}
            fill="rgba(29,29,38,1)"
            d="M7.29 8.54 C7.29 7.05 8.50 5.83 10.00 5.83 C11.50 5.83 12.71 7.05 12.71 8.54 C12.71 10.04 11.50 11.25 10.00 11.25 C8.50 11.25 7.29 10.04 7.29 8.54 Z M0.00 0.00 L0.00 0.00 Z"
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
  photo: {
    width: 20,
    height: 15,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 7,
    marginLeft: 4
  }
});
