import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './src/routes/HomeStack';

const App = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default App;
