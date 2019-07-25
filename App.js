import React from 'react';
import { View, Button, Text} from 'react-native';
import NavigationBar from 'react-native-navbar';
import CameraPage from './components/camerpage.component';
import Photo from './components/photo.component';
import { LinearGradient } from 'expo-linear-gradient'
import Information from './components/information.component';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import styles from './styles';
import {primaryGradientArray} from './components/styles'
import * as Font from 'expo-font'
import { Provider as PaperProvider } from 'react-native-paper';

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

      <View height = {1000} backgroundColor = {'red'}>

      <NavigationBar 
       title = {titleConfig}
       height={50}
       rightButton = {rightButtonConfig}
       leftButton = {leftButtonConfig}
       tintColor= {'red'}
       fontFamily= 'robotomono-bolditalic'

       />

      <Button
        
        title="Go to Camera"
        onPress={() => this.props.navigation.navigate('Camera')}
        buttonStyle={styles.container}
        fontSize = {20}
      />

      </View>

    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Camera: CameraPage,
    PhotoPage: Photo,
    Info: Information,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'robotomono-regular': require('./assets/fonts/RobotoMono-Regular.ttf'),
      'robotomono-bolditalic': require('./assets/fonts/RobotoMono-BoldItalic.ttf')
    });
  }
  render() {
 
    return (
        <AppContainer/>

    )
  }
}


 




