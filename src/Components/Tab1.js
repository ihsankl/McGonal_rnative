import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
}
    from 'react-native-responsive-screen';
import { Searchbar } from 'react-native-paper';
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import {
    Tab,
    Tabs,
    TabHeading,
    Card,
    Body,
} from 'native-base';
import { Button } from 'react-native-paper';
import FitImage from 'react-native-fit-image';
import { TouchableOpacity } from 'react-native';
import NumberFormat from 'react-number-format';
import { withNavigation } from 'react-navigation';
import uuid from 'uuid';


const data = [
    {
        item_name: 'Angel Cake',
        category: 'Cake',
        price: 6000,
    },
    {
        item_name: 'Angel Delight',
        category: 'Cake',
        price: 6000,
    },
    {
        item_name: 'Angel Tears',
        category: 'Cake',
        price: 6000,
    },
];

class Tabs1 extends Component {
    render() {
        return (
            <View style={{ marginVertical: hp('2%'), marginHorizontal: wp('4%') }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) =>
                        <Card style={{ elevation: 3, borderRadius: 15, overflow: 'hidden', height: hp('40%'), marginBottom: hp('3%') }}>
                            <Body>
                                <View style={{ height: hp('22%'), overflow: 'hidden' }}>
                                    <FitImage
                                        source={require('../assets/img/download.jpg')}
                                        style={styles.FitImage}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', flex: 1, marginHorizontal: wp('5%') }}>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flex: 1 }} />
                                        <TouchableOpacity>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                                {item.item_name}
                                            </Text>
                                        </TouchableOpacity>
                                        <View style={{ flex: 1 }} />
                                        <Text style={{ fontSize: 20, color: '#BDBDBF' }}>
                                            {item.category}
                                        </Text>
                                        <View style={{ flex: 1 }} />
                                        <Text style={{ fontSize: 25 }}>
                                            <NumberFormat
                                                value={item.price}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                                prefix={'Rp. '}
                                                renderText={value => <Text>{value}</Text>}
                                            />
                                            {/* {item.price}  */}
                                        </Text>
                                        <View style={{ flex: 1 }} />
                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Detailitem')} style={{ flex: 1 }}>
                                                <View style={{ alignItems: 'center', justifyContent: 'center', marginRight: wp('2'), height: hp('4'), borderWidth: 1, borderRadius: 5, borderColor: '#F96D00' }}>
                                                    <Text style={{ color: '#F96D00', fontSize: 15 }}><FontAwesome5 name="grip-vertical" size={15} /> View Details</Text>
                                                </View>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ flex: 1 }}>
                                                <View style={{ alignItems: 'center', justifyContent: 'center', marginLeft: wp('2'), height: hp('4'), borderWidth: 1, borderRadius: 5, borderColor: '#F96D00' }}>
                                                    <Text style={{ color: '#F96D00' }}><FontAwesome5 name="shopping-cart" size={15} /> Buy Now</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flex: 1 }} />
                                    </View>
                                </View>
                            </Body>
                        </Card>
                    }
                    keyExtractor={() => uuid}
                />
            </View>
        )
    }
}

const Tabzz = withNavigation(Tabs1);

export default Tabzz

const styles = {
    flex: {
        flex: 1
    },
    FitImage: {
        height: hp('22%'),
        width: wp('92%')
    }

}
