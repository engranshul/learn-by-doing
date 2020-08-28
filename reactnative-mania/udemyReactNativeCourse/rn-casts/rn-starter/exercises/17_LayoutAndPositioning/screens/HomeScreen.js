import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.textSytle1}>Exercise17</Text>

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

      <Button
        title="move to text screen"
        onPress={() => navigation.navigate("TextScreen")}
      />
      <Button
        title="move to box screen"
        onPress={() => navigation.navigate("BoxScreen")}
      />

      <Button
        title="move to flex screen"
        onPress={() => navigation.navigate("FlexScreen")}
      />
      <Button
        title="move to flex values screen"
        onPress={() => navigation.navigate("FlexValuesScreen")}
      />
      <Button
        title="move to position screen"
        onPress={() => navigation.navigate("PositionScreen")}
      />
      <Button
        title="move to layout screen 1"
        onPress={() => navigation.navigate("LayoutScreen")}
      />
      <Button
        title="move to layout screen 2"
        onPress={() => navigation.navigate("LayoutScreen2")}
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
