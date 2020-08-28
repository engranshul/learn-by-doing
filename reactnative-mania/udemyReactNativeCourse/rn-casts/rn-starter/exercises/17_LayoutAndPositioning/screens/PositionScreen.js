import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

function PositionScreen() {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textFourStyle}>child 4</Text>
      <Text style={styles.textFiveStyle}>child 5</Text>
      <Text style={styles.textSixStyle}>child 6</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textFourStyle: {
    margin: 1,
    borderWidth: 1,
    padding: 1,
    flex: 1,
    backgroundColor: "red",
  },
  textFiveStyle: {
    margin: 1,
    borderWidth: 1,
    padding: 1,
    flex: 2,
    alignSelf: "center",
    backgroundColor: "green",
    position: "absolute",
  },
  textSixStyle: {
    margin: 1,
    borderWidth: 1,
    padding: 1,
    flex: 2,
    backgroundColor: "blue",
  },
  viewStyle: {
    height: 400,
    borderWidth: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "space-between",
  },
});
export default PositionScreen;

/*
Position has two values : relative(default) and absolute
Position value as absolute makes element to ignore its siblings

In this child5 has position : absolute and it ignored both child4
and child6
*/
