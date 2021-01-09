import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View,Text} from 'react-native'

const Stack = createStackNavigator();

const App=()=> {

  const renderStack = ()=>(
    <Stack.Navigator>
      <Stack.Screen
        name="day1"
        // component={}
      />
    </Stack.Navigator>
  )

  return (
    <NavigationContainer>{renderStack()}</NavigationContainer>
  );
}

export default App;