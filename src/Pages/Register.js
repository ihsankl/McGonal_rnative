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
import { register } from '../redux/action/login'



class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            RepeatPassword: '',
            modal: false,
            isLoading: false,
            isSuccess: false,
            isErrorUsername: false,
            isErrorPassword: false,
            isDown: false,
            isUsernameTaken: false
        }
    }

    showSuccess = () => {
        this.setState({
            isSuccess: true
        });
    };

    hideSuccess = () => {
        this.setState({
            isSuccess: false
        });
    };

    showErrorUsername = () => {
        this.setState({
            isErrorUsername: true
        });
    };

    hideErrorUsername = () => {
        this.setState({
            isErrorUsername: false
        });
    };

    showErrorPassword = () => {
        this.setState({
            isErrorPassword: true
        });
    };

    hideErrorPassword = () => {
        this.setState({
            isErrorPassword: false
        });
    };

    showUsernameTaken = () => {
        this.setState({
            isUsernameTaken: true
        });
    };

    hideUsernameTaken = () => {
        this.setState({
            isUsernameTaken: false
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

    handleRegisterInput = async => {
        const { username, password, RepeatPassword } = this.state
        const regex = /^[^\W_]+$/g;
        if (!username.match(regex)) {
            this.setState({ isErrorUsername: true })
        } else {
            const data = {
                username,
                password
            }
            if (password !== RepeatPassword || password === '') {
                this.setState({ isErrorPassword: true })
            } else {
                this.setState({ isLoading: true })
                this.handleRegister(data)
            }
        }
    }

    handleRegister = async (data) => {
        try {
            await this.props.dispatch(register(data));
            if (this.props.register.msg === "Username has taken") {
                this.setState({ isLoading: false })
                this.setState({ isUsernameTaken: true })
                this.removeStates()
            } else {
                this.setState({ isLoading: false })
                this.setState({ isSuccess: true })
                this.removeStates()
            }
        } catch (error) {
            this.setState({ isLoading: false })
            this.setState({ isDown: true })
        }
    }

    removeStates = () => {
        this.setState({
            username: '',
            password: '',
            RepeatPassword: ''
        })
    }

    render() {
        return (
            <View style={styles.root}>
                <ScrollView>
                    {/* HEADER */}
                    <View style={styles.header}>
                        <FitImage
                            source={require('../assets/img/ichigo.jpg')}
                            style={styles.fitImage}
                        />
                    </View>
                    {/* END HEADER */}
                    {/* WRAPPER */}
                    <View style={{ marginHorizontal: wp('6.25%') }}>
                        <View style={styles.flex}>
                            <Text style={{ paddingVertical: hp('3%'), paddingHorizontal: wp('4.5%'), fontSize: 45 }}>
                                Register
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
                                    <Item style={{ borderRadius: 7, marginBottom: wp('3.5%') }} rounded last>
                                        <Input value={this.state.RepeatPassword} onChangeText={e => this.setState({ RepeatPassword: e })} secureTextEntry placeholder="Repeat Password" />
                                    </Item>
                                </Body>
                            </CardItem>
                            <TouchableOpacity onPress={this.handleRegisterInput}>
                                <LinearGradient colors={['#F96D00', '#f28733']} style={styles.signinButton}>
                                    <Text style={{ color: '#ffffff', fontSize: 20 }}>
                                        Register
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                                <View style={styles.signinButton}>
                                    <Text style={{ color: '#222831', fontSize: 15 }}>
                                        I have an Account
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </Card>
                        {/* END INPUT */}
                    </View>
                    {/* END WRAPPER */}
                </ScrollView>
                {/* Username is not valid
                    Password not match */}
                <AwesomeAlert
                    show={this.state.isSuccess} // ==> WHENEVER REGISTER IS SUCCESSFUL
                    title="Register Success"
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
                    show={this.state.isErrorUsername} // ==> WHENEVER USERNAME IS INVALID
                    title="Username is not Valid!"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    confirmText="OK"
                    confirmButtonColor="#222831"
                    onConfirmPressed={() => {
                        this.hideErrorUsername();
                    }}
                />
                <AwesomeAlert
                    show={this.state.isErrorPassword} // ==> WHENEVER PASSWORD IS INVALID
                    title="Password is not Valid!"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    confirmText="OK"
                    confirmButtonColor="#222831"
                    onConfirmPressed={() => {
                        this.hideErrorPassword();
                    }}
                />
                <AwesomeAlert
                    show={this.state.isUsernameTaken} // ==> WHENEVER USERNAME IS TAKEN
                    title="Username has Taken!"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showConfirmButton={true}
                    confirmText="OK"
                    confirmButtonColor="#222831"
                    onConfirmPressed={() => {
                        this.hideUsernameTaken();
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

const mapStateToProps = state => {
    return {
        register: state.register
    }
}

export default connect(mapStateToProps)(Register);


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
        height: hp('45%'),
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

