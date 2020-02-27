import React, { Component } from 'react'
import { Text, View, FlatList, ScrollView } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
}
    from 'react-native-responsive-screen';
import { Searchbar } from 'react-native-paper';
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
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
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux'
import { getItems, nextItems } from '../redux/action/items'
import AwesomeAlert from 'react-native-awesome-alerts';
import { APP_URL } from '../redux/config';



class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstQuery: '',
            isLoading: false,
            isDown: false,
            items1: [],
            items2: []
        }
    }

    componentDidMount() {
        // this.getCategories()
        this.getItems()
        // window.scrollTo(0, 0)
    }

    bestDeals = async () => {
        this.setState({ isLoading: true })
        let query = `${APP_URL}/items?sort[price]=DESC`
        try {
            await this.props.dispatch(nextItems(query))
            this.setState({ isLoading: false })
        } catch (error) {
            this.setState({ isLoading: false })
            this.setState({ isDown: true })
        }
    }

    getItems = async () => {
        await this.setState({ isLoading: true })
        try {
            await this.props.dispatch(getItems())
            await this.setState({ items1: this.props.items.data.data })
            await this.setState({ isLoading: false })
        } catch (error) {
            await this.setState({ isLoading: false })
            await this.setState({ isDown: true })
        }
    }

    hideDown = () => {
        this.setState({
            isDown: false
        });
    };

    render() {
        return (
            <>
                <ScrollView>
                    <View style={styles.flex}>
                        <View style={{ height: hp('25%'), paddingHorizontal: wp('4.5%') }}>
                            <View style={{ flex: 1 }}>
                                <View style={{ flex: 1, marginVertical: hp('1.3%'), flexDirection: 'row' }}>
                                    <View style={{ flex: 4, overflow: 'hidden', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 40 }}>Explore Food</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
                                        <View style={{ flex: 2 }} />
                                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}><Entypo name="menu" size={40} /></TouchableOpacity>
                                        <View style={{ flex: 1 }} />
                                    </View>
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
                            <Tabs onChangeTab={this.bestDeals} tabBarUnderlineStyle={{ backgroundColor: '#F96D00' }}>
                                <Tab heading={
                                    <TabHeading style={{ backgroundColor: 'white' }}>
                                        <View>
                                            <Text style={{ color: '#F96D00', fontSize: 20 }}>Best items</Text>
                                        </View>
                                    </TabHeading>
                                }>
                                    {/* CONTENT STARTS HERE */}
                                    {/* {!this.props.items.isLoading && !this.state.items1.length === 0 &&
                                        // <Text>haha</Text>
                                    <Tabs1 data={this.state.items1} />
                                    } */}

                                    <Tabs1 data={this.props.items.data.data} />

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
                                    <Tabs1 data={this.props.items.data.data} />
                                </Tab>
                                {/* ANOTHER CONTENTS END */}
                            </Tabs>
                        </View>
                    </View>
                </ScrollView>
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

const MainOri = withNavigation(Main);
const mapStateToProps = state => {
    return {
        items: state.items,
    }
}

export default connect(mapStateToProps)(MainOri);


const styles = {
    flex: {
        flex: 1
    },
    FitImage: {
        height: hp('16.4%'),
        width: wp('92%')
    }

}
