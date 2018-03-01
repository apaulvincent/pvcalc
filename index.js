import React from 'react'

import { AppRegistry } from 'react-native';
import AppWithNav from './App';

import { Provider } from 'react-redux'
import store from './src/config/store'


const AppContainer = () => {
    return (
        <Provider store={store}>
            <AppWithNav></AppWithNav>
        </Provider>
    )
}


AppRegistry.registerComponent('pvcalc', () => AppContainer);
