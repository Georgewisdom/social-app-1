import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export default class IconsTwitter extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg viewBox="-0 -0 20 16.25245182877582" style={styles.path22}>
          <Path
            strokeWidth={0}
            fill="rgba(29,29,38,1)"
            d="M20.00 1.92 C19.26 2.25 18.47 2.47 17.64 2.57 C18.49 2.06 19.14 1.26 19.45 0.30 C18.65 0.77 17.78 1.11 16.84 1.30 C16.09 0.50 15.03 0.00 13.85 0.00 C11.58 0.00 9.74 1.84 9.74 4.10 C9.74 4.42 9.78 4.74 9.85 5.04 C6.44 4.87 3.42 3.23 1.39 0.75 C1.04 1.36 0.84 2.06 0.84 2.81 C0.84 4.24 1.56 5.49 2.66 6.23 C1.99 6.21 1.36 6.02 0.80 5.72 C0.80 5.73 0.80 5.75 0.80 5.77 C0.80 7.76 2.22 9.41 4.10 9.79 C3.75 9.88 3.39 9.93 3.01 9.93 C2.75 9.93 2.49 9.91 2.24 9.86 C2.76 11.49 4.28 12.68 6.08 12.71 C4.67 13.81 2.90 14.47 0.98 14.47 C0.65 14.47 0.32 14.45 0.00 14.41 C1.82 15.57 3.97 16.25 6.29 16.25 C13.84 16.25 17.96 10.00 17.96 4.58 C17.96 4.40 17.96 4.22 17.95 4.05 C18.75 3.47 19.45 2.75 20.00 1.92 Z"
          />
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  path22: {
    width: 20,
    height: 16,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    marginTop: 6,
    marginLeft: 4,
  },
});
