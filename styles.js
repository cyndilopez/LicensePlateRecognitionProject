import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');
const primaryStart = '#f18a69';
const primaryEnd = '#d13e60';
export const primaryGradientArray = [primaryStart, primaryEnd];

export default StyleSheet.create({
    homeCameraButton: {
        backgroundColor: '#f4511e',
    },
    button: {
        display: 'flex',
        height: 100,
        width: winWidth/3,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#a9a9a9',
        backgroundColor:'rgba(52, 52, 52, 0.8)',
        shadowColor: '#a9a9a9',
        opacity: 0.8,
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
    },
    text: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: '#FFFFFF',
    },
    alignCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    homepageText: {
        fontFamily: 'permanentmarker',
        fontSize: 50,
        textAlign: 'center'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'stretch',
        opacity: .6,
    },
    overlay: {
        position: 'absolute',
        top: 300,
        height: 5,
        left: 10,
    },
});
