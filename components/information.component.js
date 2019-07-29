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
        await fetch("http://172.24.27.93:5000/predict")
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
            {title: "Color", data: [this.state.vehInfo["color"]]},
            {title: "Vehicle Identification Number", data: [this.state.vehInfo["vehicle_identification_number"]]}
        ]
        return parsed_vehInfo
    }

render() {
    console.log(this.props.navigation.state.params.plate)
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
                    buttonStyle={{
                        borderColor:'#f4511e',
                        borderRadius: 20,
                        borderWidth: 2,
                        borderStyle: 'solid',
                        height: winHeight/15,
                        width: winWidth/2.5,
                    }}
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
          <View style={{ borderWidth: 1, borderColor: "grey" }}>
                    <Card height={winHeight}> 
                        <Text style={styles.lpText}>{this.props.navigation.state.params.plate}</Text>
                        <SectionList
                        sections={this.parse_json_info()}
                        renderItem={({ item }) => <Text 
                        style={{height: 40, width: winWidth, fontSize: 16, paddingTop: 10,
                        paddingRight: 10, paddingLeft: 10, paddingBottom: 10}}
                        >{item}</Text>}
                        renderSectionHeader={({ section }) => (
                        <Text 
                        style={{paddingTop: 2, paddingLeft: 10, 
                            paddingRight: 10, paddingBottom: 2, fontSize: 14, 
                            fontWeight: 'bold', backgroundColor: 'rgba(247,247,247,1.0)'}}>{section.title}</Text>
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