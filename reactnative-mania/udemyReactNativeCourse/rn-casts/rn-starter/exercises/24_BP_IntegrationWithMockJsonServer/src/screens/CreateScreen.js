import React, { useContext, useState } from "react";
import { Context } from "../context/BlogContext";
import {
  FlatList,
  Button,
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import BlogPostForm from "../components/BlogPostForm";

/* Both createScreen and editScreen component uses BlogPostForm
component for common logic */

function CreateScreen({ navigation }) {
  const { state, addBlogPost } = useContext(Context);
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        return addBlogPost(title, content, () => {
          // nagivating to another screen concept
          navigation.navigate("Index");
        });
      }}
    />
  );
}

const styles = StyleSheet.create({
  textinput: {
    width: "80%",
    borderWidth: 2,
    marginBottom: 20,
    borderRadius: 2,
  },
  container: {
    alignItems: "center",
  },
  text: {
    alignItems: "center",
    fontSize: 18,
    alignSelf: "flex-start",
    marginLeft: 35,
    marginBottom: 5,
  },
});

export default CreateScreen;
