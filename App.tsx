import React, {useState} from 'react';
// import {Button, Text} from 'react-native';
// import BackgroundVideo from './src/components/BackgroundVideo';
import Routing from './src/Routing';

const App = () => {
  // const [screen, setScreen] = useState('home');

  return (
    <Routing />
    // <BackgroundVideo>
    //   {screen === 'home' ? (
    //     <>
    //       <Text style={{color: 'white', fontSize: 24}}>Welcome</Text>
    //       <Button title="Go to About" onPress={() => setScreen('about')} />
    //     </>
    //   ) : (
    //     <>
    //       <Text style={{color: 'white', fontSize: 24}}>About Us</Text>
    //       <Button title="Back" onPress={() => setScreen('home')} />
    //     </>
    //   )}
    // </BackgroundVideo>
  );
};

export default App;
