import React from 'react';
import { View, Image } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles';
import { Camera } from 'expo-camera';

import {RNS3} from 'react-native-s3-upload'

// import { S3_BUCKET, S3_REGION, S3_KEY, S3_SECRET_ACCESS_KEY } from .env

console.log(S3_BUCKET)
console.log(S3_REGION)
console.log(S3_KEY),
console.log(S3_SECRET_ACCESS_KEY)

class Photo extends React.Component {
    state = {
        plate: null,
        state: null,
    };
    
    handleUploadPhoto = () => {
        console.log(this.props.navigation.state.params.captures.uri)
        const file = {
            uri: this.props.navigation.state.params.captures.uri,
            name: "image.png",
            type: "image/png"
        }
        const options = {
            bucket: S3_BUCKET,
            region: S3_REGION,
            accessKey: S3_KEY,
            secretKey: S3_SECRET_ACCESS_KEY,
            successActionStatus: 201
        }

        RNS3.put(file, options)
            .then(response => {                
                console.log("response", response.body);
            })
            .catch(error => {
                console.log(error.message)
                throw new Error("Failed to upload image to S3");

            });

        console.log('handling photo')

        // fetch("http://172.24.27.93:5000/detect")
        fetch("http://flask-env.mpf3fzmdm2.us-east-2.elasticbeanstalk.com/detect")
            .then(response => response.json()) 
            .then((responseJson) => {
                console.log("upload success", responseJson.plate);
                alert("Upload success!");
                this.setState({
                    plate: responseJson.plate},
                    () => this.props.navigation.navigate('Info', {plate: this.state.plate})
                   )
              })
            
            .catch(error => {
                console.log("upload error", error);
                alert("Upload failed!");
                throw error;
            });
        };   

    render() {
        let {uri, height, width} = this.props.navigation.state.params.captures
        if (this.props.navigation.state.params.cameraType == Camera.Constants.Type.back) {
            height = (height/10)
            width = (width/10)
        } else {
            height = (height/5)
            width = (width/5)
        }
        return (
            <View 
                horizontal={true}
                style={styles.imageContainer} 
            >
            <View style = {[{width: width, height: height}]} key={uri}>
                <Image source={ this.props.navigation.state.params.captures } style={{width: width, height: height}}/>
            </View>
            <View style={styles.galleryButton}>
                <Button 
                    title="Retake"
                    onPress={() => this.props.navigation.navigate('Camera')}
                />
            </View>
            <View style={styles.galleryButton}>
                <Button 
                    title=" Save "
                    onPress={this.handleUploadPhoto}
                />
            </View>
            
            </View>
        )};
}

    export default Photo