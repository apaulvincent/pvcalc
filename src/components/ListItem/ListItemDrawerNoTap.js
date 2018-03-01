import React, {Component} from 'react'
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

        return (
            <View style={styles.container}>

                <View style={styles.background}>
                    <Animated.View style={
                        [styles.button, {
                            opacity: this._deltaX.interpolate({
                                inputRange: [-230, -230, -180, -180],
                                outputRange: [1, 1, 0, 0]
                            }),
                            transform: [{
                                scale: this._deltaX.interpolate({
                                    inputRange: [-230, -230, -180, -180],
                                    outputRange: [1, 1, 0.8, 0.8]
                                })
                            }]
                        }
                        ]} />
                    <Animated.View style={
                        [styles.button, {
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
                        ]} />
                    <Animated.View style={
                        [styles.button, {
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
                        ]} />
                </View>

                <Interactable.View
                    horizontalOnly={true}
                    snapPoints={[{ x: 0, id: 'closed' }, { x: -230, id: 'open' }]}
                    onSnap={this.onDrawerSnap}
                    animatedValueX={this._deltaX}>

                    <View style={styles.foreground}>
                        {this.props.children}
                    </View>
                </Interactable.View>

            </View>
        )

    }

}

