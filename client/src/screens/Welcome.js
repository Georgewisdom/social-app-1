import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useHistory, Link} from 'react-router-native';
const Welcome = () => {
  return (
    <View style={styles.root}>
      <View style={styles.backgroundImage1}>
        <ImageBackground
          source={require('../assets/images/girl.png')}
          resizeMode="cover"
          style={styles.backgroundImage}>
          <ImageBackground
            style={styles.bgCopy}
            source={require('../assets/images/Gradient.png')}>
            <Text style={styles.findNewFriendsNea}>
              Connect With Businesses both
            </Text>
            <Text style={styles.withMilionsOfUser}>
              International & National
            </Text>
            <TouchableOpacity>
              <Link to="/login">
                <View style={styles.buttonLoginCopy}>
                  <View style={styles.rectangle1}>
                    <Text style={styles.logIn}>Log In</Text>
                  </View>
                </View>
              </Link>
            </TouchableOpacity>
            <TouchableOpacity>
              <Link to="/register">
                <View style={styles.buttonLogin}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#b52605', '#c98206']}
                    style={styles.rectangle}>
                    <Text style={styles.signUp}>Sign Up</Text>
                  </LinearGradient>
                </View>
              </Link>
            </TouchableOpacity>
            <TouchableOpacity>
              <Link to="/posts">
                <View style={styles.continue}>
                  <Text style={styles.tcont}>Continue without an account</Text>
                </View>
              </Link>
            </TouchableOpacity>
          </ImageBackground>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  backgroundImage1: {
    width: 420,
    height: 700,
    backgroundColor: 'transparent',
    borderColor: 'rgba(151,151,151,1)',
    borderWidth: 1,
    position: 'relative',
    alignSelf: 'center',
  },
  backgroundImage: {
    width: 420,
    height: 700,
    backgroundColor: 'transparent',
    borderColor: 'rgba(151,151,151,1)',
    alignSelf: 'center',
    borderWidth: 1,
  },
  bgCopy: {
    width: 420,
    height: 700,
    backgroundColor: 'transparent',
    borderColor: 'rgba(151,151,151,1)',
    borderWidth: 1,
    alignContent: 'center',
  },
  findNewFriendsNea: {
    width: 312,
    height: 100,
    backgroundColor: 'transparent',
    color: 'rgba(255,255,255,1)',
    fontSize: 44,
    lineHeight: 50,
    letterSpacing: -0.7,
    marginTop: 291,
    alignSelf: 'center',
  },
  continue: {
    width: 302,
    height: 40,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 10,
    borderColor: 'white',
    height: 50,
    borderWidth: 2,
  },
  tcont: {
    backgroundColor: 'transparent',
    color: 'rgba(255,255,255,1)',
    fontSize: 15,
    letterSpacing: -0.36,
    marginTop: 11,
    alignSelf: 'center',
  },
  withMilionsOfUser: {
    width: 302,
    backgroundColor: 'transparent',
    color: 'rgba(255,255,255,1)',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    marginTop: 9,
    alignSelf: 'center',
  },
  buttonLoginCopy: {
    width: 302,
    height: 40,
    marginTop: 33,
    alignSelf: 'center',
  },
  rectangle1: {
    width: 302,
    height: 40,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 22,
  },
  logIn: {
    backgroundColor: 'transparent',
    color: 'rgba(255,45,85,1)',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
    marginTop: 11,
    marginLeft: 131,
  },
  buttonLogin: {
    width: 302,
    height: 40,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 10,
  },
  rectangle: {
    width: 302,
    height: 40,
    borderRadius: 22,
  },
  signUp: {
    backgroundColor: 'transparent',
    color: 'rgba(255,255,255,1)',
    fontSize: 15,
    letterSpacing: -0.36,
    marginTop: 11,
    alignSelf: 'center',
  },
  orLogInWith: {
    backgroundColor: 'transparent',
    color: 'rgba(78,88,110,1)',
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.08,
    marginTop: 43,
    alignSelf: 'center',
  },
  iconsFacebook: {
    width: 27,
    height: 26,
    backgroundColor: 'transparent',
  },
  iconsTwitter: {
    width: 27,
    height: 26,
    backgroundColor: 'transparent',
    marginLeft: 12,
  },
  iconsGooglePlus: {
    width: 27,
    height: 26,
    backgroundColor: 'transparent',
    marginLeft: 12,
  },
  iconsFacebookRow: {
    height: 26,
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 128,
    marginRight: 127,
  },
  barsHomeIndicatorWhite: {
    width: 360,
    height: 31,
    backgroundColor: 'transparent',
    alignSelf: 'center',
    marginTop: 18,
  },
});
