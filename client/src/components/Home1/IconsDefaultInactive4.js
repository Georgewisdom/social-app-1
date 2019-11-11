import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

export default class IconsDefaultInactive4 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg viewBox="-0 -0 24 24" style={styles.path7}>
          <Path
            strokeWidth={0}
            fill="rgba(29,29,38,1)"
            d="M12.00 24.00 C5.37 24.00 0.00 18.63 0.00 12.00 C0.00 5.37 5.37 0.00 12.00 0.00 C18.63 0.00 24.00 5.37 24.00 12.00 C24.00 18.63 18.63 24.00 12.00 24.00 Z M12.00 22.00 C17.57 22.00 22.08 17.52 22.08 12.00 C22.08 6.48 17.57 2.00 12.00 2.00 C6.43 2.00 1.92 6.48 1.92 12.00 C1.92 17.52 6.43 22.00 12.00 22.00 Z"
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
  path7: {
    width: 24,
    height: 24,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 2,
    marginLeft: 2
  }
});
