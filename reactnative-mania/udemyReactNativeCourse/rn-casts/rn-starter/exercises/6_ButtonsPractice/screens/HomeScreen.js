import React from "react";
import { Button,Text, View, StyleSheet } from "react-native";

const HomeScreen = () => {

  return (
    <View>
      <Text style={styles.textSytle1}>Exercise6</Text>
       <Button title ="to to list screen" onPress = {() => console.log("i have been pressed")}/>
    </View>
  );
};

const styles = StyleSheet.create({
  textSytle1: {
    fontSize: 20,
    color: "blue",
  },
  textStyle2: {
    fontSize: 10,
  },
});

export default HomeScreen;

/* 
See how we created a button and printed console log when it has been pressed
Button is a self closing tag
Another way to create buttons or links is by touchableOpacity
*/



