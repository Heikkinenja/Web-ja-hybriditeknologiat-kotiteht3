import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomAppBar from './components/CustomAppBar';
import secondscreen from './screens/secondscreen';
import homescreen from './screens/homescreen';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={({ navigation, route }) => ({
          header: (props) => <CustomAppBar {...props} navigation={navigation} back={route.name !== 'HomeScreen'} />,
        })}
      >
        <Stack.Screen name="HomeScreen" component={homescreen} />
        <Stack.Screen name="SecondScreen" component={secondscreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
