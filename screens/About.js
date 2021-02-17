import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global'


export default function About({navigation}) {
   return (
      <View style={globalStyles.container}>
         <Text>About Screen</Text>
         <Button
            title="Go to home"
            onPress={() => navigation.navigate('Home')}
         />
      </View>
   )
}
