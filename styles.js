import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');
const primaryStart = '#f18a69';
const primaryEnd = '#d13e60';
export const primaryGradientArray = [primaryStart, primaryEnd];

export default StyleSheet.create({
    container: {
        height: winHeight,
    },
    homeCameraButton: {
        backgroundColor: '#f4511e',
    },
    generalButton: {
        backgroundColor: '#f4511e'
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
        paddingTop: 22,
        justifyContent: 'center',
        alignItems: 'center',

    },

    lpText: {
        fontFamily: 'robotomono-bolditalic',
        fontSize: 20,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
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
