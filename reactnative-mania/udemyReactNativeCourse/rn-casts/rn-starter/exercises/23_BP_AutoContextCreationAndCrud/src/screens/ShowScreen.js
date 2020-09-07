import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import {
  FlatList,
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

function ShowScreen({ navigation }) {
  console.log("navigation object in show screen is", navigation);
  const { state } = useContext(Context);
  const id = navigation.getParam("id");
  const blogPostToDisplay = state.find((blogPost) => {
    return blogPost.id == id; // return is imp
  });
  return (
    <View>
      <Text>{blogPostToDisplay.title}</Text>
      <Text>{blogPostToDisplay.content}</Text>
    </View>
  );
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <Entypo name="edit" size={24} color="black" />
      </TouchableOpacity>
    ),
  };
};

export default ShowScreen;
