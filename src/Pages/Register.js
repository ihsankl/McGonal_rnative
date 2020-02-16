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



export default class Register extends Component {
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
                                        <Input placeholder="Username" />
                                    </Item>
                                    <Item style={{ borderRadius: 7, marginBottom: wp('3.5%') }} rounded last>
                                        <Input secureTextEntry placeholder="Password" />
                                    </Item>
                                    <Item style={{ borderRadius: 7, marginBottom: wp('3.5%') }} rounded last>
                                        <Input secureTextEntry placeholder="Repeat Password" />
                                    </Item>
                                </Body>
                            </CardItem>
                            <TouchableOpacity>
                                <LinearGradient colors={['#F96D00', '#f28733']} style={styles.signinButton}>
                                    <Text style={{ color: '#ffffff', fontSize: 20 }}>
                                        Register
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity>
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
            </View>
        )
    }
}

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

