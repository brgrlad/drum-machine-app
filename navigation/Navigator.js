import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import HomeScreen from '../views/HomeScreen'
import RolandScreen from '../views/RolandScreen';
import CasioScreen from '../views/CasioScreen';


const Tab = createBottomTabNavigator();

const Navigator = () => {


  return (
    <Tab.Navigator

    initialRouteName="Home"
      screenOptions={{

        tabBarStyle: style.tabBar, // Apply the tabBar style from your StyleSheet
        tabBarLabelStyle: style.tabBarLabel, // Apply the tabBarLabel style
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
      }}
    >
        <Tab.Screen name="CasioScreen" component={CasioScreen} />
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="RolandScreen" component={RolandScreen} />


    </Tab.Navigator>

    // <Tab.Navigator screenOptions={{ backgroundColor: 'tomato' }}>
    //     <Tab.Screen name="CasioScreen" component={CasioScreen} />
    //     <Tab.Screen name="Home" component={HomeScreen}/>
    //     <Tab.Screen name="RolandScreen" component={RolandScreen} />
    // </Tab.Navigator>
  );
};


export default Navigator;

const style = StyleSheet.create({

  container: {
    backgroundColor: 'black',

  },
  tabBar: {
    backgroundColor: 'gray',



  },



})