import React, { Component } from 'react'
import Home from './src/screens/Home'

import Navigator from './src/config/routes'
import { addNavigationHelpers } from 'react-navigation'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from './src/actions'

import ES from 'react-native-extended-stylesheet'

ES.build({
  $primary_color: '#ff8500',
  $secondary_color: '#f4511e',
})


const App = ({dispatch, nav}) => {
  <Navigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav
    })}
  >
  </Navigator>
}


const mapStateToProps = state => {
  return {
    nav: state.nav,
    expenses: state.expenses,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch)
}

const AppWithNav = connect(mapStateToProps, mapDispatchToProps)(Navigator)
export default AppWithNav
