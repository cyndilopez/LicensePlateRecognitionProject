import React from 'react';
import { View, Image } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles';

function Photo (props) {
    console.log(props.navigation.state.params.captures)
    let {uri, height, width} = props.navigation.state.params.captures
    height = (height/5)
    width = (width/5)
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
            containerViewStyle={{width: '100%', marginLeft: 0}}            
            title="Retake"
            onPress={() => this.props.navigation.navigate('Camera')}
        />
    </View>
    <View style={styles.galleryButton}>
        <Button
            containerViewStyle={{width: '100%', marginLeft: 0}}            
            title="Save"
            onPress={() => this.props.navigation.navigate('Camera')}
        />
    </View>
      
    </View>
    )};

    export default Photo