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
import NumberFormat from 'react-number-format';
import Tabs1 from '../Components/Tab1';


const data = [
    {
        item_name: 'Angel Cake',
        category: 'Cake',
        price: 6000,
        ratings: 4.5,
        id: 1
    },
]


export default class Detailitem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            qty: 0,
        }
    }

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
                </Appbar.Header>

                {/* MAIN CONTENT */}

                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <View>
                            {/* MAIN */}
                            <FitImage
                                source={require('../assets/img/download.jpg')} // ==> item img
                                style={styles.fitImage}
                            />
                            <View style={{ height: hp('20%'), flexDirection: 'column', paddingHorizontal: wp('3') }}>
                                <View style={{ flex: 1 }} />
                                <Text style={{ fontSize: 33, fontWeight: 'bold' }}>{item.item_name}</Text>
                                <View style={{ flex: 1 }} />
                                <Text style={{ fontSize: 20, color: '#BDBDBF' }}>{item.category}</Text>
                                <View style={{ flex: 1 }} />
                                <NumberFormat
                                    style={{ flex: 1 }}
                                    value={item.price}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'Rp. '}
                                    renderText={value => <Text style={{ fontSize: 25 }}>{value}</Text>}
                                />
                                <Text style={{ fontSize: 25 }}>{item.ratings} <AntDesign name="star" size={25} color='#FAE900' /> </Text>
                                <View style={{ flex: 1 }} />
                                <View style={{ borderWidth: .5, borderColor: '#BDBDBF' }} />
                                <View style={{ flex: 1 }} />
                            </View>
                            {/* END MAIN */}
                            {/* DESCRIPTION */}
                            <Text style={{ marginHorizontal: wp('3'), fontSize: 20, fontWeight: 'bold', marginVertical: hp('2') }}>Description</Text>
                            <ScrollView nestedScrollEnabled={true} style={{ marginHorizontal: wp('3'), height: hp('20') }}>
                                <Text style={{ fontSize: 15 }}> Amet anim laboris ullamco nisi irure quis consectetur tempor. Laboris sint irure quis esse reprehenderit et. In pariatur dolor et laboris qui nostrud dolore sunt ex velit non duis aliquip. Reprehenderit velit ea excepteur in velit ex aute nostrud pariatur tempor exercitation cupidatat quis. In anim est velit aliquip ea quis tempor ullamco aliquip. .Minim cillum proident ad voluptate ea minim enim ea aliqua sunt officia laboris ad id. Elit pariatur ipsum ipsum id mollit consequat magna aute cupidatat deserunt deserunt ipsum enim aute. Aliquip proident nisi commodo enim ullamco commodo velit fugiat. Ullamco elit voluptate exercitation cupidatat id eu sint pariatur nostrud dolore adipisicing culpa ullamco quis. Amet non id magna eu consequat deserunt voluptate anim id. .Irure adipisicing mollit amet ut mollit. Laboris deserunt laborum quis excepteur quis enim cillum reprehenderit ut sit reprehenderit exercitation cillum tempor. Exercitation in nostrud culpa est est cupidatat ex veniam cillum fugiat tempor reprehenderit velit. Dolore esse fugiat cupidatat commodo labore reprehenderit in ipsum laborum exercitation amet voluptate ipsum. Ipsum elit do labore minim elit anim mollit duis. Consequat consequat esse deserunt amet amet culpa est. Sit ex in laboris sit cupidatat elit ad quis ad enim velit est. Magna ullamco ad ea labore est consequat ipsum nisi irure culpa.</Text>
                            </ScrollView>
                            {/* END DESCRIPTION */}
                            {/* SHOWCASE */}
                            <View>
                                <Text style={{ marginHorizontal: wp('3'), fontSize: 20, fontWeight: 'bold', marginVertical: hp('2') }}>Recommended</Text>
                                <ScrollView horizontal style={{ flex: 1, flexDirection: 'row', marginLeft: wp('3') }}>
                                    <TouchableOpacity>
                                        <Card style={{ width: wp('40'), height: hp('20'), borderRadius: 12, overflow: 'hidden' }}>
                                            <FitImage
                                                source={require('../assets/img/download.jpg')}
                                                style={styles.FitImage}
                                            />
                                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 15 }}>Other item name</Text>
                                            </View>
                                        </Card>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Card style={{ width: wp('40'), height: hp('20'), borderRadius: 12, overflow: 'hidden' }}>
                                            <FitImage
                                                source={require('../assets/img/download.jpg')}
                                                style={styles.FitImage}
                                            />
                                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 15 }}>Other item name</Text>
                                            </View>
                                        </Card>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Card style={{ width: wp('40'), height: hp('20'), borderRadius: 12, overflow: 'hidden' }}>
                                            <FitImage
                                                source={require('../assets/img/download.jpg')}
                                                style={styles.FitImage}
                                            />
                                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 15 }}>Other item name</Text>
                                            </View>
                                        </Card>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Card style={{ width: wp('40'), height: hp('20'), borderRadius: 12, overflow: 'hidden' }}>
                                            <FitImage
                                                source={require('../assets/img/download.jpg')}
                                                style={styles.FitImage}
                                            />
                                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 15 }}>Other item name</Text>
                                            </View>
                                        </Card>
                                    </TouchableOpacity>
                                </ScrollView>
                            </View>
                            {/* END SHOWCASE */}
                            {/* REVIEW */}
                            <Text style={{ marginHorizontal: wp('3'), fontSize: 20, fontWeight: 'bold', marginVertical: hp('2') }}>Reviews</Text>
                            <ScrollView nestedScrollEnabled={true} style={{ marginHorizontal: wp('3'), height: hp('20') }}>
                                <Card style={{ borderRadius: 12, overflow: 'hidden', padding: wp('3'), flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Reviewer Username</Text>
                                    <Text style={{ fontSize: 15, color: '#BDBDBF' }}>12-02-2020</Text>
                                    <Text style={{ fontSize: 17 }}>4.5 <AntDesign name="star" size={17} color='#FAE900' /></Text>
                                    <Text style={{ fontSize: 17 }}>Review Content</Text>
                                </Card>
                                <Card style={{ borderRadius: 12, overflow: 'hidden', padding: wp('3'), flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Reviewer Username</Text>
                                    <Text style={{ fontSize: 15, color: '#BDBDBF' }}>12-02-2020</Text>
                                    <Text style={{ fontSize: 17 }}>4.5 <AntDesign name="star" size={17} color='#FAE900' /></Text>
                                    <Text style={{ fontSize: 17 }}>Review Content</Text>
                                </Card>
                                <Card style={{ borderRadius: 12, overflow: 'hidden', padding: wp('3'), flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Reviewer Username</Text>
                                    <Text style={{ fontSize: 15, color: '#BDBDBF' }}>12-02-2020</Text>
                                    <Text style={{ fontSize: 17 }}>4.5 <AntDesign name="star" size={17} color='#FAE900' /></Text>
                                    <Text style={{ fontSize: 17 }}>Review Content</Text>
                                </Card>
                            </ScrollView>
                            {/* END REVIEW */}
                        </View>
                    }
                    keyExtractor={item => item.id}
                />

                {/* END MAIN CONTENT */}

                {/* FOOTER */}
                <View style={{ height: hp('7'), flexDirection: 'row', padding: 6, backgroundColor:'rgba(0,0,0,.2)' }}>
                    {/* QTY */}
                    {/* <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => this.setState({ qty: this.state.qty + 1 })} style={{ backgroundColor: '#F96D00', borderRadius: 5, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                            <AntDesign name="plus" color="white" size={25} />
                        </TouchableOpacity>
                        <TextInput
                            style={{ width: 40, textAlign: 'center', borderColor: 'gray', borderWidth: 1, marginHorizontal: wp('2'), borderRadius: 5 }}
                            onChangeText={e => this.setState({ qty: e })}
                            keyboardType="number-pad"
                        >{this.state.qty}</TextInput>
                        <TouchableOpacity disabled={this.state.qty <= 0 ? true : false} onPress={() => this.setState({ qty: this.state.qty - 1 })} style={{ backgroundColor: '#F96D00', borderRadius: 5, width: 40, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                            <AntDesign name="minus" color="white" size={25} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: wp('55') }}>
                        <TouchableOpacity style={{ flex: 1, marginRight: 5, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#F96D00', borderRadius: 5 }}>
                            <Text style={{ color: '#F96D00', fontSize: 13 }}> Add to Cart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, marginRight: wp('3'), backgroundColor: '#F96D00', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#F96D00', borderRadius: 5 }}>
                            <Text style={{ color: '#F96D00', fontSize: 13, color: 'white' }}> Buy Now</Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
            </View>
        )
    }
}

const styles = {
    fitImage: {
        height: hp('35%'),
        width: wp('100%'),
    },
    FitImage: {
        height: hp('15'),
        width: wp('40')
    }
}