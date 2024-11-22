/* eslint-disable no-trailing-spaces */
/* eslint-disable eol-last */
/* eslint-disable react-native/no-inline-styles */
import { View, Text, Button } from 'react-native';
import React from 'react';
import FirstComponrnt from './src/Components/FirstComponrnt';
import SignIn from './src/Components/SignIn/SignIn';
import SignUp from './src/Components/SignUp/SignUp';

const App = () => {
  return (
    <View>
      {/* <Text style={{fontSize:30}}>App</Text>
      <Text style={{fontSize:30}}>App Developer</Text>
      <Text style={{fontSize:30}}>Reactv Native learner</Text> */}
      <SignUp/>
      {/* <Button title="press"/> */}
    </View>
  
  );

};

export default App;