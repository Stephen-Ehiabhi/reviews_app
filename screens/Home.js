import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global'

export default function Home({ navigation }) {
   return (
      <View style={globalStyles.container}>
         <Text>Home Screen</Text>
         <Button
            title="Go to Review Details"
            onPress={() => navigation.navigate('ReviewDetails')}
         />
      </View>
   )
}
