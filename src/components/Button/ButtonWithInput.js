import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity, TextInput, Text } from 'react-native';

import styles, { ButtonWithInputStyles } from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons'

class ButtonWithInput extends Component {

    constructor(props) {

        super(props)

        this.state = {
            fieldText: ''
        }

    }

    handleChangeText = (text) => {
        this.setState({
            fieldText: text
        })
    }

    handlePress = () => {

        this.props.onPress(this.state.fieldText)

        this.setState({
            fieldText: ''
        })
    }

    render() {

        const { onPress, placeholder } = this.props

        return (
            <View style={ButtonWithInputStyles.container}>
                <TextInput
                    style={ButtonWithInputStyles.TextInput}
                    value={this.state.fieldText}
                    placeholder={placeholder}
                    placeholderTextColor='#999'
                    underlineColorAndroid='transparent'
                    onChangeText={this.handleChangeText}
                    onSubmitEditing={this.handlePress}
                ></TextInput>
                <TouchableOpacity
                    style={ButtonWithInputStyles.addButton}
                    onPress={this.handlePress}
                >
                    <Text
                        style={ButtonWithInputStyles.addButtonText}
                    >
                        <Icon name="add-box" style={ButtonWithInputStyles.icon}></Icon>
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
}




ButtonWithInput.propTypes = {
    onPress: PropTypes.func,
    placeholder: PropTypes.string,
};

ButtonWithInput.defaultProps = {
    placeholder: 'Todo'
}

export default ButtonWithInput;
