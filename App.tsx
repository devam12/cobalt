import React from 'react';
import Routing from './src/Routing';
import {View} from 'react-native';
import SoundPlayer from 'react-native-sound-player';

const App = () => {
  try {
    SoundPlayer.playSoundFile('music1', 'mp3');
    SoundPlayer.setNumberOfLoops(-1);
  } catch (e) {
    console.log(`cannot play the sound file`, e);
  }

  return (
    <View style={{flex: 1}}>
      <Routing />
    </View>
  );
};

export default App;
