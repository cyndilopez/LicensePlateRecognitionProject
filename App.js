import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements'
import CameraPage from './components/camerpage.component';
import Photo from './components/photo.component';
import Information from './components/information.component';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import styles from './styles';
import * as Font from 'expo-font'
import Icon from 'react-native-vector-icons/FontAwesome';

class HomeScreen extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'robotomono-regular': require('./assets/fonts/RobotoMono-Regular.ttf'),
      'robotomono-bolditalic': require('./assets/fonts/RobotoMono-BoldItalic.ttf'),
      'permanentmarker': require('./assets/fonts/PermanentMarker-Regular.ttf')
    });
  this.setState({ fontLoaded: true })};

  static navigationOptions = ({navigation}) => {
    return {
    header: null,
    headerRight: (
      <Button
      buttonStyle={styles.homeCameraButton}
      icon={
        <Icon
          display="block"
          name="camera-retro"
          size={30}
          color="white"
        />}
        onPress={() => navigation.navigate('Camera')}
        />
    )
      }
  };
  render() {
    return (
      <ThemeProvider theme={this.props.navigation.state.params.theme}>
        <ImageBackground 
          source={require('./assets/background-blue-sky-california-small.jpg')} 
          style={styles.backgroundImage}>
        </ImageBackground>
        <View style={[styles.alignCenter, styles.overlay]}>
          { 
            this.state.fontLoaded ? (
              <Text style={[styles.homepageText]}>License Plate This</Text>
              ) : null
          }
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Camera')} style={[styles.button]}
          backgroundColor={'rgba(0,0,0,1.0)'}>      
            <Icon name="camera-retro"size={40} color="white"/>
            <Text style={[styles.text]}>Take a Picture</Text>
          </TouchableOpacity>
        </View>
      </ThemeProvider>
    );
  }
}


const RootStack = createStackNavigator(
  {
    Home: {screen: HomeScreen, params: {theme:{
      Button: {
        raised: true,
      },
    }
  }},
    Camera: CameraPage,
    PhotoPage: Photo,
    Info: Information,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
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


 




