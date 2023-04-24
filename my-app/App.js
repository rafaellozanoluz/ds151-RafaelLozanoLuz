import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/components/HomeScreen';
import Home2 from './src/components/Home2';
import Form from './src/components/form';
import CounterScreen from './src/components/contador/CounterScreen';
import ColorList from './src/components/colorList/ColorList';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Home2" component={Home2} />
          <Stack.Screen name="Form" component={Form}/>
          <Stack.Screen name="CounterScreen" component={CounterScreen}/>
          <Stack.Screen name='ColorList' component={ColorList}/>
        </Stack.Navigator>
    </NavigationContainer>
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
