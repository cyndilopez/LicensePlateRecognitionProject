import React from 'react';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import { Col, Row, Grid } from "react-native-easy-grid";
import { View, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity } from 'react-native';

import styles from './styles';

const { FlashMode: CameraFlashModes, Type: CameraTypes } = Camera.Constants;


function Toolbar (props) { 
    let capturing = false
    let cameraType = props.cameraType
    let flashMode = props.flashMode
 

    return (
        <Grid style={styles.bottomToolbar}>

            <Row>
                <Col style={styles.alignCenter}>
                    <TouchableOpacity onPress={ props.setFlashMode( 
                        flashMode === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off
                    )}>
                        <Ionicons
                            name={flashMode == CameraFlashModes.on ? "md-flash" : 'md-flash-off'}
                            color="white"
                            size={100}
                        />
                    </TouchableOpacity>
                </Col>
                <Col size={2} style={styles.alignCenter}>
                    <TouchableHighlight
                        onPress={props.onShortCapture}>
                        <View style={[styles.captureBtn, capturing && styles.captureBtnActive]}>
                        </View>
                    </TouchableHighlight>
                </Col>
                <Col style={styles.alignCenter}>
                    <TouchableOpacity onPress={() => props.setCameraType(
                        cameraType === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
                    )}>
                        <Ionicons
                            name="md-reverse-camera"
                            color="white"
                            size={100}
                        />
                    </TouchableOpacity>
                </Col>
            </Row>
        </Grid>
    )
}

export default Toolbar;