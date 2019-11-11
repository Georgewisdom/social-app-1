import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import BarsTabsActive4 from "./BarsTabsActive4";
import BarsTabsInactive7 from "./BarsTabsInactive7";
import Divider0Pt0Pt4 from "./Divider0Pt0Pt4";

export default class BarsTabs5ItemsBlack4 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.background2}>
          <View style={styles.background3}>
            <View style={styles.items}>
              <View style={styles.barsTabsActive4Stack}>
                <BarsTabsActive4 style={styles.barsTabsActive4} />
                <BarsTabsInactive7 style={styles.barsTabsInactive7} />
                <BarsTabsInactive7 style={styles.barsTabsInactive71} />
                <BarsTabsInactive7 style={styles.barsTabsInactive72} />
                <BarsTabsInactive7 style={styles.barsTabsInactive73} />
              </View>
            </View>
            <Divider0Pt0Pt4 style={styles.divider0Pt0Pt4} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  background2: {
    width: 375,
    height: 83,
    transform: [
      {
        scaleY: -1
      }
    ]
  },
  background3: {
    width: 375,
    height: 83,
    backgroundColor: "rgba(32,36,47,1)"
  },
  items: {
    width: 375,
    height: 49
  },
  barsTabsActive4: {
    top: 0,
    left: 0,
    width: 75,
    height: 49,
    backgroundColor: "transparent",
    position: "absolute"
  },
  barsTabsInactive7: {
    top: 0,
    left: 75,
    width: 75,
    height: 49,
    backgroundColor: "transparent",
    position: "absolute"
  },
  barsTabsInactive71: {
    top: 0,
    left: 150,
    width: 75,
    height: 49,
    backgroundColor: "transparent",
    position: "absolute"
  },
  barsTabsInactive72: {
    top: 0,
    left: 225,
    width: 75,
    height: 49,
    backgroundColor: "transparent",
    position: "absolute"
  },
  barsTabsInactive73: {
    top: 0,
    left: 300,
    width: 75,
    height: 49,
    backgroundColor: "transparent",
    position: "absolute"
  },
  barsTabsActive4Stack: {
    width: 375,
    height: 49
  },
  divider0Pt0Pt4: {
    backgroundColor: "transparent",
    flex: 1,
    marginTop: 33
  }
});
