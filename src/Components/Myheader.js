import React, { Component } from 'react'
import { Appbar } from 'react-native-paper';
import { withNavigation } from 'react-navigation';
import Entypo from "react-native-vector-icons/Entypo";



class Myheader extends Component {

    render() {
        const { isHome = true } = this.props
        return (
            <Appbar.Header style={{ backgroundColor: 'white' }}>
                {!isHome &&
                    <Appbar.Action
                        icon="arrow-left"
                        color="#F96D00"
                        onPress={() => this.props.navigation.goBack()}
                    />
                }
                <Appbar.Content
                    title={this.props.title}
                />
                <Appbar.Action
                    icon={()=> <Entypo name="menu" color="#F96D00" size={25} />}
                    onPress={() => this.props.navigation.openDrawer()}
                />
            </Appbar.Header>
        )
    }
}

const Header = withNavigation(Myheader);

export default Header
