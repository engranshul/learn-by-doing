import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  const welcomeText = "Thanks for visiting color plus";
  console.log(
    `colors are, ${colors} and length of colors array is ${colors.length}`
  );

  return (
    <View>
      <Text>{welcomeText}</Text>
      <Button
        title="Add a color"
        onPress={() => setColors([...colors, randomColor()])}
      />

      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ width: 100, height: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomColor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};
export default ColorScreen;

/* 
In flatlist renderItem method, parameter name shd be item else it wont work
Dont forget to return from flatlist renderItem incase u want to return something
View can be nested and view can have a style having width and height
spread operator used with colors example ...colors (spread is used only wd iterable instance like array)
In useState(0) we define initial value..it can be array or string etc..
*/
