import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import ES from 'react-native-extended-stylesheet'

import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Button,
    ScrollView,
    Animated
} from 'react-native'

import { ListItemDrawer } from '../components/ListItem'

import Icon from "react-native-vector-icons/MaterialIcons";

import * as util from '../helpers'

class Options extends Component {

    constructor(props) {
        super(props);

        this._deltaX = new Animated.Value(0);

        this.state = {
            expenses: []
        }
    }

    componentWillMount() {        

        this.setState({
            expenses: this.props.expenses
        })
    }

    handlePress() {
        util.log('moo')
    }


    render() {

        const { params } = this.props.navigation.state

        return (
            <View style={styles.container}>
                <Text>Options</Text>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.navigate('Home')}
                >
                </Button>
            </View>
        )

    }

}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapStateToProps)(Options)


const styles = ES.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    itemWrap: {
        height: 85,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    h1: {
        fontSize: 22
    }
});


