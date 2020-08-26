import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.textSytle1}>Exercise8</Text>

      <Button
        title="to to list screen"
        onPress={() => props.navigation.navigate("List")}
      />

      <TouchableOpacity
        onPress={() => props.navigation.navigate("List")}
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
In this we gonna navigate from HomeScreen to ListScreen
Remember that for navigation to work screen must be defined in createStackNavigator function in App.js
Above example shows navigation for both touchableOpacity and Button..both have same onPress syntax..

*/