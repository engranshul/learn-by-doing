import React from "react";
import { Text, Button, StyleSheet, View } from "react-native";

function ColorCounter(props) {
  return (
    <View>
      <Text>{props.color}</Text>
      <Button title={`Increase ${props.color}`} onPress={()=>props.onIncrease()} />
      <Button title={`Decrease ${props.color}`} onPress={()=>props.onDecrease()} />
    </View>
  );
}

export default ColorCounter;
