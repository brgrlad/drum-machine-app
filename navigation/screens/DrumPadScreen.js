import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// AUDIO DOC: https://docs.expo.dev/versions/latest/sdk/audio/
import { Audio } from "expo-av";

// // on page load sounds get added to pads .... API CALL?

// // is sounds are stored in an array, use arr.map to generate HTML, so to avoid repetition in code

// //each pad will also have its own icon represent its sound: snare, kickdrum, hihat etc

// //sequencer?????

// // https://www.youtube.com/watch?v=bByJicHMwX8&ab_channel=GenUI
// // https://reactjsexample.com/a-drum-machine-application-built-using-react/

import clap from "../../assets/sounds/clap.wav";
import closedHat from "../../assets/sounds/closed-hat.wav";
import cowbell from "../../assets/sounds/cowbell.wav";
import crashCymbal from "../../assets/sounds/crash-cymbal.wav";
import kick from "../../assets/sounds/kick.wav";
import metronome from "../../assets/sounds/metronome.wav";
import openHat from "../../assets/sounds/open-hat.wav";
import ride from "../../assets/sounds/ride.wav";
import snare from "../../assets/sounds/snare.wav";
import tom1 from "../../assets/sounds/tom1.wav";
import tom2 from "../../assets/sounds/tom2.wav";
import tom3 from "../../assets/sounds/tom3.wav";

// map sounds arr and generate async call for each?

export default function DrumPadScreen() {
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
    }

    setSoundObj(res.sound);

    await res.sound.playAsync();
  }

  // async function playSound() {

  //   console.log('Loading Sound');

  //   const { sound } = await Audio.Sound.createAsync( require(`../../assets/sounds/clap.wav`)
  //   );
  //   setSound(sound);

  //   console.log(sound);
  //   await sound.playAsync();
  // }

  // const showArr = () => {

  //   arr.map((item) => console.log(arr[1]))
  // }

  // useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log('Unloading Sound');
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

  return (
    // MAIN CONTAINER
    <View style={styles.container}>


      <Text>CASIO RZ 1</Text>
      <Text>DIGITAL RYTHM CONTROLLER</Text>

      <StatusBar style="auto" />

      <View style={styles.drumPadRow}>

        <TouchableOpacity
          style={styles.drumPad}
          onPressIn={() => playSound("clap")}
        >
          <View title="Play Sound">
            <Text>Play!</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drumPad}
          onPressIn={() => playSound("closedHat")}
        >
          <View title="Play Sound">
            <Text>Closed Hat</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drumPad}
          onPressIn={() => playSound("crashCymbal")}
        >
          <View>
            <Text>Crash</Text>
          </View>
        </TouchableOpacity>

        </View>

        <View style={styles.drumPadRow}>
          <TouchableOpacity
            style={styles.drumPad}
            onPressIn={() => playSound("kick")}
          >
            <View></View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.drumPad}
            onPressIn={() => playSound("metronome")}
          >
            <View></View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.drumPad}
            onPressIn={() => playSound("openHat")}
          >
            <View></View>
          </TouchableOpacity>
        </View>

        <View style={styles.drumPadRow}>
          <TouchableOpacity
            style={styles.drumPad}
            onPressIn={() => playSound("ride")}
          >
            <View></View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.drumPad}
            onPressIn={() => playSound("snare")}
          >
            <View></View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.drumPad}
            onPressIn={() => playSound("tom1")}
          >
            <View></View>
          </TouchableOpacity>
        </View>

        <View style={styles.drumPadRow}>
          <TouchableOpacity
            style={styles.drumPad}
            onPressIn={() => playSound("tom2")}
          >
            <View></View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.drumPad}
            onPressIn={() => playSound("tom3")}
          >
            <View></View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.drumPad}
            onPressIn={() => playSound("closedHat")}
          >
            <View></View>
          </TouchableOpacity>
        </View>
      </View>

    //END MAIN CONTAINER
  );
}

let blue = '#90ebe9'
let black = '#424242'
let gray = '#e2e3de'


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
    // borderWidth: 5,
    // borderColor: gray,
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
  },
});
