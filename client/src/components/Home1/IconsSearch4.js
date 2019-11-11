import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default class IconsSearch4 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="-0 -0 18.00000000000002 18.00000000000001"
          style={styles.oval2}
        >
          <Path
            strokeWidth={0}
            fill="rgba(29,29,38,1)"
            d="M8.00 16.00 C3.58 16.00 0.00 12.42 0.00 8.00 C0.00 3.58 3.58 0.00 8.00 0.00 C12.42 0.00 16.00 3.58 16.00 8.00 C16.00 9.85 15.37 11.55 14.32 12.91 C14.32 12.91 17.71 16.29 17.71 16.29 C17.71 16.29 18.10 17.32 17.71 17.71 C17.32 18.10 16.29 17.71 16.29 17.71 C16.29 17.71 12.91 14.32 12.91 14.32 C11.55 15.37 9.85 16.00 8.00 16.00 Z M8.00 14.00 C11.31 14.00 14.00 11.31 14.00 8.00 C14.00 4.69 11.31 2.00 8.00 2.00 C4.69 2.00 2.00 4.69 2.00 8.00 C2.00 11.31 4.69 14.00 8.00 14.00 Z"
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
  oval2: {
    width: 18,
    height: 18,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 5,
    marginLeft: 5
  }
});
