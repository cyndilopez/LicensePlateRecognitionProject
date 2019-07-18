import React from 'react';
import { View, Button, Text} from 'react-native';
import NavigationBar from 'react-native-navbar'

import CameraPage from './components/CameraPage'
import Photo from './components/photo.component';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import styles from './components/styles';

class HomeScreen extends React.Component {
  
  render() {
    const titleConfig = {
      title: 'LPR - Ada',
    };

    const rightButtonConfig = {
      title: 'Camera',
      handler: () => this.props.navigation.navigate('Camera'),
    };

    const leftButtonConfig = {
      title: 'Home',
      handler: () => this.props.navigation.navigate('Home'),
    };
    
    return (
      <View style={styles.container}>
      <NavigationBar      
       title = {titleConfig}
       height={50}
       rightButton = {rightButtonConfig}
       leftButton = {leftButtonConfig}
       />

      <Button
        title="Go to Camera"
        onPress={() => this.props.navigation.navigate('Camera')}
      />
      </View>
    //   <View>
    //     <CameraPage />
    // </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Camera: CameraPage,
    PhotoPage: Photo,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


 




