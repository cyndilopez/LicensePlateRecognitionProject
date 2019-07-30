import React from 'react';
import { Camera } from 'expo-camera';
import { Text, View } from 'react-native';
import * as Permissions from 'expo-permissions';
import Toolbar from './toolbar.component';

import styles from './styles'

class CameraPage extends React.Component {
  camera = null;
  state = {
      captures: null,
      // setting flash to be turned off by default
      flashMode: Camera.Constants.FlashMode.off,
      capturing: false,
      // start the back camera by default
      cameraType: Camera.Constants.Type.back,
      hasCameraPermission: null,
  };
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  setFlashMode = (flashMode) => {
    return () => {
      this.setState({ flashMode })
    }
  };
  setCameraType = (cameraType) => this.setState({ cameraType });
 
  handleShortCapture = async () => {
      const photoData = await this.camera.takePictureAsync();
      this.setState({ capturing: false, captures: photoData })
      this.props.navigation.navigate('PhotoPage', {captures: photoData, cameraType: this.state.cameraType})
  };


  render() {
    const { hasCameraPermission, flashMode, cameraType} = this.state;
    if (hasCameraPermission === null) {
      return (<View ><Text></Text></View>);
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <React.Fragment>
          <View>
            <Camera 
              type={cameraType}
              flashMode={flashMode}
              style={styles.preview}
              ref={camera => this.camera = camera}
              />
          </View>

          <Toolbar 
            flashMode={flashMode}
            cameraType={cameraType}
            setFlashMode={this.setFlashMode}
            setCameraType={this.setCameraType}
            onShortCapture={this.handleShortCapture}
            />

        </React.Fragment>
      );
    }
  }
}

export default CameraPage