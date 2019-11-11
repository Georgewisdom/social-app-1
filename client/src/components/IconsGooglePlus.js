import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export default class IconsGooglePlus extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Svg
          viewBox="-0 -0 19.99999999999999 14.16666666666667"
          style={styles.path23}>
          <Path
            strokeWidth={0}
            fill="rgba(29,29,38,1)"
            d="M7.08 14.17 C3.17 14.17 0.00 11.00 0.00 7.08 C0.00 3.17 3.17 0.00 7.08 0.00 C9.00 0.00 11.83 1.85 11.83 1.85 L9.91 3.70 C9.91 3.70 8.46 2.61 7.08 2.61 C4.66 2.61 2.69 4.61 2.69 7.08 C2.69 9.55 4.66 11.56 7.08 11.56 C9.83 11.56 11.08 8.57 11.08 8.57 L7.50 8.57 L7.50 6.07 L13.77 6.07 C13.77 6.07 11.96 14.17 7.08 14.17 Z M20.00 7.73 L18.33 7.73 L18.33 9.40 L16.67 9.40 L16.67 7.73 L15.00 7.73 L15.00 6.07 L16.67 6.07 L16.67 4.40 L18.33 4.40 L18.33 6.07 L20.00 6.07 Z"
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
  path23: {
    width: 20,
    height: 14,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    marginTop: 7,
    marginLeft: 4,
  },
});
