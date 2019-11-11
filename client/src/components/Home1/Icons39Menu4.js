import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default class Icons39Menu4 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg viewBox="-0 -0 4.583333356249998 20.0000001" style={styles.menu}>
          <Path
            strokeWidth={0}
            fill="rgba(29,29,38,1)"
            d="M0.00 10.00 C0.00 8.73 1.03 7.71 2.29 7.71 C3.56 7.71 4.58 8.73 4.58 10.00 C4.58 11.27 3.56 12.29 2.29 12.29 C1.03 12.29 0.00 11.27 0.00 10.00 Z M0.00 17.71 C0.00 16.44 1.03 15.42 2.29 15.42 C3.56 15.42 4.58 16.44 4.58 17.71 C4.58 18.97 3.56 20.00 2.29 20.00 C1.03 20.00 0.00 18.97 0.00 17.71 Z M0.00 2.29 C0.00 1.03 1.03 0.00 2.29 0.00 C3.56 0.00 4.58 1.03 4.58 2.29 C4.58 3.56 3.56 4.58 2.29 4.58 C1.03 4.58 0.00 3.56 0.00 2.29 Z"
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
  menu: {
    width: 5,
    height: 20,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 4,
    marginLeft: 12
  }
});
