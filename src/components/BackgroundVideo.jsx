import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Video from 'react-native-video';

const { width, height } = Dimensions.get('window');

const BackgroundVideo = ({ videoSource, children }) => {
    return (
        <View style={styles.container}>
            <Video
                source={videoSource}
                style={styles.video}
                muted
                repeat
                resizeMode="cover"
            />
            <View style={styles.overlay}>
                {children}
            </View>
        </View>
    );
};

export default BackgroundVideo;

const styles = StyleSheet.create({
    container: { flex: 1 },
    video: {
        position: 'absolute',
        width,
        height,
        top: 0,
        left: 0,
        zIndex: -1,
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
