import React from "react";
import { Text, View, StyleSheet } from "react-native";

const HomeScreen = () => {
  
  const text3 = <Text>i am a refugee</Text>;
  const str = "empathy"
  return (
    <View>
      <Text style = {styles.textSytle1}>Heading : Exercise1</Text>
      <Text style = {styles.textStyle2}>Sub heading</Text>
      {text3}
      <Text> {str}</Text>
    </View>
  );
};


const styles=StyleSheet.create({
    textSytle1 : {
        fontSize :20,
        color : "blue"
    },
    textStyle2: {
        fontSize :10
    }
}) 

export default HomeScreen;


/* 
Learnings :

Learnt how to pass a string and Text in JSX
learnt how to create multiple syles in StyleSheet.create
Learn about View and Text
*/