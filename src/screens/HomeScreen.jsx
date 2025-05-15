import React from 'react';
import { Button, Text } from 'react-native';
import BackgroundVideo from '../components/BackgroundVideo';

const HomeScreen = ({ navigation }) => {
    return (
        <BackgroundVideo videoSource={require('../assets/video1.mp4')}>
            <Text style={{ color: 'white', fontSize: 24 }}>Welcome Home</Text>
            <Button title="Go to About" onPress={() => navigation.navigate('About')} />
        </BackgroundVideo>
    );
};

export default HomeScreen;
