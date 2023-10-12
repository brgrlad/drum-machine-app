import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen'
import DrumPadScreen from './screens/DrumPadScreen';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Drum Machine" component={DrumPadScreen} />
    </Tab.Navigator>
  );
};

export default Navigator;