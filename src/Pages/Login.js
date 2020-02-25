import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
}
  from 'react-native-responsive-screen';
import FitImage from 'react-native-fit-image';
import {
  Item,
  Input,
  Card,
  CardItem,
  Body
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import AwesomeAlert from 'react-native-awesome-alerts';
import { connect } from 'react-redux'
import { login } from '../redux/action/login'
import { withNavigation } from 'react-navigation';



class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      modal: false,
      isLoading: false,
      isSuccess: false,
      isError: false,
      isDown: false
    }
  }

  async componentDidMount() {
    await this.setState({ isLoading: true })
    if (this.props.login.token) {
      await this.setState({ isLoading: false })
      await this.props.navigation.navigate('App')
    } else {
      this.setState({ isLoading: false })
      return
    }
  }

  showSuccess = () => {
    this.setState({
      isSuccess: true
    });
  };

  hideSuccess = async () => {
    await this.setState({
      isSuccess: false
    });
    await this.props.navigation.navigate('App')
  };

  showError = () => {
    this.setState({
      isError: true
    });
  };

  hideError = () => {
    this.setState({
      isError: false
    });
  };

  showDown = () => {
    this.setState({
      isDown: true
    });
  };

  hideDown = () => {
    this.setState({
      isDown: false
    });
  };


  postData = async () => {
    this.setState({ isLoading: true })
    try {
      await this.props.dispatch(login({
        username: this.state.username,
        password: this.state.password
      }))
      this.cekAuth()
    } catch (error) {
      this.setState({ isLoading: false })
      this.setState({ isDown: true })
    }
  }

  cekAuth = () => {
    if (this.props.login.isSuccess) {
      this.setState({ isLoading: false })
      this.setState({ isSuccess: true })
      this.removeStates()
    } else {
      this.setState({ isLoading: false })
      this.setState({ isError: true })
      this.removeStates()
    }
  }

  removeStates = () => {
    this.setState({
      username: '',
      password: '',
    })
  }

  render() {
    return (
      <View style={styles.root}>
        <ScrollView>
          {/* HEADER */}
          <View style={styles.header}>
            <FitImage
              source={require('../assets/img/download.jpg')}
              style={styles.fitImage}
            />
          </View>
          {/* END HEADER */}
          {/* WRAPPER */}
          <View style={{ marginHorizontal: wp('6.25%'), flex: 1 }}>
            <View style={styles.flex}>
              <Text style={{ paddingVertical: hp('3%'), paddingHorizontal: wp('4.5%'), fontSize: 45 }}>
                Sign In
            </Text>
            </View>
            {/* HERE IS INPUT */}
            <Card style={styles.input}>
              <CardItem>
                <Body>
                  <Item style={{ borderRadius: 7, marginBottom: wp('3.25%') }} rounded last>
                    <Input value={this.state.username} onChangeText={e => this.setState({ username: e })} placeholder="Username" />
                  </Item>
                  <Item style={{ borderRadius: 7, marginBottom: wp('3.5%') }} rounded last>
                    <Input value={this.state.password} onChangeText={e => this.setState({ password: e })} secureTextEntry placeholder="Password" />
                  </Item>
                </Body>
              </CardItem>
              <TouchableOpacity onPress={this.postData}>
                <LinearGradient colors={['#F96D00', '#f28733']} style={styles.signinButton}>
                  <Text style={{ color: '#ffffff', fontSize: 20 }}>
                    Sign in
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Forget')}>
                <View style={styles.signinButton}>
                  <Text style={{ color: '#222831', fontSize: 15 }}>
                    Forget Password?
                  </Text>
                </View>
              </TouchableOpacity>
            </Card>
            {/* END INPUT */}
            <View style={{ height: hp('25%'), paddingTop: hp('9.5%') }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                <View style={styles.registerButton}>
                  <Text style={{ color: '#F96D00', fontSize: 15 }}>
                    Register
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* END WRAPPER */}
        </ScrollView>
        <AwesomeAlert
          show={this.state.isSuccess} // ==> WHENEVER LOGIN IS SUCCESSFUL
          title="Login Success"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="OK"
          confirmButtonColor="#F96D00"
          onConfirmPressed={() => {
            this.hideSuccess();
          }}
        />
        <AwesomeAlert
          show={this.state.isError} // ==> WHENEVER LOGIN IS UNSUCCESSFUL
          title="Wrong Credential"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="OK"
          confirmButtonColor="#222831"
          onConfirmPressed={() => {
            this.hideError();
          }}
        />
        <AwesomeAlert
          show={this.state.isDown} // ==> WHENEVER INTERNET GOES DOWN
          title="Something goes wrong"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showConfirmButton={true}
          confirmText="OK"
          confirmButtonColor="#222831"
          onConfirmPressed={() => {
            this.hideDown();
          }}
        />
        <AwesomeAlert
          show={this.state.isLoading} // ==> WHENEVER LOADING
          title="Please wait ..."
          closeOnHardwareBackPress={false}
          showProgress={true}
        />
      </View>
    )
  }
}

const LoginOri = withNavigation(Login);

const mapStateToProps = state => {
  return {
    login: state.login,
  }
}

export default connect(mapStateToProps)(LoginOri);

const styles = {
  flex: {
    flex: 1,
  },
  header: {
    height: hp('25%'),
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    overflow: 'hidden',
  },
  fitImage: {
    height: hp('25%'),
    width: wp('100%'),
  },
  input: {
    height: hp('36%'),
    borderRadius: 10,
    overflow: 'hidden',
    paddingVertical: wp('3.25%'),
    marginBottom: wp('3.25%'),
    elevation: 3
  },
  signinButton: {
    height: hp('6%'),
    borderRadius: 7,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp('4%'),
  },
  registerButton: {
    height: hp('6%'),
    borderRadius: 7,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F96D00'
  },
  root: {
    flex: 1,
  }
}

