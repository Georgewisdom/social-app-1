import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class ForgotPassword extends Component {
  static navigationOptions = {
    header:null
  }
  render() {
    return (
      <ScrollView>
      <View style={styles.root}>
        <View style={styles.backgroundImage1}>
          <ImageBackground
            source={require('../assets/images/forgot/2c329a00dbb7be1a54b4736a98085241238b4126.png')}
            resizeMode="cover"
            style={styles.backgroundImage}>
            <ImageBackground
              style={styles.bgDark}
              source={require('../assets/images/forgot/Gradient_IoglENv.png')}>
              <Text style={styles.text}>Forgot password</Text>
              <Text style={styles.pleaseEnterYourEm}>
                Please enter your email address. You will receive a link to
                create a new password via email.
              </Text>
              <View style={styles.rectangleCopy2}>
                <TextInput
                  style={styles.yourEmail}
                  placeholder="Your Email"
                  placeholderTextColor="white"
                />
              </View>
              <TouchableOpacity>
                <View style={styles.buttonLogin}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#b52605', '#c98206']}
                    style={styles.rectangle}>
                    <Text style={styles.send}>Send</Text>
                  </LinearGradient>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Welcome')}
              >
                <View style={styles.continue}>
                  <Text style={styles.tcont}>Go Back</Text>
                </View>
              </TouchableOpacity>
            </ImageBackground>
          </ImageBackground>
        </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundImage1: {
    width: '100%',
    height: 812,
    backgroundColor: 'transparent',
    marginLeft: -1,
  },
  backgroundImage: {
    width: '100%',
    height: 812,
    backgroundColor: 'transparent',
  },
  bgDark: {
    width: '100%',
    height: 812,
    backgroundColor: 'transparent',
  },
  text: {
    backgroundColor: 'transparent',
    color: 'rgba(255,255,255,1)',
    fontSize: 34,
    lineHeight: 40,
    letterSpacing: 0.61,
    marginTop: 300,
    alignSelf: 'center',
  },
  pleaseEnterYourEm: {
    width: 301,
    height: 66,
    backgroundColor: 'transparent',
    color: 'rgba(255,255,255,1)',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    marginTop: 15,
    alignSelf: 'center',
  },
  rectangleCopy2: {
    width: 315,
    height: 44,
    backgroundColor: 'rgba(142,142,147,0.2)',
    borderRadius: 22,
    marginTop: 40,
    alignSelf: 'center',
  },
  yourEmail: {
    backgroundColor: 'transparent',
    color: 'rgba(255,255,255,1)',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    marginTop: 0,
    alignSelf: 'center',
  },
  rectangle: {
    width: 315,
    height: 44,
    backgroundColor: 'transparent',
    borderRadius: 22,
    marginTop: 10,
    alignSelf: 'center',
  },
  send: {
    backgroundColor: 'transparent',
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: -0.36,
    marginTop: 10,
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
  tcont:{
    backgroundColor: 'transparent',
    color: 'rgba(255,255,255,1)',
    fontSize: 15,
    letterSpacing: -0.36,
    marginTop: 11,
    alignSelf: 'center',
  },
});
