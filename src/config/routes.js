import React from 'react'


import Home from '../screens/Home'
import Listing from '../screens/Listing'
import Options from '../screens/Options'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native'


import { StackNavigator, DrawerNavigator } from 'react-navigation'

import Icon from "react-native-vector-icons/MaterialIcons";
import * as util from '../helpers'


const DrawBtn = ({ navigation }) => {

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('DrawerOpen')}
        ><Icon name="menu" style={{
            color: '#fff',
            fontSize: 32,
            paddingHorizontal: 10,
        }}></Icon>
        </TouchableOpacity>
    )
}


const MainStack = StackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: ({ navigation }) => ({
                headerTitle: 'Expenses',
                headerLeft: <DrawBtn navigation={navigation} />, // Hide Back Button
                headerRight: null,
                headerStyle: {
                    backgroundColor: '#ff8500',
                    elevation: 0,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'normal',
                    textAlign: 'center',
                    flexGrow: 1,
                    paddingRight: 40
                }
            })
        },
        Listing: {
            screen: Listing,
            navigationOptions: ({ navigation }) => ({
                headerTitle: navigation.state.params.expense.name,
                headerStyle: {
                    backgroundColor: '#ff8500',
                    elevation: 0,
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'normal',
                    textAlign: 'center',
                    flexGrow: 1,
                    paddingRight: 40
                },
            })
        }
    }, {
        headerMode: 'screen',
        mode: 'modal',
    }
)


export default DrawerNavigator(
    {
        Home: {
            screen: MainStack
        },
        // Options: {
        //     screen: Options
        // }
    }, {
        initialRouteName: 'Home',
        drawerPosition: 'left',
        drawerWidth: 240,
        contentOptions: {
            activeTintColor: '#000',
            activeBackgroundColor: '#f3f3f3'
        }
    }
)

// export default StackNavigator(
//     {
//         Main: {
//             screen: Drawer,
//             navigationOptions: ({ navigation }) => ({
//                 headerTitle: navigation.routes,
//                 headerStyle: {
//                     backgroundColor: '#f4511e',
//                     elevation: 0,
//                 },
//                 headerTintColor: '#fff',
//                 headerTitleStyle: {
//                     fontWeight: 'normal',
//                 },
//             })
//         }
//     }, {
//         initialRouteName: 'Main',
//         headerMode: 'screen',
//         model: 'modal',
//     },
// )