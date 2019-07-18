import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        color:'#7FFF00',
    },
    preview: {
        height: winHeight+50,
        width: winWidth,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
    alignCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomToolbar: {
        width: winWidth,
        position: 'absolute',
        height: 150,
        top: 0,
    },
    captureBtn: {
        width: 120,
        height: 120,
        borderWidth: 20,
        borderRadius: 120,
        borderColor: "#FFFFFF",
    },
    captureBtnActive: {
        width: 200,
        height: 200,
    },
    captureBtnInternal: {
        width: 76,
        height: 76,
        borderWidth: 2,
        borderRadius: 76,
        backgroundColor: "red",
        borderColor: "transparent",
    },

    galleryImageContainer: { 
        width: winWidth, 
        height: winHeight,
        flex: 4,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center", 
        flexWrap: 'wrap',
        marginTop: 5, 
       
    },

    galleryButton: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',  

    },
    button: {
    }

});