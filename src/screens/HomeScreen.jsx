import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import BackgroundVideo from '../components/BackgroundVideo';
import MaskedOverlay from '../components/MaskedOverlay';
import Sound from 'react-native-sound';

const HomeScreen = ({navigation}) => {
  Sound.setCategory('Playback');

  const playSound = () => {
    const sound = new Sound('music1.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('Failed to load the sound', error);
        return;
      }

      // Play the sound
      sound.play(success => {
        if (success) {
          console.log('Sound played successfully');
        } else {
          console.log('Playback failed due to audio decoding errors');
        }

        // Release the resource when done
        sound.release();
      });
    });
  };

  return (
    <BackgroundVideo videoSource={require('../assets/video1.mp4')}>
      <View style={styles.container}>
        <MaskedOverlay>
          <Text style={styles.text}>{'Home Screen'}</Text>
          <View style={styles.buttonWrapper}>
            <Button
              title="Go to About"
              onPress={() => navigation.navigate('About')}
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
