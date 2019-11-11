import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

export default class BarsStatusDefaultWhite4 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.action}>
          <Text style={styles.time}>9:41</Text>
        </View>
        <View style={styles.actionFiller} />
        <View style={styles.container}>
          <Svg
            viewBox="-0 -0 17.09999084472656 10.70000457763672"
            style={styles.rectangle1}
          >
            <Path
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              d="M1.80 6.70 C1.80 6.70 3.00 6.70 3.00 7.90 C3.00 7.90 3.00 9.50 3.00 9.50 C3.00 9.50 3.00 10.70 1.80 10.70 C1.80 10.70 1.20 10.70 1.20 10.70 C1.20 10.70 0.00 10.70 0.00 9.50 C0.00 9.50 0.00 7.90 0.00 7.90 C0.00 7.90 0.00 6.70 1.20 6.70 Z M6.60 4.70 C6.60 4.70 7.80 4.70 7.80 5.90 C7.80 5.90 7.80 9.50 7.80 9.50 C7.80 9.50 7.80 10.70 6.60 10.70 C6.60 10.70 6.00 10.70 6.00 10.70 C6.00 10.70 4.80 10.70 4.80 9.50 C4.80 9.50 4.80 5.90 4.80 5.90 C4.80 5.90 4.80 4.70 6.00 4.70 Z M11.20 2.40 C11.20 2.40 12.40 2.40 12.40 3.60 C12.40 3.60 12.40 9.50 12.40 9.50 C12.40 9.50 12.40 10.70 11.20 10.70 C11.20 10.70 10.60 10.70 10.60 10.70 C10.60 10.70 9.40 10.70 9.40 9.50 C9.40 9.50 9.40 3.60 9.40 3.60 C9.40 3.60 9.40 2.40 10.60 2.40 Z M15.90 0.00 C15.90 0.00 17.10 0.00 17.10 1.20 C17.10 1.20 17.10 9.50 17.10 9.50 C17.10 9.50 17.10 10.70 15.90 10.70 C15.90 10.70 15.30 10.70 15.30 10.70 C15.30 10.70 14.10 10.70 14.10 9.50 C14.10 9.50 14.10 1.20 14.10 1.20 C14.10 1.20 14.10 0.00 15.30 0.00 Z"
            />
          </Svg>
          <View style={styles.rectangle1Filler} />
          <View style={styles.path1Row}>
            <Svg
              viewBox="-0 -0 15.39999961853027 11.05721011662482"
              style={styles.path1}
            >
              <Path
                strokeWidth={0}
                fill="rgba(255,255,255,1)"
                d="M1.70 4.69 C1.58 4.81 1.26 4.69 1.26 4.69 L0.09 3.51 C0.09 3.51 -0.00 3.37 0.00 3.28 C0.00 3.20 0.04 3.12 0.10 3.06 C4.35 -1.02 11.05 -1.02 15.30 3.06 C15.36 3.12 15.40 3.20 15.40 3.28 C15.40 3.37 15.31 3.51 15.31 3.51 L14.14 4.69 C14.14 4.69 13.83 4.81 13.70 4.69 C12.08 3.16 9.93 2.30 7.70 2.30 C5.47 2.30 3.32 3.15 1.70 4.69 Z M4.38 7.40 C4.26 7.52 3.94 7.40 3.94 7.40 L2.78 6.22 C2.78 6.22 2.68 6.08 2.69 5.99 C2.69 5.90 2.72 5.82 2.78 5.76 C5.56 3.18 9.85 3.18 12.62 5.76 C12.68 5.82 12.72 5.90 12.72 5.99 C12.72 6.08 12.62 6.22 12.62 6.22 L11.46 7.40 C11.46 7.40 11.14 7.52 11.02 7.40 C10.11 6.58 8.93 6.12 7.70 6.12 C6.47 6.12 5.29 6.58 4.38 7.40 Z M7.92 10.96 C7.92 10.96 7.78 11.06 7.70 11.06 C7.62 11.06 7.48 10.96 7.48 10.96 L5.46 8.93 C5.46 8.93 5.37 8.79 5.37 8.70 C5.37 8.61 5.41 8.53 5.47 8.47 C6.76 7.38 8.64 7.38 9.93 8.47 C9.99 8.53 10.03 8.61 10.03 8.70 C10.03 8.79 9.94 8.93 9.94 8.93 L7.92 10.96 Z"
              />
            </Svg>
            <View style={styles.battery}>
              <View style={styles.pathStack}>
                <Svg viewBox="-0 -0 24.5 11.5" style={styles.path}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(255,255,255,0.36)"
                    d="M3.59 1.00 C3.59 1.00 2.26 1.07 1.90 1.26 C1.62 1.41 1.41 1.62 1.26 1.90 C1.07 2.26 1.00 3.59 1.00 3.59 L1.00 7.91 C1.00 7.91 1.07 9.24 1.26 9.60 C1.41 9.88 1.62 10.09 1.90 10.24 C2.26 10.43 3.59 10.50 3.59 10.50 L18.41 10.50 C18.41 10.50 19.74 10.43 20.10 10.24 C20.38 10.09 20.59 9.88 20.74 9.60 C20.93 9.24 21.00 7.91 21.00 7.91 L21.00 3.59 C21.00 3.59 20.93 2.26 20.74 1.90 C20.59 1.62 20.38 1.41 20.10 1.26 C19.74 1.07 18.41 1.00 18.41 1.00 Z M3.59 0.00 L18.41 0.00 C18.41 0.00 20.11 0.13 20.57 0.37 C21.02 0.62 21.38 0.98 21.63 1.43 C21.87 1.89 22.00 3.59 22.00 3.59 L22.00 7.91 C22.00 7.91 21.87 9.61 21.63 10.07 C21.38 10.52 21.02 10.88 20.57 11.13 C20.11 11.37 18.41 11.50 18.41 11.50 L3.59 11.50 C3.59 11.50 1.89 11.37 1.43 11.13 C0.98 10.88 0.62 10.52 0.37 10.07 C0.13 9.61 0.00 7.91 0.00 7.91 L0.00 3.59 C0.00 3.59 0.13 1.89 0.37 1.43 C0.62 0.98 0.98 0.62 1.43 0.37 C1.89 0.13 3.59 0.00 3.59 0.00 Z M24.50 5.69 C24.50 6.93 23.00 7.69 23.00 7.69 L23.00 3.69 C23.00 3.69 24.50 4.45 24.50 5.69 Z"
                  />
                </Svg>
                <View style={styles.rectangle} />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row"
  },
  action: {
    width: 54,
    height: 18,
    marginLeft: 20,
    marginTop: 14
  },
  time: {
    width: 54,
    height: 18,
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    letterSpacing: -0.16,
    textAlign: "center"
  },
  actionFiller: {
    flex: 1,
    flexDirection: "row"
  },
  container: {
    width: 68,
    height: 14,
    flexDirection: "row",
    marginRight: 14,
    marginTop: 15
  },
  rectangle1: {
    width: 17,
    height: 11,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 1,
    marginTop: 2
  },
  rectangle1Filler: {
    flex: 1,
    flexDirection: "row"
  },
  path1: {
    width: 15,
    height: 11,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginRight: 5
  },
  battery: {
    width: 25,
    height: 13
  },
  path: {
    top: 0,
    left: 0,
    width: 25,
    height: 12,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  rectangle: {
    top: 1,
    left: 2,
    width: 18,
    height: 8,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    borderRadius: 1.6
  },
  pathStack: {
    width: 25,
    height: 12,
    marginTop: 1
  },
  path1Row: {
    height: 13,
    flexDirection: "row",
    marginTop: 1
  }
});
