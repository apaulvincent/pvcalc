import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions";

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

import { ButtonWithInput } from '../components/Button'
import { Drawer } from '../components/Drawer'

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

        const id = this.props.navigation.state.params.expense.id
        const expense = this.props.expenses.filter(exp => id == exp.id)

        this.setState({
            expense: expense[0]
        })

    }

    componentWillReceiveProps(np) {

        const id = this.props.navigation.state.params.expense.id
        const expense = np.expenses.filter(exp => id == exp.id)

        this.setState({
            expense: expense[0]
        })

    }

    handlePress() {
        util.log('Todo')
    }

    handleDelete(id) {

        const { expense } = this.state

        this.props.deleteExpenseItem(expense.id, id)
    }

    renderList() {

        const { expense } = this.state

        if (expense.collection == undefined) return

        return expense.collection.map((e, i) => {
            return <ListItemDrawer key={util.keygen(e.id, e.name)} onPress={this.handlePress} onDelete={() => this.handleDelete(e.id)}>
                <TouchableOpacity onPress={this.handlePress} activeOpacity={1}>
                    <View style={styles.itemWrap}>
                        <Text style={styles.h1}>{e.amount}</Text>
                        <Text>{e.name}</Text>
                    </View>
                </TouchableOpacity>
            </ListItemDrawer>
        })
    }

    handleSubmitEditing = (name, amount) => {

        if (name == '' || amount == '') return;

        const { expense } = this.state

        const d = new Date();

        const collection = {
            id: util.guid(),
            name: name,
            amount: parseInt(amount),
            createdAt: d,
            updatedAt: d,
        };

        this.props.addExpenseItem(expense.id, collection)
    }

    render() {

        return (
            <View style={styles.container}>

                <ScrollView>
                    {this.renderList()}
                </ScrollView>

                <Drawer data={this.state.expense} onSubmitEditing={this.handleSubmitEditing}></Drawer>
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


const mapDispatchToProps = dispatch => {
    return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing)


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


