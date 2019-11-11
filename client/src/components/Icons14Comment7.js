import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default class Icons14Comment7 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="-0 -0 19.53099234159676 19.53492386527608"
          style={styles.path55}
        >
          <Path
            strokeWidth={0}
            fill="rgba(29,29,38,1)"
            d="M9.76 0.00 C9.76 0.00 17.60 2.61 18.98 6.52 C20.35 10.43 19.11 14.79 15.88 17.38 C12.64 19.98 4.60 18.06 4.60 18.06 L1.30 19.46 C1.30 19.46 0.55 19.52 0.29 19.26 C0.02 18.99 0.09 18.24 0.09 18.24 L1.48 14.94 C1.48 14.94 -0.50 8.14 1.22 5.04 C2.94 1.93 9.76 0.00 9.76 0.00 Z M12.55 11.86 C12.55 11.35 11.62 10.93 11.62 10.93 L5.57 10.93 C5.57 10.93 4.64 11.35 4.64 11.86 C4.64 12.37 5.57 12.79 5.57 12.79 L11.62 12.79 C11.62 12.79 12.55 12.37 12.55 11.86 Z M14.87 7.67 C14.87 7.16 13.94 6.74 13.94 6.74 L5.57 6.74 C5.57 6.74 4.64 7.16 4.64 7.67 C4.64 8.19 5.57 8.60 5.57 8.60 L13.94 8.60 C13.94 8.60 14.87 8.19 14.87 7.67 Z"
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
  path55: {
    width: 20,
    height: 20,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 4,
    marginLeft: 4
  }
});
