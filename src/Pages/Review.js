import React, { Component } from 'react'
import {
    Text,
    ScrollView,
    TouchableOpacity,
    FlatList,
    TextInput,
} from 'react-native'
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
    View,
    TabHeading
} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { Appbar, Button } from 'react-native-paper';
import AntDesign from "react-native-vector-icons/AntDesign";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AwesomeAlert from 'react-native-awesome-alerts';
import NumberFormat from 'react-number-format';
// import Modal from 'react-native-modalbox';
import Modal from "react-native-modal";
import StarRating from 'react-native-star-rating';
import Myheader from '../Components/Myheader';



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

export default class Review extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showReview: false,
            starCount: 1,
            review: '',
        }
    }

    showReview = () => {
        this.setState({
            showReview: true
        });
    };

    closeReview = () => {
        this.setState({
            showReview: false
        });
    };

    hideReview = () => {
        this.setState({
            showReview: false
        });
    };

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* <Appbar.Header style={{ backgroundColor: 'white' }}>
                    <Appbar.Action
                        // style={{backgroundColor:'red'}}
                        icon="arrow-left"
                        color="#F96D00"
                        onPress={this._goBack}
                    />
                    <Appbar.Content
                        title="History"
                    />
                </Appbar.Header> */}
                <Myheader title="My Reviews" />
                <FlatList
                    style={{ marginTop: hp('2.6') }}
                    data={DATA}
                    renderItem={({ item }) =>
                        <View style={{ marginHorizontal: wp('5'), flexDirection: 'row', }}>
                            <TouchableOpacity onPress={this.showReview} style={{ flex: 1, elevation: 5 }}>

                                <Card style={{ padding: 5, borderRadius: 10, height: hp('15'), marginBottom: hp('2'), flexDirection: 'row', overflow: 'hidden', borderWidth: 1, borderColor: '#ddd' }}>
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
                                    <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                                        <TouchableOpacity onPress={this.showReview} style={{ width: wp('10'), borderRadius: 10, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
                                            <FontAwesome color="#F96D00" size={25} name="edit" />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: wp('10'), borderRadius: 10, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
                                            <EvilIcons color="#F96D00" size={40} name="trash" />
                                        </TouchableOpacity>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                        </View>
                    }
                    keyExtractor={item => item.id}
                />
                {/* REVIEW MODAL HERE */}
                {/* ==========================================NEW MODAL TEST============================================== */}
                <Modal isVisible={this.state.showReview} onBackButtonPress={() => this.setState({ showReview: false })}>
                    <View style={styles.modal3}>
                        <View style={{ flexDirection: 'column', flex: 1 }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 7 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Rate "Item Name"</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                    <TouchableOpacity onPress={this.closeReview}><AntDesign name="close" size={20} /></TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <StarRating
                                    emptyStarColor="#F96D00"
                                    fullStarColor="#F96D00"
                                    disabled={false}
                                    maxStars={5}
                                    rating={this.state.starCount}
                                    selectedStar={(rating) => this.onStarRatingPress(rating)}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    style={{ borderWidth: 1, borderRadius: 5, borderColor: 'rgba(0,0,0,.2)', marginVertical: hp('1'), height: hp('7') }}
                                    multiline={true}
                                    placeholder="Write your feedback"
                                    numberOfLines={10}
                                    onChangeText={text => this.setState({ review: text })}
                                    value={this.state.review}
                                />
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
                                <TouchableOpacity style={{ flex: 1 }}>
                                    <LinearGradient colors={['#F96D00', '#f28733']} style={{ borderRadius: 5, padding: 7 }}>
                                        <Text style={{ color: '#ffffff', fontSize: 20, textAlign: 'center' }}>
                                            Rate now
                                    </Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = {
    FitImage: {
        height: 100,
        width: wp('30'),
        borderRadius: 10,
        overflow: 'hidden',
    },
    modal3: {
        height: hp('40'),
        width: '100%',
        // marginHorizontal:wp('5'),
        // marginVertical:hp('30'),
        padding: 25,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
    },

}
