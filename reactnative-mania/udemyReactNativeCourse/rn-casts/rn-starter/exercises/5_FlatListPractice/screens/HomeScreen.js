import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ListScreen from "./ListScreen";

const HomeScreen = () => {

  return (
    <View>
      <Text style={styles.textSytle1}>Exercise5</Text>
      <ListScreen />
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



