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

import {ButtonWithInput} from '../components/Button'
import {Drawer} from '../components/Drawer'

import Icon from "react-native-vector-icons/MaterialIcons";

import * as util from '../helpers'


class Listing extends Component {

    constructor(props) {
        super(props);

        this._deltaX = new Animated.Value(0);

        this.state = {
            expense: []
        }
    }

    componentWillMount() {

        this.setState({
            expense: this.props.navigation.state.params.expense
        })
    }

    handlePress() {
        util.log('moo')
    }

    renderList() {

        return this.state.expense.collection.map((e, i) => {
            return <ListItemDrawer key={i} onPress={this.handlePress}>
                <TouchableOpacity onPress={this.handlePress} activeOpacity={1}>
                    <View style={styles.itemWrap}>
                        <Text style={styles.h1}>{e.amount}</Text>
                        <Text>{e.name}</Text>
                    </View>
                </TouchableOpacity>
            </ListItemDrawer>
        })
    }

    render() {

        return (
            <View style={styles.container}>

                <ScrollView>
                    {this.renderList()}
                </ScrollView>


                <Drawer data={this.state.expense}></Drawer>
                <View style={styles.spacer}></View>

            </View>
        )

    }

}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}

export default connect(mapStateToProps)(Listing)


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
    },
    spacer: {
        height: 116
    }
});


