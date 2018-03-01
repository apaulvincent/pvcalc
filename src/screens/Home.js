import React, { Component } from 'react';
import PropTypes from 'prop-types'

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


import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions";

// import { NavigationActions } from 'react-navigation'

import Icon from "react-native-vector-icons/MaterialIcons";

import * as util from '../helpers'


class Home extends Component {

    constructor(props) {
        super(props);

        this._deltaX = new Animated.Value(0);

        this.state = {
            expenses: []
        }
    }

    componentWillMount() {

        // util.log(this.props.nav)

        this.props.fetchExpenses();

        // this.setState({
        //     expenses: this.props.expenses
        // })
    }

    componentDidMount() {

        // util.log(this.props)
    }

    handlePress(exp) {

        // const navigateAction = NavigationActions.navigate({
        //     routeName: 'Listing',
        //     params: {
        //         expense: exp
        //     }
        // })
        // this.props.navigation.dispatch(navigateAction);

        this.props.navigation.navigate({ routeName: 'Listing', params: { expense: exp } });

    }

    handleDelete(id){
        this.props.deleteExpense(id)
    }

    renderList() {
        return this.props.expenses.map((e, i) => {
            return <ListItemDrawer key={i} onDelete={() => this.handleDelete(e.id)}>
                <TouchableOpacity onPress={() => this.handlePress(e)} activeOpacity={1}>
                    <View style={styles.itemWrap}>
                        <Text style={styles.h1}>{e.name}</Text>
                        <Text>{e.collection.length + (e.collection.length == 1 ? 'Item' : 'Items')}</Text>
                    </View>
                </TouchableOpacity>
            </ListItemDrawer>
        })
    }

    onPress = (text) => {

        if (text == '') return;

        const d = new Date();
        const id = d.getTime();
        const name = text;

        const collection = [];

        this.props.addExpense(id, name, collection)
    }

    render() {

        return (
            <View style={styles.container}>
                <ScrollView>
                    {this.renderList()}
                </ScrollView>
                <ButtonWithInput
                    onPress={this.onPress}
                    placeholder="Add Expense"
                >
                </ButtonWithInput>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)


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


