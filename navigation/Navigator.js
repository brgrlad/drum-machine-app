import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../views/HomeScreen'
import RolandScreen from '../views/RolandScreen';
import CasioScreen from '../views/CasioScreen';


const Tab = createBottomTabNavigator();

const Navigator = () => {


  return (


    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />


      <Tab.Screen name="CasioScreen" component={CasioScreen} options={{ tabBarVisible: false }} />
      <Tab.Screen name="RolandScreen" component={RolandScreen} options={{ tabBarVisible: false }} />




    </Tab.Navigator>
  );
};

{/* <Tab.Screen name="Home" component={HomeScreen} />
<Tab.Screen name="CasioScreen" component={CasioScreen} options={{ tabBarVisible: false }} />


<Tab.Screen name="RolandScreen" component={RolandScreen} />
</Tab.Navigator> */}

export default Navigator;

// return (
//   <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Detail" component={DetailScreen} />
//     </Stack.Navigator>
//   </NavigationContainer>
// );