import React from 'react';
import {View, Text, SectionList, Image} from 'react-native'
import styles from './styles';
import { Camera } from 'expo-camera';
import { Button, Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Dimensions } from 'react-native';
import Loader from './loader.component';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

class Information extends React.Component {
    state = {
        vehInfoView: false,
        buttonView: true,
        vehInfo: null,
        loading: false,
    };

    getVehicleInfo = () => {

    }
    static navigationOptions = ({navigation}) => {
        return { 
        headerTitle: 'Details',
        headerRight: (
            <Button
            buttonStyle={styles.homeCameraButton}
            icon={
              <Icon
                name="home"
                size={40}
                color="white"
              />}
              onPress={() => navigation.navigate('Home')}
              />
          ),}
    };

    displayInfo = async () => {
        this.setState({
            loading: true,
        });
        let data = {
            method: 'POST',
            body: JSON.stringify({
              plate: this.props.navigation.state.params.plate
            }),
            headers: {
              'Accept':       'application/json',
              'Content-Type': 'application/json'            }
          }
        // await fetch("http://192.168.1.119:5000/predict", data)
        // await fetch("http://flask-env2.mpf3fzmdm2.us-east-2.elasticbeanstalk.com/predict", data)
        // await fetch("http://192.168.1.119:5000/predict", data)
        await fetch("http://flask-env2.mpf3fzmdm2.us-east-2.elasticbeanstalk.com/predict", data)
            .then(response => response.json()) 
            .then((responseJson) => {
                console.log("upload success", responseJson.plate);
                this.setState({loading: false, vehInfoView: true,
                    buttonView: false, vehInfo: responseJson})
            })
            .catch(error => {
                console.log("upload error", error);
                throw error;
            });   
    }

    parse_json_info = () => {
        let parsed_vehInfo = [];
        parsed_vehInfo = [
            {title: "Description", data: [this.state.vehInfo["description"]]},
            {title: "Registration Year", data: [this.state.vehInfo["registration_year"]]},
            {title: "Make", data: [this.state.vehInfo["car_make"]]},
            {title: "Model", data: [this.state.vehInfo["car_model"]]},
            {title: "Body Style ", data: [this.state.vehInfo["body_style"]]},
            {title: "Vehicle Identification Number", data: [this.state.vehInfo["vehicle_identification_number"]]}
        ]
        return parsed_vehInfo
    }

render() {
    let {uri, height, width} = this.props.navigation.state.params.captures

    if (this.props.navigation.state.params.cameraType == Camera.Constants.Type.back) {
        height = (height/8)
        width = winWidth
    } else {
        height = (height/4)
        width = winWidth
    }

    return (
        <View style={styles.infoContainer}>
            <Loader loading={this.state.loading} />
                <View style = {[{width: width, height: height}]} key={uri}>
                    <Image source={ this.props.navigation.state.params.captures } 
                    style={{width: width, height: height}}/>
            </View>

            {
                this.state.buttonView ? (
                <View>
                    <Card> 
                        <Text style={styles.lpText}>{this.props.navigation.state.params.plate}</Text>
                    </Card>
                    <Button
                    buttonStyle={styles.detailsButton}
                    type= 'outline'
                    raised={true}
                    title='Details'
                    titleStyle={{ color: 'black' }}
                    onPress={this.displayInfo}>
                </Button>
            </View>) : null
            }
            {
                this.state.vehInfoView ? (
                <View style={styles.container}>
                    <Card height={winHeight}> 
                        <Text style={styles.lpText}>{this.props.navigation.state.params.plate}</Text>
                        <SectionList
                        sections={this.parse_json_info()}
                        renderItem={({ item }) => <Text 
                        style={styles.items}
                        >{item}</Text>}
                        renderSectionHeader={({ section }) => (
                        <Text 
                        style={styles.header}>{section.title}</Text>
                        )} 
                        keyExtractor={(item, index) => index}
                        />
                    </Card></View>) : null
            }
        </View>
        );
    }
}

export default Information