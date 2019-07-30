import React from 'react';
import {
  View,
  Modal,
  ActivityIndicator
} from 'react-native';
import styles from './styles';

const Loader = props => {
    const {
        loading,
        ...attributes
    } = props;
return (
    <Modal
        transparent={true}
        animationType={'none'}
        visible={loading}>
        <View style={styles.modalBackground}>
            <View style={styles.activityIndicatorWrapper}>
                <ActivityIndicator 
                    animating={loading} />
            </View>
        </View>
    </Modal>
  )
}

export default Loader;