import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

function LayoutScreen() {
  return (
    <View style={styles.masterStyle}>
      <View style={styles.viewStyleOne}></View>
      <View style={styles.viewStyleTwo}></View>
      <View style={styles.viewStyleThree}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyleOne: {
    backgroundColor: "red",
    height: 100,
    width: 100,
    alignSelf: "flex-start",
  },
  /* here in viewStyleTwo we can use marginTop property also */
  viewStyleTwo: { backgroundColor: "green", height: 100, width: 100, top: 140 },
  viewStyleThree: {
    backgroundColor: "blue",
    height: 100,
    width: 100,
    alignSelf: "flex-end",
  },
  masterStyle: { flexDirection: "row", justifyContent: "space-between" },
});

export default LayoutScreen;
