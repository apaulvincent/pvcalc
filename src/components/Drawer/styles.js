import ES from 'react-native-extended-stylesheet';

export default ES.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    spacer: {
        height: 120
    },
    
    
    // HEADER
    header: {
        height: 120,
        backgroundColor: '#fff',
        borderRadius: 0,
        borderTopWidth: 1,
        borderTopColor: '#ddd'
    },
    dragee: {
        backgroundColor: '#ddd',
        width: 60,
        height: 8,
        position: 'absolute',
        top: 12,
        left: '50%',
        borderRadius: 4,
        transform: [{translate: [-30, 0, 0]}]
    },
    headerContent: {
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 20
    },
    

    // BODY CONTENT
    main: {
        height: 200,
        minHeight: 200,
        backgroundColor: '#fff',
        borderWidth: 0,
    }
})
