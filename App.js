import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Root from './src/containers/root.js';

const App = () => {
  return (
    <NavigationContainer>
      {/* ==> Root Navigation From Where Routing Started */}
      <Root />
    </NavigationContainer>
  );
};

export default App;
