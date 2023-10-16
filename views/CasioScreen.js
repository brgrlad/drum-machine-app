import { useEffect, useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Audio } from "expo-av";
import { UserChoiceContext } from "../context/UserChoiceContext";



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
import rimshot from "../assets/sounds/casio/rimshot.wav";

let instrumentArr = [
  clap,
  closedHat,
  cowbell,
  crashCymbal,
  kick,
  metronome,
  openHat,
  ride,
  snare,
  tom1,
  tom2,
  rimshot,
];

export default function CasioScreen() {

  const { userSelection } = useContext(UserChoiceContext);
  const [soundObj, setSoundObj] = useState();

  async function playSound(id) {

    let res;

    if (id === clap) {
      res = await Audio.Sound.createAsync(clap);
    } else if (id === closedHat) {
      res = await Audio.Sound.createAsync(closedHat);
    } else if (id === cowbell) {
      res = await Audio.Sound.createAsync(cowbell);
    } else if (id === crashCymbal) {
      res = await Audio.Sound.createAsync(crashCymbal);
    } else if (id === kick) {
      res = await Audio.Sound.createAsync(kick);
    } else if (id === metronome) {
      res = await Audio.Sound.createAsync(metronome);
    } else if (id === openHat) {
      res = await Audio.Sound.createAsync(openHat);
    } else if (id === ride) {
      res = await Audio.Sound.createAsync(ride);
    } else if (id === snare) {
      res = await Audio.Sound.createAsync(snare);
    } else if (id === tom1) {
      res = await Audio.Sound.createAsync(tom1);
    } else if (id === tom2) {
      res = await Audio.Sound.createAsync(tom2);
    } else if (id === rimshot) {
      res = await Audio.Sound.createAsync(rimshot);
    }

    setSoundObj(res.sound);

    await res.sound.playAsync();
  }

  useEffect(() => {
    console.log(clap)
  }, []);

  let renderInstrument = (instrument, key) => {

    return (
      <TouchableOpacity
        key={key}
        style={styles.drumPad}
        onPressIn={() => playSound(instrument)}
      >
        <View title="Play Sound">


          <Text style={styles.instrumentTitle}>{instrument}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>

      <View style={styles.headerWrapper}>
        <Text style={styles.title}>CASIO RZ-1</Text>
        <Text style={styles.para}>RYTHM COMPOSER</Text>
      </View>

      <StatusBar style="auto" />

      <View style={styles.casioWrapper}>
        {instrumentArr.map((item, index) => renderInstrument(item, index))}
      </View>
    </View>
  );
}

//COLOR PALLET
let blue = "#90ebe9";
let black = "#424242";
let gray = "#e2e3de";
let darkGray = "#626161";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: "center",
    justifyContent: "center",
    textAlign: 'center',
  },
  casioWrapper: {

    alignItems: "center",
    justifyContent: "center",

    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',

  },

  drumPad: {
    borderWidth: 2,
    borderColor: gray,
    backgroundColor: "black",

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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headerWrapper: {
    backgroundColor: 'white',


    textAlign: 'center',
    backgroundColor: 'pink',
  },
  title: {
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
  },
});
