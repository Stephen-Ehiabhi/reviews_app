import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default function Home(){
return (
   <View styles={styles.container}>
        <Text>Home Screen</Text>
   </View>
)
}


const styles = StyleSheet.create({
container: {
     padding: 20,   
},
})