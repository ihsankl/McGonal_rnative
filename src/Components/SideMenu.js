import React, { Component } from 'react'
import { Text, View, FlatList, ScrollView } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
}
    from 'react-native-responsive-screen';
import { Searchbar } from 'react-native-paper';
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Button } from 'react-native-paper';
import FitImage from 'react-native-fit-image';
import Tabs1 from '../Components/Tab1';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import AwesomeAlert from 'react-native-awesome-alerts';
import { logOut } from '../redux/action/login'
import { connect } from 'react-redux';


class SideMenu extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoading: false,
            isSuccess: false,
            isDown: false
        }
    }

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


    logOut = async () => {
        await this.setState({ isLoading: true })
        const { token } = this.props.login
        try {
            await this.props.dispatch(logOut(token))
            await this.setState({ isLoading: false })
            await this.props.navigation.navigate('Auth')
        } catch (error) {
            await this.setState({ isLoading: false })
            await this.setState({ isDown: true })
        }
        // .then(() => {
        //     this.setState({ isLoading: false })
        //     this.props.alert.show('Logged out!')
        // })
        // .catch((err) => {
        //     this.setState({ isLoading: false })
        //     this.props.alert.error(err)
        // })

    }

    render() {
        return (
            <>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <View style={{ height: hp('22.5') }}>
                        <FitImage
                            source={require('../assets/img/box.jpg')}
                            style={styles.fitImage}
                        />
                    </View>
                    <View style={{ flex: 1 }} />
                    <View style={{ flexDirection: 'row', height: hp('30') }}>
                        <View style={{ flex: 1 }} />
                        <View style={{ width: wp('62'), paddingTop: hp('0.7') }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={{ flexDirection: 'row', marginBottom: hp('5') }}>
                                <Text style={{ flex: 4, color: '#222831', fontSize: 20 }}>Home</Text>
                                <View style={{ flex: 1 }} />
                                <AntDesign color="#222831" name="home" size={25} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Review')} style={{ flexDirection: 'row', marginBottom: hp('5') }}>
                                <Text style={{ flex: 4, color: '#222831', fontSize: 20 }}>My Reviews</Text>
                                <View style={{ flex: 1 }} />
                                <MaterialIcons color="#222831" name="rate-review" size={25} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1 }} />
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View style={{ flex: 1 }} />
                        <TouchableOpacity onPress={this.logOut} style={{ height: hp('7'), marginTop: hp('9.5'), backgroundColor: '#F96D00', width: wp('62'), borderRadius: 5, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, color: 'white' }}>Logout </Text><MaterialCommunityIcons name="logout" size={25} color="white" />
                        </TouchableOpacity>
                        <View style={{ flex: 1 }} />
                    </View>
                </View>
                <AwesomeAlert
                    show={this.state.isSuccess} // ==> WHENEVER LOGOUT IS SUCCESSFUL
                    title="Logged Out!"
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
            </>
        )
    }
}

const SideBar = withNavigation(SideMenu);
const mapStateToProps = state => {
    return {
        login: state.login,
    }
}
export default connect(mapStateToProps)(SideBar);

const styles = {
    fitImage: {
        height: hp('22.5%'),
        width: wp('100%'),
    },
}
