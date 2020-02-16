import React, { Component } from 'react'
import { Text, View } from 'react-native'
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
    CardItem,
    Body
} from 'native-base';
import FitImage from 'react-native-fit-image';



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
                                    <Text style={{ color: '#F96D00', fontWeight: 'bold', fontSize: 20 }}>tes</Text>
                                </View>
                            </TabHeading>
                        }>
                            {/* CONTENT STARTS HERE */}
                            <View style={{ marginVertical: hp('2%'), marginHorizontal: wp('4%') }}>
                                <Card style={{ elevation: 3, borderRadius: 15, overflow: 'hidden', height: hp('31.5%') }}>
                                    <CardItem>
                                        <Body>
                                            <View style={{ height: hp('16.5%'), overflow: 'hidden' }}>
                                                <FitImage
                                                    source={require('../assets/img/download.jpg')}
                                                    resizeMode="contain"
                                                    style={styles.FitImage}
                                                />
                                            </View>
                                            <Text>
                                            //Your text here
                                            </Text>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </View>
                            {/* CONTENT ENDS */}
                        </Tab>
                        <Tab heading={
                            <TabHeading style={{ backgroundColor: 'white' }}>
                                <View>
                                    <Text style={{ color: '#F96D00', fontWeight: 'bold', fontSize: 20 }}>tes</Text>
                                </View>
                            </TabHeading>
                        }>
                            <Text>asd</Text>
                        </Tab>
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
        height: 100,
        width: 100
    }

}
