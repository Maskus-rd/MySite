// Import necessary components from React and React Native
import React from 'react';
import { AppRegistry, View, Text } from 'react-native';

// Define your main component
const MyApp = () => (
  <View>
    <Text>My Website</Text>
  </View>
);

// Register the component
AppRegistry.registerComponent('MyApp', () => MyApp);

// Start the app by specifying the root component
AppRegistry.runApplication('MyApp', { rootTag: document.getElementById('root') });
