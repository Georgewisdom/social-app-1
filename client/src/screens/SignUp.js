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
import DatePicker from 'react-native-datepicker';
// import DateTimePicker from '@react-native-community/datetimepicker';

export default class SignUp1 extends Component {
  static navigationOptions = {
    header:null
  }
  render() {
    return (
      <ScrollView>
      <View style={styles.root}>
        <View style={styles.backgroundImage1}>
          <ImageBackground
            source={require('../assets/images/signup/3642ce19efbfc07574d1dbc834ef0c7bc505a6de.png')}
            resizeMode="cover"
            style={styles.backgroundImage}>
            <ImageBackground
              style={styles.bgDark}
              source={require('../assets/images/signup/Gradient_YiPX0gn.png')}>
              <Text style={styles.createAnAccount}>Create an account</Text>
              <View style={styles.rectangleCopy3}>
                <TextInput
                  style={styles.username}
                  autoCompleteType="off"
                  placeholder="Username"
                  placeholderTextColor="white"
                />
              </View>
              <View style={styles.rectangleCopy4}>
                <TextInput
                  style={styles.email}
                  autoCompleteType="email"
                  placeholder="Email"
                  placeholderTextColor="white"
                  keyboardType="email-address"
                />
              </View>
              <View style={styles.rectangleCopy8}>
                <TextInput
                  style={styles.phone}
                  autoCompleteType="tel"
                  placeholder="Phone"
                  keyboardType="phone-pad"
                  placeholderTextColor="white"
                />
              </View>
              <View style={styles.rectangleCopy9}>
                <DatePicker
                  style={styles.dateOfBirth}
                  placeholder="Date of birth"
                  placeholderTextColor="white"
                  customStyles={{
                    dateIcon: {
                      display: 'none',
                    },
                    dateInput: {
                      borderColor: 'transparent',
                      fontSize: 17,
                      alignSelf: 'center',
                    },
                  }}
                />

              </View>
              <View style={styles.rectangleCopy10}>
                <TextInput
                  style={styles.password}
                  placeholder="Password"
                  placeholderTextColor="white"
                  dataDetectorTypes="password"
                  secureTextEntry={true}
                />
              </View>
              <TouchableOpacity>
                <View style={styles.buttonLogin}>
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#b52605', '#c98206']}
                    style={styles.rectangle}>
                    <Text style={styles.signUp}>Sign Up</Text>
                  </LinearGradient>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
              <Text 
                style={styles.signin}
                onPress={() => this.props.navigation.navigate('Login')}
              >
                Hava an account? Log in
                </Text>
              </TouchableOpacity>
              
              <Text style={styles.byClickingSignUp}>
                By clicking Sign up you agree to the following Terms and
                Conditions without reservation
              </Text>
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
    backgroundColor: 'white',
  },
  backgroundImage1: {
    width: '100%',
    height: 812,
    backgroundColor: 'transparent',
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
  barsStatusDefaultWhite4: {
    width: 375,
    height: 44,
    backgroundColor: 'transparent',
  },
  iconsArrowLeft4: {
    width: 28,
    height: 28,
    backgroundColor: 'transparent',
    marginTop: 8,
    marginLeft: 15,
  },
  createAnAccount: {
    backgroundColor: 'transparent',
    color: 'rgba(255,255,255,1)',
    fontSize: 34,
    lineHeight: 40,
    letterSpacing: 0.61,
    marginTop: 77,
    alignSelf: 'center',
  },
  rectangleCopy3: {
    width: 315,
    height: 44,
    backgroundColor: '#999999',
    opacity: 0.5,
    borderRadius: 22,
    marginTop: 40,
    alignSelf: 'center',
  },
  username: {
    backgroundColor: 'transparent',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.11,
    marginLeft: 20,
  },
  rectangleCopy4: {
    width: 315,
    height: 44,
    backgroundColor: '#999999',
    opacity: 0.5,
    borderRadius: 22,
    marginTop: 10,
    alignSelf: 'center',
  },
  email: {
    backgroundColor: 'transparent',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.11,
    marginLeft: 20,
  },
  rectangleCopy8: {
    width: 315,
    height: 44,
    backgroundColor: '#999999',
    opacity: 0.5,
    borderRadius: 22,
    marginTop: 10,
    alignSelf: 'center',
  },
  phone: {
    backgroundColor: 'transparent',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.11,
    marginLeft: 20,
  },
  rectangleCopy9: {
    width: 315,
    height: 44,
    backgroundColor: '#999999',
    opacity: 0.5,
    borderRadius: 22,
    marginTop: 10,
    alignSelf: 'center',
  },
  dateOfBirth: {
    backgroundColor: 'transparent',
    fontSize: 25,
    lineHeight: 30,
    letterSpacing: -0.11,
    marginLeft: -5,
  },
  rectangleCopy10: {
    width: 315,
    height: 44,
    backgroundColor: '#999999',
    opacity: 0.5,
    borderRadius: 22,
    marginTop: 10,
    alignSelf: 'center',
  },
  password: {
    backgroundColor: 'transparent',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.11,
    marginLeft: 20,
  },
  rectangle: {
    width: 315,
    height: 44,
    backgroundColor: 'transparent',
    borderRadius: 22,
    marginTop: 40,
    alignSelf: 'center',
  },
  signUp: {
    backgroundColor: 'transparent',
    color: 'rgba(255,255,255,1)',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: -0.36,
    marginTop: 12,
    marginLeft: 129,
  },
  signin: {
    color: 'white',
    fontSize: 17,
    alignSelf: 'center',
    marginTop: 10,
  },
  byClickingSignUp: {
    width: 272,
    height: 36,
    backgroundColor: 'transparent',
    color: 'rgba(78,88,110,1)',
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.08,
    textAlign: 'center',
    marginTop: 100,
    alignSelf: 'center',
  },
  barsHomeIndicatorWhite4: {
    width: 375,
    height: 34,
    backgroundColor: 'transparent',
    marginTop: 17,
  },
});
