import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Appbar } from 'react-native-paper';
import { withNavigation } from 'react-navigation';


class Myheader extends Component {

    // _goBack = () => console.log('Went back');

    render() {
        const { isHome = true } = this.props
        return (
            <Appbar.Header style={{ backgroundColor: 'white' }}>
                {/* <Appbar.Action
                    // style={{backgroundColor:'red'}}
                    icon="arrow-left"
                    color="#F96D00"
                    onPress={this._goBack}
                /> */}
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
            </Appbar.Header>
        )
    }
}

const Header = withNavigation(Myheader);

export default Header
