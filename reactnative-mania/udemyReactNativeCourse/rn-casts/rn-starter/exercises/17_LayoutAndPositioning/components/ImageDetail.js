import React from "react";
import { Text, StyleSheet,View,Image } from "react-native";

// below props param u can do destructuring like (imagePath,title,imageScore)
const ImageDetail = (props) => {
  return (
    <View>
      <Image source = {props.imagePath}/>
      <Text>{props.title}</Text>
      <Text>ImageScore - {props.imageScore}</Text>

    </View>
  );
};

export default ImageDetail;
