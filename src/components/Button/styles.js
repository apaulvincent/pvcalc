import ES from 'react-native-extended-stylesheet';

// SHARED STYLES
export default ES.create({
    footer: {

    },
    TextInput: {
        alignSelf: 'stretch',
        padding: 20,
        borderTopWidth: 2,
        borderTopColor: '#ddd'
    },
    addButton: {
        position: 'absolute',
        zIndex: 1,
        right: 12,
        bottom: 12,
        width: 82,
        height: 42,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 0,
        backgroundColor: '$primary_color'
    },
    addButtonText: {
        color: '#fff'
    }
});

//  STYLES FOR BUTTON WITH INPUT
export const ButtonWithInputStyles = ES.create({
    container: {
        borderTopWidth: 2,
        borderTopColor: '#ddd',
        flexDirection: "row",
    },
    TextInput: {
        flex: 1,
        padding: 15,
    },
    addButton: {
        zIndex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 0,
    },
    addButtonText: {
        color: '#fff'
    },
    icon: {
        fontSize: 32,
        color: '$primary_color',
    }
})