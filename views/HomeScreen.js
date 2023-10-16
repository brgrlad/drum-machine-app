import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { useContext } from "react";

import { StyleSheet, Text, View, Image } from "react-native";
import { UserChoiceContext } from "../context/UserChoiceContext";





export default function HomeScreen({ navigation }) {

  const { userSelection, setUserSelection } = useContext(UserChoiceContext);


  const navigate = (type) => {
    setUserSelection(type);
    navigation.navigate(type);
  };

  return (
    <>
      <TouchableOpacity
      debugger
        style={styles.imageWrapper}
        onPress={() => navigate('CasioScreen')}
      >
        <Image
          source={require("../assets/images/casio-rz1.jpg")}
          style={styles.image}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.imageWrapper}
        onPress={() => navigate('RolandScreen')}
      >
        <Image
          source={require("../assets/images/roland-tr-909.jpg")}
          style={styles.image}
        />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageWrapper: {
    flex: 1,
  },
  image: {
    width: "100%",
    alignSelf: "center",
    aspectRatio: 1,
    height: undefined,
  },
});

let arr = [true, false, false, false]