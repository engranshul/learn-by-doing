import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

function FlexScreen() {
  return (
    <View style = {styles.viewStyle}>
      <Text style={styles.textStyle}>child 1</Text>
      <Text style={styles.textStyle}>child 2</Text>
      <Text style={styles.textStyle}>child 3</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: { margin: 1, borderWidth: 1, padding: 1 },
  viewStyle: { borderWidth: 1,  flexDirection : "row",alignItems : "center", justifyContent : "space-between" },
});
export default FlexScreen;

/*
Below properties are always applied to some parent element

 flexDirection : "row"
 alignItems : "center"
 justifyContent : "space-between"
*/

