import { StyleSheet, Text, View, Image } from "react-native";
import DrumHit from "./DrumHit";

let arr = ['kick', 'clap', 'hat']

const RolandScreen = () => {


  // JUST TESTING THIS

  return (

    arr.map((item) => <DrumHit> </DrumHit>)

  );
};

export default RolandScreen;

// try and create a function that will generate the JSX for each drum sound

// perhaps start from an array with the name of the elements and forEach of this elements, render a block of code?

// use flex-wrap: wrap in order to make sure all pads are seen on screen