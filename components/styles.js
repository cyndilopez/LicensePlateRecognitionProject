import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
    homeCameraButton: {
        backgroundColor: '#f4511e',
    },
    container: {
        borderWidth: 1,
        borderColor: "grey",
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
    photoButton: {
        backgroundColor:'#f4511e',
        borderRadius: 20,
        height: winHeight/15,
        width: winWidth/2.5    
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
    detailsButton: {
        borderColor:'#f4511e',
        borderRadius: 20,
        borderWidth: 2,
        borderStyle: 'solid',
        height: winHeight/15,
        width: winWidth/2.5,
    },
    items: {
        height: 40, 
        width: winWidth, 
        fontSize: 16, 
        paddingTop: 10,
        paddingRight: 10, 
        paddingLeft: 10, 
        paddingBottom: 10
    },
    header: {
        paddingTop: 2, 
        paddingLeft: 10, 
        paddingRight: 10, 
        paddingBottom: 2, 
        fontSize: 14, 
        fontWeight: 'bold', 
        backgroundColor: 'rgba(247,247,247,1.0)' 
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
