import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";


const ImageScreen = () => {
  return (
    <View>
      <Text>this is a cool image screen</Text>
      <ImageDetail title="Forest" imagePath={require("../../../assets/forest.jpg")} imageScore = "4"/>
      <ImageDetail title="Mountain" imagePath={require("../../../assets/mountain.jpg")} imageScore = "5" />
      <ImageDetail title="Beach" imagePath={require("../../../assets/beach.jpg")} imageScore ="12"/>
    </View>
  );
};

export default ImageScreen;


/* 
concept of using require to refer to image path
Concept if image tag to render image
Image is a self closing tag and Text is not..
*/
