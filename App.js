import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
//React native navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//App Screens
import OnBoardScreen from './src/screens/OnBoardScreen';
import BottomNavigation from './src/navigation/BottomNavigation';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={Colors.white}
        barStyle="dark-content"></StatusBar>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="Home" component={BottomNavigation} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
