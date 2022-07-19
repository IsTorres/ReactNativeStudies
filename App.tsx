import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/Home";
import Form from './src/components/Form';
import Select from './src/components/Picker';
import Sliderzinho from './src/components/Slider';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Form" component={Form}/>
        <Stack.Screen name="Select" component={Select} />
        <Stack.Screen name="Sliderzinho" component={Sliderzinho} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
