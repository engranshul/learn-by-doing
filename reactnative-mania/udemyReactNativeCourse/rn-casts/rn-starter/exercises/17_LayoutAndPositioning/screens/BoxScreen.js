import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

function BoxScreen() {
  return (
    <View>
      <Text style={styles.textStyle}>welcome to box screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: { margin: 10, borderWidth: 6, padding: 10 },
  viewStyle: { borderWidth: 10 },
});
export default BoxScreen;


/* 
In Box style we generally use : padding border margin
*/
