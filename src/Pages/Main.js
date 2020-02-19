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
import Tabs1 from '../Components/Tab1';


export default class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstQuery: ''
        }
    }

    render() {
        return (
            <View style={styles.flex}>
                <View style={{ height: hp('28%'), paddingHorizontal: wp('4.5%') }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1 }} />
                        <View style={{ flex: 1, marginVertical: hp('1.3%') }}>
                            <Text style={{ fontSize: 40 }}>Explore Food</Text>
                        </View>
                        <View style={{ flex: 1, marginVertical: hp('1%') }}>
                            <Searchbar
                                placeholder="Search Food"
                                onChangeText={query => { this.setState({ firstQuery: query }); }}
                                value={this.state.firstQuery}
                                icon={() => <AntDesign name="search1" size={20} color="#F96D00" />}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <Tabs tabBarUnderlineStyle={{ backgroundColor: '#F96D00' }}>
                        <Tab heading={
                            <TabHeading style={{ backgroundColor: 'white' }}>
                                <View>
                                    <Text style={{ color: '#F96D00', fontSize: 20 }}>Best items</Text>
                                </View>
                            </TabHeading>
                        }>
                            {/* CONTENT STARTS HERE */}

                            {/* <View style={{ marginVertical: hp('2%'), marginHorizontal: wp('4%') }}>
                                <FlatList
                                    data={data}
                                    renderItem={({ item }) =>
                                        <Card style={{ elevation: 3, borderRadius: 15, overflow: 'hidden', height: hp('35%'), marginBottom:hp('3%') }}>
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
                            </View> */}
                            <Tabs1/>

                            {/* CONTENT ENDS */}
                        </Tab>
                        {/* ANOTHER CONTENTS HERE */}
                        <Tab heading={
                            <TabHeading style={{ backgroundColor: 'white' }}>
                                <View>
                                    <Text style={{ color: '#F96D00', fontSize: 20 }}>Best Deals</Text>
                                </View>
                            </TabHeading>
                        }>
                            <Tabs1/>
                        </Tab>
                        {/* ANOTHER CONTENTS END */}
                    </Tabs>
                </View>
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
