import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";

export default class KeyboardsDefault4 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <View style={styles.keyboardUppercaseFiller} />
        <View style={styles.keyboardUppercase}>
          <View style={styles.fillsGray1}>
            <View style={styles.background1}>
              <View style={styles.topRowColumn}>
                <View style={styles.topRow}>
                  <View style={styles.qRow}>
                    <View style={styles.q}>
                      <View style={styles.key30}>
                        <Text style={styles.q1}>Q</Text>
                      </View>
                    </View>
                    <View style={styles.w}>
                      <View style={styles.key29}>
                        <Text style={styles.w1}>W</Text>
                      </View>
                    </View>
                    <View style={styles.e}>
                      <View style={styles.key28}>
                        <Text style={styles.e1}>E</Text>
                      </View>
                    </View>
                    <View style={styles.r}>
                      <View style={styles.key27}>
                        <Text style={styles.r1}>R</Text>
                      </View>
                    </View>
                    <View style={styles.t}>
                      <View style={styles.key26}>
                        <Text style={styles.t1}>T</Text>
                      </View>
                    </View>
                    <View style={styles.y}>
                      <View style={styles.key25}>
                        <Text style={styles.y1}>Y</Text>
                      </View>
                    </View>
                    <View style={styles.u}>
                      <View style={styles.key24}>
                        <Text style={styles.u1}>U</Text>
                      </View>
                    </View>
                    <View style={styles.i}>
                      <View style={styles.key23}>
                        <Text style={styles.i1}>I</Text>
                      </View>
                    </View>
                    <View style={styles.o}>
                      <View style={styles.key22}>
                        <Text style={styles.o1}>O</Text>
                      </View>
                    </View>
                    <View style={styles.p}>
                      <View style={styles.key21}>
                        <Text style={styles.p1}>P</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.secondRow}>
                  <View style={styles.aRow}>
                    <View style={styles.a}>
                      <View style={styles.key20}>
                        <Text style={styles.a1}>A</Text>
                      </View>
                    </View>
                    <View style={styles.s}>
                      <View style={styles.key19}>
                        <Text style={styles.s1}>S</Text>
                      </View>
                    </View>
                    <View style={styles.d}>
                      <View style={styles.key18}>
                        <Text style={styles.d1}>D</Text>
                      </View>
                    </View>
                    <View style={styles.f}>
                      <View style={styles.key17}>
                        <Text style={styles.f1}>F</Text>
                      </View>
                    </View>
                    <View style={styles.g}>
                      <View style={styles.key16}>
                        <Text style={styles.g1}>G</Text>
                      </View>
                    </View>
                    <View style={styles.h}>
                      <View style={styles.key15}>
                        <Text style={styles.h1}>H</Text>
                      </View>
                    </View>
                    <View style={styles.j}>
                      <View style={styles.key14}>
                        <Text style={styles.j1}>J</Text>
                      </View>
                    </View>
                    <View style={styles.k}>
                      <View style={styles.key13}>
                        <Text style={styles.k1}>K</Text>
                      </View>
                    </View>
                    <View style={styles.l}>
                      <View style={styles.key12}>
                        <Text style={styles.l1}>L</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.thirdRow}>
                  <View style={styles.shiftRow}>
                    <View style={styles.shift}>
                      <View style={styles.key11}>
                        <Svg
                          viewBox="-0 -0 19.06945528987994 16.08744421251977"
                          style={styles.shift1}
                        >
                          <Path
                            strokeWidth={0}
                            fill="rgba(0,0,0,1)"
                            d="M8.83 0.29 L-0.26 9.38 C-0.61 9.73 0.03 10.09 1.03 10.09 L3.03 10.09 C4.03 10.09 5.03 10.09 5.03 10.09 L5.03 16.09 L13.03 16.09 C13.53 16.09 14.03 15.59 14.03 15.09 L14.03 11.09 C14.03 10.59 14.03 10.09 14.03 10.09 L20.03 10.09 L10.95 1.00 C10.24 0.29 9.18 -0.06 8.83 0.29 Z"
                          />
                        </Svg>
                      </View>
                    </View>
                    <View style={styles.z}>
                      <View style={styles.key10}>
                        <Text style={styles.z1}>Z</Text>
                      </View>
                    </View>
                    <View style={styles.x}>
                      <View style={styles.key9}>
                        <Text style={styles.x1}>X</Text>
                      </View>
                    </View>
                    <View style={styles.c}>
                      <View style={styles.key8}>
                        <Text style={styles.c1}>C</Text>
                      </View>
                    </View>
                    <View style={styles.v}>
                      <View style={styles.key7}>
                        <Text style={styles.v1}>V</Text>
                      </View>
                    </View>
                    <View style={styles.b}>
                      <View style={styles.key6}>
                        <Text style={styles.b1}>B</Text>
                      </View>
                    </View>
                    <View style={styles.n}>
                      <View style={styles.key5}>
                        <Text style={styles.n1}>N</Text>
                      </View>
                    </View>
                    <View style={styles.m}>
                      <View style={styles.key4}>
                        <Text style={styles.m1}>M</Text>
                      </View>
                    </View>
                    <View style={styles.delete}>
                      <View style={styles.key3}>
                        <Svg
                          viewBox="-0 -0 22.87680488361308 17"
                          style={styles.path6}
                        >
                          <Path
                            strokeWidth={0}
                            fill="rgba(0,0,0,1)"
                            d="M6.82 1.06 C6.82 1.06 7.88 0.00 8.88 0.00 C8.88 0.00 21.88 0.00 21.88 0.00 C21.88 0.00 22.88 0.00 22.88 3.50 C22.88 3.50 22.88 13.50 22.88 13.50 C22.88 13.50 22.88 17.00 19.38 17.00 C19.38 17.00 11.38 17.00 11.38 17.00 C11.38 17.00 7.88 17.00 7.17 16.29 C7.17 16.29 0.08 9.21 0.08 9.21 C0.08 9.21 -0.62 8.50 0.44 7.44 C0.44 7.44 6.82 1.06 6.82 1.06 Z M2.08 7.79 C1.38 8.50 1.73 8.85 1.73 8.85 C1.73 8.85 8.02 15.15 8.02 15.15 C8.38 15.50 10.38 15.50 10.38 15.50 C10.38 15.50 19.38 15.50 19.38 15.50 C21.38 15.50 21.38 13.50 21.38 13.50 C21.38 13.50 21.38 3.50 21.38 3.50 C21.38 1.50 20.88 1.50 20.88 1.50 C20.88 1.50 8.88 1.50 8.88 1.50 C8.38 1.50 7.67 2.21 7.67 2.21 C7.67 2.21 2.08 7.79 2.08 7.79 Z"
                          />
                        </Svg>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.topRowColumnFiller} />
              <View style={styles.bottomRowColumn}>
                <View style={styles.bottomRow}>
                  <View style={styles.style20Row}>
                    <View style={styles.style20}>
                      <View style={styles.key2}>
                        <Text style={styles.style21}>123</Text>
                      </View>
                    </View>
                    <View style={styles.space}>
                      <View style={styles.key1}>
                        <Text style={styles.space1}>space</Text>
                      </View>
                    </View>
                    <View style={styles.label}>
                      <View style={styles.key}>
                        <Text style={styles.label1}>Label</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.path4Row}>
                  <Svg viewBox="-0 -0 27 27" style={styles.path4}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(80,85,92,1)"
                      d="M13.50 0.00 C20.96 0.00 27.00 6.04 27.00 13.50 C27.00 20.96 20.96 27.00 13.50 27.00 C6.04 27.00 0.00 20.96 0.00 13.50 C0.00 6.04 6.04 0.00 13.50 0.00 Z M13.50 1.57 C13.50 1.57 7.30 2.83 5.07 5.07 C2.83 7.30 1.57 10.34 1.57 13.50 C1.57 20.09 6.91 25.43 13.50 25.43 C20.09 25.43 25.43 20.09 25.43 13.50 C25.43 6.91 13.50 1.57 13.50 1.57 Z M9.23 7.64 C9.23 7.64 10.05 7.80 10.34 8.10 C10.64 8.39 10.81 8.79 10.81 9.21 C10.81 10.08 10.10 10.78 9.23 10.78 C8.36 10.78 7.65 10.08 7.65 9.21 C7.65 8.79 7.82 8.39 8.11 8.10 C8.41 7.80 9.23 7.64 9.23 7.64 Z M17.78 7.64 C17.78 7.64 18.60 7.80 18.89 8.10 C19.19 8.39 19.36 8.79 19.36 9.21 C19.37 9.78 19.07 10.31 18.57 10.59 C18.08 10.88 17.48 10.88 16.98 10.59 C16.49 10.31 16.19 9.78 16.20 9.21 C16.20 8.79 16.37 8.39 16.66 8.10 C16.96 7.80 17.78 7.64 17.78 7.64 Z M13.50 22.95 C9.00 22.95 5.28 19.76 4.52 15.92 C4.36 14.96 5.15 14.73 5.89 14.91 C8.36 15.63 10.93 15.97 13.50 15.94 C16.07 15.97 18.63 15.63 21.10 14.91 C21.82 14.73 22.50 15.83 22.50 15.83 C22.50 15.83 18.03 22.95 13.50 22.95 Z M20.06 16.37 C20.06 16.37 20.06 16.37 20.07 16.37 C20.07 16.37 20.06 16.37 20.06 16.37 Z M13.51 17.21 C10.87 17.21 8.51 16.92 6.88 16.34 C5.70 15.98 5.93 17.37 6.76 17.80 C8.88 18.76 11.18 19.25 13.51 19.22 C16.28 19.22 18.75 18.58 20.38 17.74 C21.13 17.26 20.12 16.41 20.06 16.37 C20.06 16.37 20.06 16.37 20.06 16.37 C20.06 16.37 20.06 16.37 20.06 16.37 C20.06 16.37 20.06 16.37 20.06 16.37 C20.06 16.37 20.04 16.37 20.01 16.38 C17.89 16.96 15.71 17.24 13.51 17.21 Z"
                    />
                  </Svg>
                  <View style={styles.path4Filler} />
                  <Svg viewBox="-0 -0 15 25" style={styles.path5}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(80,85,92,1)"
                      d="M11.47 25.00 L11.47 25.00 L3.53 25.00 L3.53 25.00 C3.53 25.00 3.51 25.00 3.50 25.00 C3.04 25.00 2.67 24.63 2.67 24.17 C2.67 23.71 3.04 23.33 3.50 23.33 C3.51 23.33 3.53 23.33 3.53 23.33 L3.53 23.32 L6.68 23.32 L6.68 20.79 C6.68 20.79 -0.00 17.12 0.00 13.28 C0.00 13.25 0.01 13.18 0.01 13.18 L0.01 11.27 C0.01 11.27 0.00 11.20 0.00 11.17 C0.00 10.70 0.37 10.33 0.83 10.33 C1.29 10.33 1.67 10.70 1.67 11.17 C1.67 11.19 1.66 11.25 1.66 11.25 L1.66 13.54 L1.66 13.54 L1.66 13.55 L1.66 13.64 L1.66 13.95 L1.68 13.95 C1.68 13.95 3.76 15.94 3.76 15.94 C3.53 15.58 3.35 15.18 3.23 14.76 C3.12 14.32 3.05 13.87 3.03 13.42 C3.00 12.91 3.00 11.88 3.00 11.88 L3.00 7.66 C3.00 7.66 3.00 4.95 3.00 4.58 C3.01 4.12 3.09 3.67 3.23 3.24 C3.77 1.32 5.51 0.00 7.50 0.00 C9.48 0.00 11.23 1.32 11.76 3.24 C11.89 3.68 11.96 4.13 11.99 4.58 C12.02 5.08 11.99 7.66 11.99 7.66 L11.99 11.88 L11.99 11.88 C11.99 11.88 11.99 12.91 11.97 13.42 C11.95 13.87 11.88 14.32 11.76 14.76 C11.64 15.17 11.47 15.57 11.24 15.92 C11.24 15.92 13.31 13.95 13.31 13.95 L13.33 13.95 L13.33 11.18 L13.33 11.18 C13.33 11.18 13.33 11.17 13.33 11.17 C13.33 10.70 13.71 10.33 14.17 10.33 C14.63 10.33 15.00 10.70 15.00 11.17 C15.00 11.19 15.00 11.24 15.00 11.24 L15.00 13.28 L14.99 13.28 L8.33 20.79 L8.33 23.32 L11.47 23.32 L11.47 23.33 C11.47 23.33 11.49 23.33 11.50 23.33 C11.96 23.33 12.33 23.71 12.33 24.17 C12.33 24.63 11.96 25.00 11.50 25.00 C11.49 25.00 11.47 25.00 11.47 25.00 Z M7.32 19.33 L7.66 19.33 C7.66 19.33 9.68 17.40 9.68 17.40 C8.33 18.20 6.64 18.19 5.29 17.39 C5.29 17.39 7.32 19.33 7.32 19.33 Z M10.33 12.67 C10.33 8.22 10.35 4.97 10.33 4.59 C10.31 4.30 10.25 4.01 10.17 3.73 C10.01 3.14 9.66 2.62 9.18 2.24 C8.19 1.48 6.81 1.48 5.82 2.24 C5.33 2.62 4.98 3.14 4.82 3.73 C4.75 4.01 4.70 4.30 4.68 4.59 C4.65 4.94 4.67 8.23 4.67 12.67 C4.67 12.99 4.68 13.09 4.69 13.41 C4.71 13.70 4.75 13.99 4.82 14.27 C4.98 14.86 5.33 15.39 5.82 15.76 C6.81 16.53 8.19 16.53 9.18 15.76 C9.66 15.38 10.01 14.86 10.17 14.27 C10.24 13.99 10.29 13.70 10.30 13.41 C10.32 13.09 10.33 12.99 10.33 12.67 Z"
                    />
                  </Svg>
                </View>
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
    backgroundColor: "transparent"
  },
  keyboardUppercaseFiller: {
    flex: 1
  },
  keyboardUppercase: {
    height: 291
  },
  fillsGray1: {
    width: 375,
    height: 291,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  background1: {
    width: 375,
    height: 291,
    backgroundColor: "rgba(210,213,219,0.9399999976158142)"
  },
  topRow: {
    width: 369,
    height: 42,
    flexDirection: "row"
  },
  q: {
    width: 32,
    height: 42
  },
  key30: {
    width: 31,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  q1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 7
  },
  w: {
    width: 32,
    height: 42,
    marginLeft: 5
  },
  key29: {
    width: 31,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 1
  },
  w1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 4
  },
  e: {
    width: 32,
    height: 42,
    marginLeft: 6
  },
  key28: {
    width: 31,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  e1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 9
  },
  r: {
    width: 32,
    height: 42,
    marginLeft: 5
  },
  key27: {
    width: 31,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 1
  },
  r1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 8
  },
  t: {
    width: 32,
    height: 42,
    marginLeft: 6
  },
  key26: {
    width: 31,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  t1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 9
  },
  y: {
    width: 32,
    height: 42,
    marginLeft: 5
  },
  key25: {
    width: 31,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 1
  },
  y1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 8
  },
  u: {
    width: 32,
    height: 42,
    marginLeft: 6
  },
  key24: {
    width: 31,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  u1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 7
  },
  i: {
    width: 32,
    height: 42,
    marginLeft: 5
  },
  key23: {
    width: 31,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 1
  },
  i1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 12
  },
  o: {
    width: 32,
    height: 42,
    marginLeft: 6
  },
  key22: {
    width: 31,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  o1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 7
  },
  p: {
    width: 32,
    height: 42,
    marginLeft: 5
  },
  key21: {
    width: 31,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 1
  },
  p1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 8
  },
  qRow: {
    height: 42,
    flexDirection: "row",
    flex: 1
  },
  secondRow: {
    width: 333,
    height: 42,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 18
  },
  a: {
    width: 32,
    height: 42
  },
  key20: {
    width: 32,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 1
  },
  a1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 8
  },
  s: {
    width: 32,
    height: 42,
    marginLeft: 6
  },
  key19: {
    width: 32,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  s1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 9
  },
  d: {
    width: 32,
    height: 42,
    marginLeft: 5
  },
  key18: {
    width: 32,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 1
  },
  d1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 7
  },
  f: {
    width: 32,
    height: 42,
    marginLeft: 6
  },
  key17: {
    width: 32,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  f1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 9
  },
  g: {
    width: 32,
    height: 42,
    marginLeft: 6
  },
  key16: {
    width: 32,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  g1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 8
  },
  h: {
    width: 32,
    height: 42,
    marginLeft: 5
  },
  key15: {
    width: 32,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 1
  },
  h1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 7
  },
  j: {
    width: 32,
    height: 42,
    marginLeft: 6
  },
  key14: {
    width: 32,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  j1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 9
  },
  k: {
    width: 32,
    height: 42,
    marginLeft: 5
  },
  key13: {
    width: 32,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 1
  },
  k1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 8
  },
  l: {
    width: 32,
    height: 42,
    marginLeft: 6
  },
  key12: {
    width: 32,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  l1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 9
  },
  aRow: {
    height: 42,
    flexDirection: "row",
    flex: 1
  },
  thirdRow: {
    width: 369,
    height: 42,
    flexDirection: "row",
    marginTop: 12
  },
  shift: {
    width: 42,
    height: 42
  },
  key11: {
    width: 42,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  shift1: {
    width: 19,
    height: 16,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 13,
    marginLeft: 11
  },
  z: {
    width: 32,
    height: 42,
    marginLeft: 14
  },
  key10: {
    width: 31,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  z1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 8
  },
  x: {
    width: 32,
    height: 42,
    marginLeft: 5
  },
  key9: {
    width: 31,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 1
  },
  x1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 8
  },
  c: {
    width: 32,
    height: 42,
    marginLeft: 6
  },
  key8: {
    width: 31,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  c1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 8
  },
  v: {
    width: 32,
    height: 42,
    marginLeft: 6
  },
  key7: {
    width: 31,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  v1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 8
  },
  b: {
    width: 32,
    height: 42,
    marginLeft: 5
  },
  key6: {
    width: 31,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 1
  },
  b1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 9
  },
  n: {
    width: 32,
    height: 42,
    marginLeft: 6
  },
  key5: {
    width: 31,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  n1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 7
  },
  m: {
    width: 32,
    height: 42,
    marginLeft: 5
  },
  key4: {
    width: 31,
    height: 42,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 1
  },
  m1: {
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 23,
    marginTop: 7,
    marginLeft: 5
  },
  delete: {
    width: 42,
    height: 42,
    marginLeft: 14
  },
  key3: {
    width: 42,
    height: 42,
    backgroundColor: "rgba(255,255,255,0.1299999952316284)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(0,0,0,0.35)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  path6: {
    width: 23,
    height: 17,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: 13,
    marginLeft: 10
  },
  shiftRow: {
    height: 42,
    flexDirection: "row",
    flex: 1
  },
  topRowColumn: {
    width: 369,
    marginTop: 10,
    marginLeft: 3
  },
  topRowColumnFiller: {
    flex: 1
  },
  bottomRow: {
    height: 42,
    flexDirection: "row",
    marginBottom: 24
  },
  style20: {
    width: 86,
    height: 42
  },
  key2: {
    width: 86,
    height: 42,
    backgroundColor: "rgba(4,4,15,0.2)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(4,4,15,0.36)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  style21: {
    width: 27,
    height: 19,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    letterSpacing: -0.32,
    textAlign: "center",
    marginTop: 12,
    marginLeft: 29
  },
  space: {
    width: 183,
    height: 42,
    marginLeft: 7
  },
  key1: {
    width: 183,
    height: 42,
    backgroundColor: "rgba(254,254,254,1)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(4,4,15,0.36)",
    shadowOpacity: 1,
    shadowRadius: 0
  },
  space1: {
    width: 44,
    height: 19,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    letterSpacing: -0.32,
    textAlign: "center",
    marginTop: 11,
    marginLeft: 70
  },
  label: {
    width: 88,
    height: 42,
    marginLeft: 6
  },
  key: {
    width: 88,
    height: 42,
    backgroundColor: "rgba(4,4,15,0.2)",
    borderRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "rgba(4,4,15,0.36)",
    shadowOpacity: 1,
    shadowRadius: 0,
    marginLeft: 1
  },
  label1: {
    width: 40,
    height: 19,
    backgroundColor: "transparent",
    color: "rgba(0,0,0,1)",
    fontSize: 16,
    letterSpacing: -0.32,
    textAlign: "center",
    marginTop: 11,
    marginLeft: 23
  },
  style20Row: {
    height: 42,
    flexDirection: "row",
    flex: 1
  },
  path4: {
    width: 27,
    height: 27,
    backgroundColor: "transparent",
    borderColor: "transparent",
    alignSelf: "flex-end"
  },
  path4Filler: {
    flex: 1,
    flexDirection: "row"
  },
  path5: {
    width: 15,
    height: 25,
    backgroundColor: "transparent",
    borderColor: "transparent",
    alignSelf: "flex-end",
    marginBottom: 1
  },
  path4Row: {
    height: 27,
    flexDirection: "row",
    marginLeft: 23,
    marginRight: 27
  },
  bottomRowColumn: {
    marginBottom: 27,
    marginLeft: 2,
    marginRight: 3
  }
});
