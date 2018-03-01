import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Button,
    Animated
} from 'react-native'


import Interactable from 'react-native-interactable'

import Icon from "react-native-vector-icons/MaterialIcons";

import styles from './styles'

export default class ListItemDrawer extends Component {

    constructor(props) {
        super(props);
        this._deltaX = new Animated.Value(0);
    }

    onDrawerSnap(event) {
        const snapPointId = event.nativeEvent.id;
        console.log(`drawer state is ${snapPointId}`);
    }

    render() {

        const { height, onDelete } = this.props

        return (
            <View style={styles.container}>

                <View style={[styles.background, { height: height }]}>
                    <Animated.View style={
                        [{
                            opacity: this._deltaX.interpolate({
                                inputRange: [-165, -165, -115, -115],
                                outputRange: [1, 1, 0, 0]
                            }),
                            transform: [{
                                scale: this._deltaX.interpolate({
                                    inputRange: [-165, -165, -115, -115],
                                    outputRange: [1, 1, 0.8, 0.8]
                                })
                            }]
                        }
                        ]}><TouchableOpacity>
                            <Icon name="sentiment-dissatisfied" style={styles.button}></Icon>
                        </TouchableOpacity></Animated.View>
                    <Animated.View style={
                        [{
                            opacity: this._deltaX.interpolate({
                                inputRange: [-100, -100, -50, -50],
                                outputRange: [1, 1, 0, 0]
                            }),
                            transform: [{
                                scale: this._deltaX.interpolate({
                                    inputRange: [-100, -100, -50, -50],
                                    outputRange: [1, 1, 0.8, 0.8]
                                })
                            }]
                        }
                        ]}><TouchableOpacity onPress={onDelete}>
                            <Icon name="sentiment-neutral" style={styles.button}></Icon>
                        </TouchableOpacity></Animated.View>
                </View>

                <Interactable.View
                    horizontalOnly={true}
                    snapPoints={[{ x: 0, id: 'closed' }, { x: -165, id: 'open' }]}
                    onSnap={this.onDrawerSnap}
                    animatedValueX={this._deltaX}>
                    <View style={[styles.foreground, { height: height }]}>
                        {this.props.children}
                    </View>
                </Interactable.View>

            </View>
        )

    }

}

ListItemDrawer.propTypes = {
    onPress: PropTypes.func,
    onDelete: PropTypes.func
}

ListItemDrawer.defaultProps = {
    height: 85,
    onDelete: () => {}
}