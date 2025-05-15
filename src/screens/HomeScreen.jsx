import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import BackgroundVideo from '../components/BackgroundVideo';
import MaskedOverlay from '../components/MaskedOverlay';

const HomeScreen = ({ navigation }) => {
    return (
        <BackgroundVideo videoSource={require('../assets/video1.mp4')}>
            <View style={styles.container}>
                <MaskedOverlay>
                    <Text style={styles.text}>{'Home Screen'}</Text>
                    <View style={styles.buttonWrapper}>
                        <Button
                            title="Go to About"
                            onPress={() => navigation.navigate('About')}
                        //   color="#fff"
                        />
                    </View>
                </MaskedOverlay>
            </View>
        </BackgroundVideo>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    buttonWrapper: {
        marginTop: 20,
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: 10,
        overflow: 'hidden',
    },
    text: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
