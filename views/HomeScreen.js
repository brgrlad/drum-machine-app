
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

          style={styles.imageWrapperCasio}
          onPress={() => navigate('CasioScreen')}
        >
          <Image

            source={require("../assets/images/casio_logo.png") }
            style={[styles.image, styles.casio]}
          />
        </TouchableOpacity>





      <TouchableOpacity
        style={styles.imageWrapperRoland}
        onPress={() => navigate('RolandScreen')}
      >
        <Image
          source={require("../assets/images/roland_logo.png")}
          style={[styles.image, styles.roland]}
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
  imageWrapperCasio: {
    flex: 1,
    backgroundColor: '#626161',



  },
  imageWrapperRoland: {
    backgroundColor: '#dbd9d9',

  },
  image: {
    width: "80%",
    alignSelf: "center",
    aspectRatio: 1,
    height: undefined,





  },
  roland: {


     tintColor: '#dd6e39',
     resizeMode: "contain",

  },
  casio: {

    tintColor: '#90ebe9',
    resizeMode: "contain",

  }

});

