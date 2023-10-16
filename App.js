
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './navigation/Navigator';
import{ UserChoiceProvider }from './context/UserChoiceContext';






export default function App() {

  return (

<UserChoiceProvider>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
        </UserChoiceProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
