import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import storage from './src/redux/store'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Dimensions } from 'react-native';
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


// SCREENS
import Login from './src/Pages/Login'
import Carts from './src/Pages/Carts'
import Detailitem from './src/Pages/Detailitem'
import Forget from './src/Pages/Forget'
import History from './src/Pages/History'
import Main from './src/Pages/Main'
import Register from './src/Pages/Register'
import Review from './src/Pages/Review'
import SideMenu from './src/Components/SideMenu'

const { store, persistor } = storage()

const navOptionHandler = (navigation) => ({
  header: () => false
})

const ItemStack = createStackNavigator({
  Home: {
    screen: Main,
    navigationOptions: navOptionHandler,
  },
  Detailitem: {
    screen: Detailitem,
    navigationOptions: navOptionHandler,
  }
})

ItemStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) {
    tabBarVisible = false
  }
  return { tabBarVisible }
}

const CartsStack = createStackNavigator({
  Carts: {
    screen: Carts,
    navigationOptions: navOptionHandler
  },
})

const HistoryStack = createStackNavigator({
  History: {
    screen: History,
    navigationOptions: navOptionHandler
  },
})

const TabNavigator = createBottomTabNavigator({
  Items: {
    screen: ItemStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <AntDesign name="home" size={25} color={tintColor} />
      )
    }
  },
  Carts: {
    screen: CartsStack,
    navigationOptions: {
      tabBarLabel: 'Carts',
      tabBarIcon: ({ tintColor }) => (
        <AntDesign name="shoppingcart" size={25} color={tintColor} />
      )
    }
  },
  History: {
    screen: HistoryStack,
    navigationOptions: {
      tabBarLabel: 'History',
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="history" size={25} color={tintColor} />
      )
    }
  },
},
  {
    tabBarOptions: {
      activeTintColor: '#F96D00'
    }
  }
)

const DrawerNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: navOptionHandler
  },
  Review: {
    screen: Review,
    navigationOptions: navOptionHandler
  }
})

const AppDrawer = createDrawerNavigator({
  drawer: DrawerNavigator
},{
  contentComponent: SideMenu,
  drawerWidth: Dimensions.get('window').width * 3 / 4,
  drawerPosition: "right",

})

const authStack = createSwitchNavigator({
  Login: {
    screen: Login,
    navigationOptions: navOptionHandler
  },
  Register: {
    screen: Register,
    navigationOptions: navOptionHandler
  },
  Forget: {
    screen: Forget,
    navigationOptions: navOptionHandler
  },
})

let MainApp = createSwitchNavigator({
  App: AppDrawer,
  Auth: authStack
}, { initialRouteName: 'Auth' })

const AppContainer = createAppContainer(MainApp)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    )
  }
}
