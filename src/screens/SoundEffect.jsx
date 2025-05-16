import React from 'react';
import {Button, View} from 'react-native';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');

const SoundEffect = () => {
  const playEffect = () => {
    const effect = new Sound('click.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Error loading effect sound', error);
        return;
      }
      effect.play((success) => {
        if (success) {
          console.log('Effect sound played');
        }
        effect.release();
      });
    });
  };

  return (
    <View>
      <Button title="Play Sound Effect" onPress={playEffect} />
    </View>
  );
};

export default SoundEffect;
