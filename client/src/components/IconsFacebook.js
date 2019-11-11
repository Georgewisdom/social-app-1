import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export default class IconsFacebook extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg viewBox="-0 -0 9.999999999999998 20" style={styles.path21}>
          <Path
            strokeWidth={0}
            fill="rgba(29,29,38,1)"
            d="M6.67 6.67 L6.67 4.68 C6.67 3.79 6.86 3.33 8.26 3.33 L10.00 3.33 L10.00 0.00 L7.09 0.00 C3.52 0.00 2.34 1.64 2.34 4.44 L2.34 6.67 L0.00 6.67 L0.00 10.00 L2.34 10.00 L2.34 20.00 L6.67 20.00 L6.67 10.00 L9.60 10.00 L10.00 6.67 Z"
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
  path21: {
    width: 10,
    height: 20,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    marginTop: 4,
    marginLeft: 9,
  },
});
