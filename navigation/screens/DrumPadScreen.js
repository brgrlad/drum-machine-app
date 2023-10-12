import {useState, useEffect} from 'react'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// AUDIO DOC: https://docs.expo.dev/versions/latest/sdk/audio/
import { Audio } from 'expo-av';


// // on page load sounds get added to pads .... API CALL?

// // is sounds are stored in an array, use arr.map to generate HTML, so to avoid repetition in code

// //each pad will also have its own icon represent its sound: snare, kickdrum, hihat etc

// //sequencer?????

// // https://www.youtube.com/watch?v=bByJicHMwX8&ab_channel=GenUI
// // https://reactjsexample.com/a-drum-machine-application-built-using-react/


import clap from '../../assets/sounds/clap.wav'
import hat from '../../assets/sounds/hat.wav'

// map sounds arr and generate async call for each?

// let arr = [kic, clap, hat]

export default function DrumPadScreen() {


  const [sound, setSound] = useState();


  async function playSound() {

    const { sound } = await Audio.Sound.createAsync( require(`../../assets/sounds/clap.wav`))

    setSound(sound);

    console.log(sound);
    await sound.playAsync();
  }

  // async function playSound() {

  //   console.log('Loading Sound');

  //   const { sound } = await Audio.Sound.createAsync( require(`../../assets/sounds/clap.wav`)
  //   );
  //   setSound(sound);

  //   console.log(sound);
  //   await sound.playAsync();
  // }

const showArr = () => {

  arr.map((item) => console.log(arr[1]))
}









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

      <StatusBar style="auto" />

      <View style={styles.drumPadRow}>
        <TouchableOpacity style={styles.drumPad} onPressIn={playSound}>
        <View  title="Play Sound" ><Text>Play!</Text></View></TouchableOpacity>


        <TouchableOpacity style={styles.drumPad} onPressIn={showArr}>
        <View >
          <Text>2</Text>
          </View>
        </TouchableOpacity>



        <View style={styles.drumPad}></View>
      </View>

      <View style={styles.drumPadRow}>
        <View style={styles.drumPad}></View>
        <View style={styles.drumPad}></View>
        <View style={styles.drumPad}></View>
      </View>

      <View style={styles.drumPadRow}>
        <View style={styles.drumPad}></View>
        <View style={styles.drumPad}></View>
        <View style={styles.drumPad}></View>
      </View>

      <View style={styles.drumPadRow}>
        <View style={styles.drumPad}></View>
        <View style={styles.drumPad}></View>
        <View style={styles.drumPad}></View>
      </View>

    </View>
    //END MAIN CONTAINER
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  drumPadRow: {
    flexDirection: "row",
  },
  drumPad: {
    borderColor: "red",
    borderWidth: 5,
    width: 100,
    height: 100,
    margin: 10,
  },
});
