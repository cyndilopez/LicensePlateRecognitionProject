import React from 'react';
import { View, Image } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles';
import { Camera } from 'expo-camera';

function Photo (props) {
    console.log(props.navigation.state.params.captures)
    let {uri, height, width} = props.navigation.state.params.captures
    if (props.navigation.state.params.cameraType == Camera.Constants.Type.back) {
        height = (height/10)
        width = (width/10)
    } else {
        height = (height/5)
        width = (width/5)
    }

    return (
    <View 
        horizontal={true}
        style={styles.galleryImageContainer} 
    >
    <View style = {{width: width, height: height}} key={props.navigation.state.params.captures.uri}>
        <Image source={ props.navigation.state.params.captures } style={{width: width, height: height}}/>
    </View>
    <View style={styles.galleryButton}>
        <Button
            title="Retake"
            onPress={() => props.navigation.navigate('Camera')}
        />
    </View>
    <View style={styles.galleryButton}>
        <Button
            title=" Save "
            onPress={() => props.navigation.navigate('Info')}
        />
    </View>
      
    </View>
    )};

    export default Photo