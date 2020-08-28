import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

function LayoutScreen2() {
  return (
    <View style={styles.masterStyle}>
      <View style={styles.viewStyleOne}></View>
      {/* understand below concept */}
      <View style={styles.viewTwoParent}>
        <View style={styles.viewStyleTwo}></View>
      </View>

      <View style={styles.viewStyleThree}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyleOne: {
    backgroundColor: "red",
    height: 100,
    width: 100,
  },
  viewStyleTwo: {
    backgroundColor: "green",
    height: 100,
    width: 100,
  },
  viewStyleThree: {
    backgroundColor: "blue",
    height: 100,
    width: 100,
  },
  viewTwoParent: {
    height: 200, 
    justifyContent: "flex-end" },
    masterStyle: { flexDirection: "row", justifyContent: "space-between" },
});

export default LayoutScreen2;


/* 
Another conceptual way of aligning items..
*/