import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.textSytle1}>Exercise7</Text>

      <Button
        title="to to list screen"
        onPress={() => console.log("i have been pressed")}
      />

      <TouchableOpacity
        onPress={() => console.log("i have been clicked  ")}
        style={{ marginVertical: 20 }}
      >
        <Text>i can be clicked</Text>
        <Text>i can be clicked</Text>
        <Text>i can be clicked</Text>
        <Text>i can be clicked</Text>
      </TouchableOpacity>
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
In touchableOpacity we can provide multiple elements and onPress like props will be applied
on all of them..

TouchableOpacity is generally preferred over Button..

Touchableopacity doesnt have much default style as compared to button
*/