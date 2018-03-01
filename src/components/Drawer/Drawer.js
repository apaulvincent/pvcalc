import React, {Component} from 'react'
import {
    View, 
    Dimensions, 
    Text, 
    ScrollView, 
    Animated, 
    TextInput, 
    Keyboard  } from 'react-native'

import Interactable from 'react-native-interactable'

import styles from './styles'

import Icon from 'react-native-vector-icons/MaterialIcons'


import * as util from '../../helpers'

const Screen = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 75
};

class Drawer extends Component {

    constructor(props){
        super(props)
    
        this.keyboardHeight = new Animated.Value(0);
        this._deltaY = new Animated.Value(0);

        this.state = {
            data: [],
            total: 0,
        }
    }

    componentWillMount() {

        this.keyboardDidShowListener  = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener  = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);

        this.setState({
            data: this.props.data,
            total: this.props.data.collection.reduce( (a, b) => a + parseInt(b.amount) , 0 )
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

       this.refs['panel'].changePosition({y: 0})

      };
    
      _keyboardDidHide = (event) => {
    
        Animated.parallel([

          Animated.timing(this.keyboardHeight, {
            duration: 600,
            toValue: 0,
          })

        ]).start();

        this.refs['panel'].changePosition({y: Screen.height / 2})

      };


    render(){

        const { data, total } = this.state

        return (
            <Animated.View style={[styles.container]} pointerEvents='box-none'>

                <Interactable.View
                    ref='panel'
                    verticalOnly={true}
                    animatedValueY={this._deltaY}
                    initialPosition={{ x: 0, y: Screen.height - 120 }}
                    snapPoints={[
                        { y: (Screen.height - 120), damping: 0.7 },
                        { y: Screen.height / 2, damping: 0.7 },
                        { y: 0, damping: 0.7 },
                    ]}>

                        <View style={[styles.header, {width: Screen.width}]}>
                            <View style={styles.dragee}></View>

                            <View style={styles.headerContent}>
                                <Text style={{fontSize: 16}}>{data.name}</Text>

                                <View style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",}}>
                                    <Text style={{ fontSize: 28}}>Total</Text>
                                    <Text style={{ fontSize: 28}}>{total}</Text>
                                </View>

                            </View>    
                        </View>

                        <ScrollView style={[styles.main, {width: Screen.width}]}>
                                    <View style={{ paddingHorizontal: 20}}>
                                    
                                    <Text>Add Expense</Text>

                                    <TextInput onSubmitEditing={Keyboard.dismiss}></TextInput>
                                    
                                    </View>
                        </ScrollView>

                </Interactable.View>
            </Animated.View>
        )
    

    }
}

export default Drawer