import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Audio } from "expo-av";


import clap01 from "../assets/sounds/roland/clap01.wav";
import clap02 from "../assets/sounds/roland/clap02.wav";
import closedHat from "../assets/sounds/roland/closed-hat.wav";
import conga01 from "../assets/sounds/roland/conga01.wav";
import conga02 from "../assets/sounds/roland/conga02.wav";
import kick01 from "../assets/sounds/roland/kick01.wav";
import kick02 from "../assets/sounds/roland/kick02.wav";
import openHat01 from "../assets/sounds/roland/open-hat01.wav";
import openHat02 from "../assets/sounds/roland/open-hat02.wav";
import rimShot from "../assets/sounds/roland/rim-shot.wav";
import shaker from "../assets/sounds/roland/shaker.wav";
import snare from "../assets/sounds/roland/snare.wav";

let instrumentArr = [
  clap01,
  clap02,
  closedHat,
  conga01,
  conga02,
  kick01,
  kick02,
  openHat01,
  openHat02,
  rimShot,
  shaker,
  snare,
];

const RolandScreen = () => {

  const [soundObj, setSoundObj] = useState();

  async function playSound(id) {
    let res;

    if (id === clap01) {
      res = await Audio.Sound.createAsync(clap01);
    } else if (id === clap02) {
      res = await Audio.Sound.createAsync(clap02);
    } else if (id === closedHat) {
      res = await Audio.Sound.createAsync(closedHat);
    } else if (id === conga01) {
      res = await Audio.Sound.createAsync(conga01);
    } else if (id === conga02) {
      res = await Audio.Sound.createAsync(conga02);
    } else if (id === kick01) {
      res = await Audio.Sound.createAsync(kick01);
    } else if (id === kick02) {
      res = await Audio.Sound.createAsync(kick02);
    } else if (id === openHat01) {
      res = await Audio.Sound.createAsync(openHat01);
    } else if (id === openHat02) {
      res = await Audio.Sound.createAsync(openHat02);
    } else if (id === rimShot) {
      res = await Audio.Sound.createAsync(rimShot);
    } else if (id === shaker) {
      res = await Audio.Sound.createAsync(shaker);
    } else if (id === snare) {
      res = await Audio.Sound.createAsync(snare);
    } else if (id === rimShot) {
      res = await Audio.Sound.createAsync(rimShot);
    }

    setSoundObj(res.sound);

    await res.sound.playAsync();
  }

  //RENDER EACH DRUM INSTRUMENT IN THE UI
  let renderInstrument = (instrument, key) => {


    return (
      <TouchableOpacity

        key={key}

        style={styles.drumPad}
        onPressIn={() => playSound(instrument)}
      >
        <View title="Play Sound">

          {/* ADD INSTRUMENT NAME HERE??? */}

          <Text style={styles.instrumentTitle}>{instrument}</Text>
        </View>
      </TouchableOpacity>
    );
  };



  return (
    <View style={styles.container}>
    <View style={styles.headerWrapper}>

    <Text style={styles.title}>ROLAND TR-909</Text>
    <Text style={styles.para}>RYTHM COMPOSER</Text>

    </View>

  <StatusBar style="auto" />

    <View style={styles.rolandWrapper}>

    {instrumentArr.map((item, index) => renderInstrument(item, index))}
    </View>
    </View>

    );



};



export default RolandScreen;

//COLOR PALLET
let buttonColor = "#ced0cc";
let orange = "#dd6e39";
let gray = "#dbd9d9";
let darkGray = "#2a2c2b";

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: gray,
    alignItems: "center",
    justifyContent: "center",

  },

  rolandWrapper: {


    backgroundColor: gray,
    alignItems: "center",
    justifyContent: "center",

    display: 'flex',

    borderColor: 'black',
    flexDirection: 'row',
    flexWrap: 'wrap',

  },

  drumPad: {
    borderWidth: 2,
    borderColor: darkGray,
    backgroundColor: buttonColor,

    width: 100,
    height: 100,
    margin: 12,

    shadowColor: orange,
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
  title: {
    fontSize: 40,
    color: darkGray,
  },
  para: {
    color: darkGray,
  },
  headerWrapper: {
    marginBottom: 30,
    color: darkGray,

  },
  instrumentTitle: {

    fontSize: 10,
  },
});
