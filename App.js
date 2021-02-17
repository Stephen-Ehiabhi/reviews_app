import React, { useState } from 'react';
import { Button } from "react-native";
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import About from './screens/About';
import ReviewDetails from './screens/ReviewDetails';

const Stack = createStackNavigator();

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home',  
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#333"
          />
        )
            }} 
             />
        <Stack.Screen name="About" component={About} options={{ title: 'About' }} />
        <Stack.Screen name="ReviewDetails" component={ReviewDetails} options={{ title: 'Review Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
}



