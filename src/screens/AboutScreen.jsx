import React from 'react';
import { Button, Text } from 'react-native';
import BackgroundVideo from '../components/BackgroundVideo';

const AboutScreen = ({ navigation }) => {
    return (
        <BackgroundVideo videoSource={require('../assets/video2.mp4')}>
            <Text style={{ color: 'white', fontSize: 24 }}>About Us</Text>
            <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
        </BackgroundVideo>
    );
};

export default AboutScreen;
