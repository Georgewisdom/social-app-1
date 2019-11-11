import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default class IconsArrowLeft4 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg viewBox="-0 -0 18.00011429618739 16" style={styles.arrowLeft}>
          <Path
            strokeWidth={0}
            fill="rgba(29,29,38,1)"
            d="M7.99 14.12 C8.39 14.55 8.39 15.25 8.00 15.68 C7.61 16.11 6.98 16.11 6.58 15.67 L0.30 8.78 C-0.10 8.35 -0.10 7.66 0.30 7.22 L6.58 0.33 C6.97 -0.11 7.61 -0.11 8.00 0.32 C8.39 0.75 8.39 1.44 7.99 1.88 L3.41 6.90 L17.00 6.90 C17.55 6.90 18.00 7.39 18.00 8.00 C18.00 8.61 17.55 9.10 17.00 9.10 L3.41 9.10 L7.99 14.12 Z"
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
  arrowLeft: {
    width: 18,
    height: 16,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 6,
    marginLeft: 5
  }
});
