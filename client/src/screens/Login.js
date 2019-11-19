import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  Button,
  ActivityIndicator,
} from 'react-native';
// redux
import PropTypes from 'prop-types';
import {login} from '../actions/auth';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-native';
// other imports
import Alerts from '../components/alerts/Alerts';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    // this.onSubmit = this.onSubmit.bind(this);
    // this.onChangeValue = this.onChangeValue.bind(this);
  }

  render() {
    if (this.props.auth.isAuthenticated) {
      return <Redirect to="/posts" />;
    }

    const {email, password} = this.state;

    const loadingCheck = () => {
      return (
        this.props.auth.isAuthenticated === null && (
          <View>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )
      );
    };

    return (
      <ScrollView>
        <View style={styles.root}>
          <View style={styles.backgroundImage1}>
            <ImageBackground
              source={require('../assets/images/login/05ae5253be9dcef4ed539b74afbf7705b273a418.png')}
              resizeMode="cover"
              style={styles.backgroundImage}>
              <ImageBackground
                style={styles.bgDark}
                source={require('../assets/images/login/Gradient_Q6biS3Y.png')}>
                <View>
                  <Alerts style={styles.alertStyle} />
                </View>
                <Text style={styles.welcomeBack}>Welcome back</Text>
                <Text style={styles.loginToYourAccoun}>
                  Login to your account
                </Text>

                <View style={styles.rectangleCopy}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    placeholderTextColor="white"
                    onChangeText={email => this.setState({email})}
                  />
                </View>
                <View style={styles.rectangleCopy2}>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    placeholderTextColor="white"
                    onChangeText={password => this.setState({password})}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.props.login({email, password});
                  }}>
                  <View style={styles.buttonLogin}>
                    <LinearGradient
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      colors={['#b52605', '#c98206']}
                      style={styles.rectangle}>
                      <Text style={styles.text}>Login</Text>
                    </LinearGradient>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={styles.buttonHome}>
                    <LinearGradient
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      colors={['#b52605', '#c98206']}
                      style={styles.rectangle}>
                      <Link to="/">
                        <Text style={styles.text}>Go To Home</Text>
                      </Link>
                    </LinearGradient>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Link to="/forget">
                    <Text style={styles.forgotYourPassword}>
                      Forgot your password?
                    </Text>
                  </Link>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Link to="/forget">
                    <Text style={styles.forgotYourPassword}>Sign Up Here</Text>
                  </Link>
                </TouchableOpacity>
              </ImageBackground>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {login})(Login);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,1)',
  },
  backgroundImage1: {
    width: '100%',
    height: 'auto',
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
    alignSelf: 'center',
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
  welcomeBack: {
    backgroundColor: 'transparent',
    color: 'rgba(255,255,255,1)',
    fontSize: 34,
    lineHeight: 40,
    letterSpacing: 0.61,
    marginTop: 110,
    alignSelf: 'center',
  },
  loginToYourAccoun: {
    backgroundColor: 'transparent',
    color: 'rgba(255,255,255,1)',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    marginTop: 10,
    alignSelf: 'center',
  },
  register: {
    color: 'orange',
    backgroundColor: 'transparent',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    marginTop: 10,
    alignSelf: 'center',
  },
  buttonHome: {
    color: 'white',
    fontSize: 17,
    alignSelf: 'center',
    marginTop: 10,
  },
  rectangleCopy: {
    width: 315,
    height: 44,
    backgroundColor: 'grey',
    opacity: 0.5,
    borderRadius: 22,
    marginTop: 57,
    alignSelf: 'center',
  },
  textInput: {
    marginLeft: 20,
    color: 'white',
    fontSize: 17,
  },
  // email: {
  //   backgroundColor: 'transparent',
  //   color: 'rgba(255,255,255,1)',
  //   fontSize: 17,
  //   lineHeight: 22,
  //   letterSpacing: -0.41,
  //   marginTop: 11,
  //   marginLeft: 20,
  // },
  rectangleCopy2: {
    width: 315,
    height: 44,
    backgroundColor: 'grey',
    opacity: 0.5,
    borderRadius: 22,
    marginTop: 10,
    alignSelf: 'center',
  },
  password: {
    backgroundColor: 'transparent',
    color: 'rgba(255,255,255,1)',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    marginTop: 12,
    marginLeft: 20,
  },
  buttonLogin: {
    width: 315,
    height: 44,
    marginTop: 40,
    alignSelf: 'center',
  },
  rectangle: {
    width: 315,
    height: 44,
    backgroundColor: 'transparent',
    borderRadius: 22,
  },
  text: {
    backgroundColor: 'transparent',
    color: 'rgba(255,255,255,1)',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: -0.4,
    marginTop: 12,
    alignSelf: 'center',
  },
  forgotYourPassword: {
    backgroundColor: 'transparent',
    color: 'rgba(255,255,255,1)',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.41,
    marginTop: 20,
    alignSelf: 'center',
  },
  keyboardsDefault4: {
    top: 0,
    left: 0,
    width: 375,
    height: 291,
    backgroundColor: 'transparent',
    position: 'absolute',
  },
  barsHomeIndicatorBlack4: {
    top: 257,
    left: 0,
    width: 375,
    height: 34,
    backgroundColor: 'transparent',
    position: 'absolute',
  },
  keyboardsDefault4Stack: {
    width: 375,
    height: 291,
    marginTop: 26,
  },
  alertStyle: {
    color: 'white',
  },
});
