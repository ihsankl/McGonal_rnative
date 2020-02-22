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

export default class Carts extends Component {

    _goBack = () => console.log('Went back');

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
                        title="Carts List"
                    />
                </Appbar.Header>
                <FlatList
                    style={{ marginTop: hp('2.6') }}
                    data={DATA}
                    renderItem={({ item }) =>
                        <View style={{ marginHorizontal: wp('5'), flexDirection: 'row' }}>
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
                                    <TouchableOpacity style={{ width: wp('10'), borderRadius: 10, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
                                        <EvilIcons color="#F96D00" size={40} name="trash" />
                                    </TouchableOpacity>
                                </Card>
                            </View>
                        </View>
                    }
                    keyExtractor={item => item.id}
                />
                <View style={{ height: hp('7'), flexDirection: 'row', justifyContent: 'space-between', padding: 6 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
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
                    <View style={{ flex: 1 }} />
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <View style={{ flex: .2 }} />
                        <TouchableOpacity style={{ borderRadius: 10, borderWidth: 1, borderColor: '#F96D00', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#F96D00', fontSize: 15, fontWeight: 'bold' }}>Checkout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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
