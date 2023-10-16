import { useEffect, useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from "react-native";
import { Audio } from "expo-av";
import { UserChoiceContext } from "../context/UserChoiceContext";


// // https://www.youtube.com/watch?v=bByJicHMwX8&ab_channel=GenUI
// // https://reactjsexample.com/a-drum-machine-application-built-using-react/

import clap from "../assets/sounds/casio/clap.wav";
import closedHat from "../assets/sounds/casio/closed-hat.wav";
import cowbell from "../assets/sounds/casio/cowbell.wav";
import crashCymbal from "../assets/sounds/casio/crash-cymbal.wav";
import kick from "../assets/sounds/casio/kick.wav";
import metronome from "../assets/sounds/casio/metronome.wav";
import openHat from "../assets/sounds/casio/open-hat.wav";
import ride from "../assets/sounds/casio/ride.wav";
import snare from "../assets/sounds/casio/snare.wav";
import tom1 from "../assets/sounds/casio/tom1.wav";
import tom2 from "../assets/sounds/casio/tom2.wav";
import tom3 from "../assets/sounds/casio/tom3.wav";
import rimshot from "../assets/sounds/casio/rimshot.wav";


export default function CasioScreen() {


  const { userSelection } = useContext(UserChoiceContext);
  const [soundObj, setSoundObj] = useState();

  async function playSound(id) {
    let res;

    if (id === "clap") {
      res = await Audio.Sound.createAsync(clap);
    } else if (id === "closedHat") {

        res = await Audio.Sound.createAsync(closedHat);

    } else if (id === "cowbell") {
      res = await Audio.Sound.createAsync(cowbell);
    } else if (id === "crashCymbal") {
      res = await Audio.Sound.createAsync(crashCymbal);
    } else if (id === "kick") {
      res = await Audio.Sound.createAsync(kick);
    } else if (id === "metronome") {
      res = await Audio.Sound.createAsync(metronome);
    } else if (id === "openHat") {
      res = await Audio.Sound.createAsync(openHat);
    } else if (id === "ride") {
      res = await Audio.Sound.createAsync(ride);
    } else if (id === "snare") {
      res = await Audio.Sound.createAsync(snare);
    } else if (id === "tom1") {
      res = await Audio.Sound.createAsync(tom1);
    } else if (id === "tom2") {
      res = await Audio.Sound.createAsync(tom2);
    } else if (id === "tom3") {
      res = await Audio.Sound.createAsync(tom3);
    } else if (id === "rimshot") {
      res = await Audio.Sound.createAsync(rimshot);
    }

    setSoundObj(res.sound);

    await res.sound.playAsync();
  }


  useEffect(() => {
    // console.log(userSelection)

  },[])



  return (
    // MAIN CONTAINER


    <View style={styles.container}>



      <View style={styles.headerWrapper}>

        <Text style={styles.title}>CASIO RZ 1</Text>
        <Text style={styles.para}>DIGITAL RYTHM CONTROLLER</Text>

        </View>

      <StatusBar style="auto" />

      <View style={styles.drumPadRow}>

        <TouchableOpacity
          style={styles.drumPad}
          onPressIn={() => playSound("clap")}
        >
          <View title="Play Sound">
            <Text style={styles.instrumentTitle}>CLAP</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drumPad}
          onPressIn={() => playSound("closedHat")}
        >
          <View title="Play Sound">
            <Text style={styles.instrumentTitle}>CLOSED HAT</Text>
          </View>


        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drumPad}
          onPressIn={() => playSound("crashCymbal")}
        >
          <View title="Play Sound">
            <Text style={styles.instrumentTitle}>CYMBAL</Text>
          </View>
        </TouchableOpacity>

        </View>

        <View style={styles.drumPadRow}>
          <TouchableOpacity
            style={styles.drumPad}
            onPressIn={() => playSound("kick")}
          >
          <View title="Play Sound">
            <Text style={styles.instrumentTitle}>KICK DRUM</Text>
          </View>
        </TouchableOpacity>

          <TouchableOpacity
            style={styles.drumPad}
            onPressIn={() => playSound("metronome")}
          >
          <View title="Play Sound">
            <Text style={styles.instrumentTitle}>METRONOME</Text>
          </View>
        </TouchableOpacity>

          <TouchableOpacity
            style={styles.drumPad}
            onPressIn={() => playSound("openHat")}
          >
          <View title="Play Sound">
            <Text style={styles.instrumentTitle}>OPEN HAT</Text>
          </View>
        </TouchableOpacity>
        </View>

        <View style={styles.drumPadRow}>
          <TouchableOpacity
            style={styles.drumPad}
            onPressIn={() => playSound("ride")}
          >
          <View title="Play Sound">
            <Text style={styles.instrumentTitle}>RIDE</Text>
          </View>
        </TouchableOpacity>

          <TouchableOpacity
            style={styles.drumPad}
            onPressIn={() => playSound("snare")}
          >
          <View title="Play Sound">
            <Text style={styles.instrumentTitle}>SNARE</Text>
          </View>
        </TouchableOpacity>

          <TouchableOpacity
            style={styles.drumPad}
            onPressIn={() => playSound("tom1")}
          >
          <View title="Play Sound">
            <Text style={styles.instrumentTitle}>TOM 1</Text>
          </View>
        </TouchableOpacity>
        </View>

        <View style={styles.drumPadRow}>
          <TouchableOpacity
            style={styles.drumPad}
            onPressIn={() => playSound("tom2")}
          >
          <View title="Play Sound">
            <Text style={styles.instrumentTitle}>TOM 2</Text>
          </View>
        </TouchableOpacity>

          <TouchableOpacity
            style={styles.drumPad}
            onPressIn={() => playSound("tom3")}
          >
          <View title="Play Sound">
            <Text style={styles.instrumentTitle}>TOM 3</Text>
          </View>
        </TouchableOpacity>

          <TouchableOpacity
            style={styles.drumPad}
            onPressIn={() => playSound("rimshot")}
          >
          <View title="Play Sound">
            <Text style={styles.instrumentTitle}>RIMSHOT</Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>

    //END MAIN CONTAINER
  );
}


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
  image: {


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

