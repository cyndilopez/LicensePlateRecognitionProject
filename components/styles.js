import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');
const primaryStart = '#f18a69';
const primaryEnd = '#d13e60';
export const primaryGradientArray = [primaryStart, primaryEnd];

export default StyleSheet.create({
    
    container: {
        color: 'red'
    },
    homeCameraButton: {
        backgroundColor: '#f4511e',
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
        width: 100,
        height: 100,
        borderWidth: 10,
        borderRadius: 100,
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

    imageContainer: { 
        width: winWidth, 
        height: winHeight,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: "center", 
        marginTop: 10, 
       
    },

    galleryButton: {
        flex: 1,
        justifyContent: 'center',  

    },

    infoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },

    lpText: {
        fontFamily: 'robotomono-bolditalic',
        fontSize: 20,
    },
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 100,
        width: 100,
        borderRadius: 10, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }

});
