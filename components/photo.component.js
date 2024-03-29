import React from 'react';
import { View, Image } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './styles';
import { Camera } from 'expo-camera';

import {RNS3} from 'react-native-s3-upload'

import Loader from './loader.component'

let keyz = require('./keyz.json')
S3_BUCKET = keyz[0].S3_BUCKET
S3_REGION = keyz[0].S3_REGION
S3_KEY = keyz[0].S3_KEY
S3_SECRET_ACCESS_KEY = keyz[0].S3_SECRET_ACCESS_KEY

class Photo extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            plate: null,
            state: null,
            loading: false,
        };
    }
    
    handleUploadPhoto = async () => {
        this.setState({
            loading: true
        })

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

        await RNS3.put(file, options)
            .then(response => {                
                console.log("response", response.body);
            })
            .catch(error => {
                console.log(error.message)
                throw new Error("Failed to upload image to S3");

            });

        console.log('handling photo')
        await fetch("http://flask-env2.mpf3fzmdm2.us-east-2.elasticbeanstalk.com/detect")
            .then(response => response.json()) 
            .then((responseJson) => {
                console.log("upload success", responseJson.plate);
                // alert("Upload success!");
                this.setState({
                    plate: responseJson.plate, loading: false},
                    () => this.props.navigation.navigate('Info', {plate: this.state.plate, captures: this.props.navigation.state.params.captures, cameraType: this.props.navigation.state.params.cameraType})
                   )}
                )
            .catch(error => {
                console.log("upload error", error);
                alert("Upload failed!");
                throw error;
            });
        };   

    render() {
        let {uri, height, width} = this.props.navigation.state.params.captures
        if (this.props.navigation.state.params.cameraType == Camera.Constants.Type.back) {
            height = (height/8)
            width = (width/8)
        } else {
            height = (height/5)
            width = (width/5)
        }
        return (
            <View 
                horizontal={true}
                style={styles.imageContainer}>
                <Loader loading={this.state.loading}/>
                <View style = {[{width: width, height: height}]} key={uri}>
                    <Image source={ this.props.navigation.state.params.captures } style={{width: width, height: height}}/>
                </View>
                <View style={styles.galleryButton}>
                    <Button 
                        buttonStyle={styles.photoButton}
                        raised={true}
                        title="Retake"
                        onPress={() => this.props.navigation.navigate('Camera')}
                    />
                </View>
                <View style={styles.galleryButton}>
                    <Button 
                        buttonStyle={styles.photoButton}
                        raised={true}
                        title="Save!"
                        onPress={this.handleUploadPhoto}
                    />
                </View>
            </View>
        )};
}

    export default Photo