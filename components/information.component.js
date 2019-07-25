import React from 'react';
import {View, Text} from 'react-native'
import styles from './styles';

class Information extends React.Component {
    state = {
        vehInfo: null,
    };

    getVehicleInfo = () => {

    }



render() {
    console.log(this.props.navigation.state.params.plate)
    return (
        <View style={styles.infoContainer}><Text style={styles.lpText}>{this.props.navigation.state.params.plate}</Text></View>
        );
    }
}

export default Information