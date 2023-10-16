import { useEffect, useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Audio } from "expo-av";
import { UserChoiceContext } from "../context/UserChoiceContext";

let arr = ['kick', 'clap', 'hat']

const DrumHit = () => {

  let myText = 'hey'



  return (

     // JUST TESTING THIS


    <TouchableOpacity
    style={styles.drumPad}
    onPressIn={() => playSound("clap")}
  >
    <View title="Play Sound">
      <Text style={styles.instrumentTitle}>{myText}</Text>
    </View>
  </TouchableOpacity>




  );
};

export default DrumHit;

// try and create a function that will generate the JSX for each drum sound

// perhaps start from an array with the name of the elements and forEach of this elements, render a block of code?

// use flex-wrap: wrap in order to make sure all pads are seen on screen

let blue = '#90ebe9'
let black = '#424242'
let gray = '#e2e3de'
let darkGray = '#626161'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
    alignItems: "center",
    justifyContent: "center",
  },
  drumPadRow: {
    flexDirection: "row",
  },
  drumPad: {
    borderWidth: 2,
    borderColor: gray,
    backgroundColor: 'black',



    width: 100,
    height: 100,
    margin: 12,

    shadowColor: blue,
    shadowOffset: {
      width: 6,
      height: 4,
    },
    shadowOpacity: 100,
    shadowRadius: 0.3,
    elevation: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',


  },
  title:{
    fontSize: 40,
    color: blue,
  },
  para: {
    color: gray,
  },
  headerWrapper: {
    marginBottom: 30,

  },
  instrumentTitle: {
    color: darkGray,
    fontSize: 10,


  }
});

