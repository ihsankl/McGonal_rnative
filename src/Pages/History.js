import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, FlatList, TextInput } from 'react-native'
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
    Body,
    Tabs,
    Tab,
    TabHeading
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Appbar, Button } from 'react-native-paper';
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AwesomeAlert from 'react-native-awesome-alerts';
import NumberFormat from 'react-number-format';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

export default class History extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showReview: false
        }
    }

    showReview = () => {
        this.setState({
            showReview: true
        });
    };

    hideReview = () => {
        this.setState({
            showReview: false
        });
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Appbar.Header style={{ backgroundColor: 'white' }}>
                    <Appbar.Action
                        // style={{backgroundColor:'red'}}
                        icon="arrow-left"
                        color="#F96D00"
                        onPress={this._goBack}
                    />
                    <Appbar.Content
                        title="History"
                    />
                </Appbar.Header>
                <FlatList
                    style={{ marginTop: hp('2.6') }}
                    data={DATA}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={this.showReview} style={{ marginHorizontal: wp('5'), flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                <Card style={{ padding: 5, borderRadius: 10, height: hp('15'), marginBottom: hp('2'), flexDirection: 'row', overflow: 'hidden' }}>
                                    <FitImage
                                        source={require('../assets/img/download.jpg')}
                                        style={styles.FitImage}
                                    />
                                    <View style={{ flex: 1, paddingHorizontal: wp('2.5') }} >
                                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                            Item Name
                                            </Text>
                                        <Text>
                                            Price:
                                                <NumberFormat
                                                value={6000}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                                prefix={' Rp. '}
                                                renderText={value => <Text>{value}</Text>}
                                            />
                                        </Text>
                                        <Text>
                                            QTY: x1
                                            </Text>
                                        <Text style={{ fontSize: 20 }}>
                                            Total:
                                                <NumberFormat
                                                value={6000}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                                prefix={' Rp. '}
                                                renderText={value => <Text>{value}</Text>}
                                            />
                                        </Text>
                                    </View>
                                </Card>
                            </View>
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item.id}
                />
                <AwesomeAlert
                    contentContainerStyle={{height:hp('41'), width:wp('88')}}
                    show={true}
                    showProgress={false}
                    title={`Rate "Item Name"`}
                    message="I have a message for you!"
                    closeOnTouchOutside={false}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}
                    cancelText="No, cancel"
                    confirmText="Yes, delete it"
                    confirmButtonColor="#DD6B55"
                    onCancelPressed={() => {
                        this.hideReview();
                    }}
                    onConfirmPressed={() => {
                        this.hideReview();
                    }}
                />
            </View>
        )
    }
}

const styles = {
    FitImage: {
        height: 100,
        width: wp('30'),
        borderRadius: 10,
        overflow: 'hidden'
    }
}
