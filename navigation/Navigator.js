import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";

//VIEWS
import HomeScreen from "../views/HomeScreen";
import RolandScreen from "../views/RolandScreen";
import CasioScreen from "../views/CasioScreen";

const Tab = createBottomTabNavigator();

const Navigator = () => {

  return (

    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        tabBarStyle: style.tabBar,
        tabBarLabelStyle: style.tabBarLabel, //
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
      }}
    >
      {/* CASIO SCREEN */}
      <Tab.Screen
        name="CasioScreen"
        component={CasioScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon
              name="drum"
              size={20}
              style={style.tabBar}
            ></FontAwesomeIcon>
          ),
          tabBarLabel: "Casio RZ-1",
          title: 'CASIO',
        }}
      />

      {/* HOME SCREEN */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon name="home" size={20}></FontAwesomeIcon>
          ),

        }}
      />

      {/* ROLAND SCREEN */}
      <Tab.Screen
        name="RolandScreen"
        component={RolandScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon name="drum" size={20}></FontAwesomeIcon>
          ),
          tabBarLabel: "Roland TR-909",
          title: 'ROLAND',
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigator;

const style = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
  tabBar: {
    display: "flex",
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});