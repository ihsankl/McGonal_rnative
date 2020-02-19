import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
}
    from 'react-native-responsive-screen';
import { Searchbar } from 'react-native-paper';
import AntDesign from "react-native-vector-icons/AntDesign";
import {
    Tab,
    Tabs,
    TabHeading,
    Card,
    Body,
} from 'native-base';
import { Button } from 'react-native-paper';
import FitImage from 'react-native-fit-image';

const data = [
    {
        item_name: 'Angel Cake',
        category: 'Cake',
        ratings: 4.5,
    },
    {
        item_name: 'Angel Delight',
        category: 'Cake',
        ratings: 4.5,
    },
    {
        item_name: 'Angel Tears',
        category: 'Cake',
        ratings: 4.5,
    },
];

export default class Tabs1 extends Component {
    render() {
        return (
            <View style={{ marginVertical: hp('2%'), marginHorizontal: wp('4%') }}>
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <Card style={{ elevation: 3, borderRadius: 15, overflow: 'hidden', height: hp('35%'), marginBottom: hp('3%') }}>
                            <Body>
                                <View style={{ height: hp('16.5%'), overflow: 'hidden' }}>
                                    <FitImage
                                        source={require('../assets/img/download.jpg')}
                                        style={styles.FitImage}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row', flex: 1, marginHorizontal: wp('5%') }}>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flex: 1 }} />
                                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                            {item.item_name}
                                        </Text>
                                        <View style={{ flex: 1 }} />
                                        <Text style={{ fontSize: 15, color: '#BDBDBF' }}>
                                            {item.category}
                                        </Text>
                                        <View style={{ flex: 1 }} />
                                        <Text style={{ fontSize: 25 }}>
                                            {item.ratings} <AntDesign name='star' size={25} color='#FAE900' />
                                        </Text>
                                        <View style={{ flex: 1 }} />
                                        <Button mode="contained" color="#F96D00" onPress={() => console.log('Pressed')}>
                                            View Details
                                                        </Button>
                                        <View style={{ flex: 1 }} />
                                    </View>
                                </View>
                            </Body>
                        </Card>
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        )
    }
}

const styles = {
    flex: {
        flex: 1
    },
    FitImage: {
        height: hp('16.4%'),
        width: wp('92%')
    }

}
