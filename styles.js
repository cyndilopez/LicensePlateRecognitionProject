import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');
const primaryStart = '#f18a69';
const primaryEnd = '#d13e60';
export const primaryGradientArray = [primaryStart, primaryEnd];

export default StyleSheet.create({
    container: {
        color: '#9FA8DA'
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
    }

});
