import ES from 'react-native-extended-stylesheet'

export default ES.create({
    container: {
        backgroundColor: '#e0e0e0',
        borderTopWidth: 1,
        borderTopColor: "#ddd",
    },
    background: {
        position: 'absolute',
        right: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    foreground: {
        left: 0,
        right: 0,
        backgroundColor: '#ffffff'
    },
    button: {
        width: 40,
        height: 40,
        marginRight: 25,
        color: '$primary_color',
        fontSize: 40
    }
})
