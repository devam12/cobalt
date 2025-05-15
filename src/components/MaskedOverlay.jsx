// components/MaskedOverlay.js
import React, { Children } from 'react';
import { View, Text, StyleSheet, Platform, Dimensions } from 'react-native';
import { BlurView } from '@react-native-community/blur';

const { width, height } = Dimensions.get('window');
const MaskedOverlay = ({ text, children }) => {
    const content = (
        <View style={styles.innerContainer}>
            {children}
        </View>
    );

    return Platform.OS === 'ios' ? (
        <BlurView style={styles.blurredContainer} blurType="light" blurAmount={10} reducedTransparencyFallbackColor="white">
            {content}
        </BlurView>
    ) : (
        <View style={[styles.blurredContainer, styles.androidFallback]}>
            {content}
        </View>
    );
};

const styles = StyleSheet.create({
    blurredContainer: {
        // borderRadius: 20,
        overflow: 'hidden',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.1)',
        width:width, height: height,
        borderRadius:width/2,
    },
    androidFallback: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    innerContainer: {
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default MaskedOverlay;
