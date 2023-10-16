import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../views/HomeScreen'
import RolandScreen from '../views/RolandScreen';
import CasioScreen from '../views/CasioScreen';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="CasioScreen" component={CasioScreen} />
      <Tab.Screen name="RolandScreen" component={RolandScreen} />
    </Tab.Navigator>
  );
};

export default Navigator;