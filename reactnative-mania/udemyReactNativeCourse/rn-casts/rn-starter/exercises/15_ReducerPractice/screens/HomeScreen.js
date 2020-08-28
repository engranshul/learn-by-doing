import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.textSytle1}>Exercise15</Text>

      <Button
        title="move to image screen"
        onPress={() => navigation.navigate("ImageScreen")}
      />

      <Button
        title="move to counter screen"
        onPress={() => navigation.navigate("CounterScreen")}
      />

      <Button
        title="move to color screen"
        onPress={() => navigation.navigate("ColorScreen")}
      />

      <Button
        title="move to square screen"
        onPress={() => navigation.navigate("SquareScreen")}
      />

      <Button
        title="move to counter screen with reducer"
        onPress={() => navigation.navigate("CounterScreenWithReducer")}
      />
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
