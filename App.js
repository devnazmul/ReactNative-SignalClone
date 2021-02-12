import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import { StyleSheet } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

// ######################################
// MAKE STACK HERE...................
// ######################################
const Stack = createStackNavigator();

// ######################################
// STYSHEET IS HERE...................
// ######################################
const globalScreenOptions = {
  headerStyle: {
    backgroundColor: "#2c68ed",
  },

  headerTitleStyle: {
    color: "#fff",
    // textAlign: "center"
  },

  headerTintColor: {
    color: "#fff"
  },
}

// ######################################
// FUNCTIONAL COMP IS HERE...............
// ######################################
export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={ RegisterScreen } />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fcc',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
