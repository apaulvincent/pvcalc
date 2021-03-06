import React, { Component } from 'react'
import {
    View,
    Dimensions,
    Text,
    Button,
    ScrollView,
    TouchableOpacity,
    Animated,
    TextInput,
    Keyboard
} from 'react-native'

import Interactable from 'react-native-interactable'

import styles from './styles'

import Icon from 'react-native-vector-icons/MaterialIcons'


import * as util from '../../helpers'

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 75
};

class Drawer extends Component {

    constructor(props) {
        super(props)

        this.keyboardHeight = new Animated.Value(0);
        this._deltaY = new Animated.Value(0);

        this.state = {
            fieldName: '',
            fieldAmount: '',
            data: [],
            total: 0,
        }
    }

    componentWillMount() {

        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);

        this.setState({
            data: this.props.data,
            total: this.props.data.collection.reduce((a, b) => a + parseInt(b.amount), 0)
        })

    }

    componentWillReceiveProps(np) {

        this.setState({
            data: np.data,
            total: np.data.collection.reduce((a, b) => a + parseInt(b.amount), 0)
        })

    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow = (event) => {

        Animated.parallel([
            Animated.timing(this.keyboardHeight, {
                duration: 600,
                toValue: event.endCoordinates.height,
            })

        ]).start();

        this.refs['panel'].changePosition({ y: 0 })

    };

    _keyboardDidHide = (event) => {

        Animated.parallel([

            Animated.timing(this.keyboardHeight, {
                duration: 600,
                toValue: 0,
            })

        ]).start();

        this.refs['panel'].changePosition({ y: Screen.height / 2 })

    };



    handleChangeName = (text) => {
        this.setState({
            fieldName: text
        })
    }

    handleChangeAmount = (text) => {
        this.setState({
            fieldAmount: text
        })
    }

    handleSubmit = () => {

        this.props.onSubmitEditing(this.state.fieldName, this.state.fieldAmount)

        this.setState({
            fieldName: '',
            fieldAmount: ''
        })

        Keyboard.dismiss
    }

    onDrawerSnap(event) {
        const snapPointId = event.nativeEvent.id;
        console.log(`drawer state is ${snapPointId}`);
    }

    render() {

        const { data, total } = this.state

        return (
            <Animated.View style={[styles.container]} pointerEvents='box-none'>

                <Interactable.View
                    ref='panel'
                    verticalOnly={true}
                    animatedValueY={this._deltaY}
                    initialPosition={{ x: 0, y: Screen.height - 120 }}
                    onSnap={this.onDrawerSnap}
                    snapPoints={[
                        { y: (Screen.height - 120), damping: 0.7 },
                        { y: Screen.height / 2, damping: 0.7 },
                        { y: 0, damping: 0.7 },
                    ]}>

                    <View style={[styles.header, { width: Screen.width }]}>
                        <View style={styles.dragee}></View>

                        <View style={styles.headerContent}>
                            <Text style={{ fontSize: 16 }}>Total</Text>

                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                            }}>
                                <Text style={{ fontSize: 28 }}>{data.name}</Text>
                                <Text style={{ fontSize: 28 }}>{total}</Text>
                            </View>

                        </View>
                    </View>

                    <ScrollView style={[styles.main, { width: Screen.width }]}>
                        <View style={{ paddingHorizontal: 20 }}>

                            <Text>Add Expense</Text>

                            <View style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginBottom: 20
                            }}>
                                <TextInput
                                    ref="nameInput"
                                    blurOnSubmit={false}
                                    value={this.state.fieldName}
                                    returnKeyType={"next"}
                                    placeholder="Name"
                                    onChangeText={this.handleChangeName}
                                    onSubmitEditing={() => this.refs.amountInput.focus()}
                                    style={{ width: '50%' }}
                                ></TextInput>

                                <TextInput
                                    ref="amountInput"
                                    blurOnSubmit={true}
                                    value={this.state.fieldAmount}
                                    placeholder="Amount"
                                    onChangeText={this.handleChangeAmount}
                                    onSubmitEditing={this.handleSubmit}
                                    style={{ width: '50%' }}
                                    keyboardType="numeric"
                                ></TextInput>
                            </View>

                            <Button onPress={this.handleSubmit} title="Add Expense" />

                        </View>
                    </ScrollView>

                </Interactable.View>
            </Animated.View>
        )


    }
}

export default Drawer