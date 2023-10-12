import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

// on page load sounds get added to pads .... API CALL?

// each pads on press then will trigger corresponding sound

//each pad will also have its own icon represent its sound: snare, kickdrum, hihat etc

//sequencer?????

// https://www.youtube.com/watch?v=bByJicHMwX8&ab_channel=GenUI
// https://reactjsexample.com/a-drum-machine-application-built-using-react/








export default function DrumPadScreen() {
  return (
    // MAIN CONTAINER
    <View style={styles.container}>
      <Text>CASIO RZ 1</Text>

      <StatusBar style="auto" />

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
