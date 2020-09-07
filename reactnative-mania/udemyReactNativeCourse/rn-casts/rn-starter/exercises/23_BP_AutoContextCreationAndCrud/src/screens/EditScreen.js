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

function EditScreen({ navigation }) {
  const id = navigation.getParam("id");

  const { state, editBlogPost } = useContext(Context);

  // example of finding an element from an array of elements..
  const blogPostToDisplay = state.find((blogPost) => {
    return blogPost.id == id; // return is imp
  });

  const initialValues = {
    title: blogPostToDisplay.title,
    content: blogPostToDisplay.content,
  };

  /* 
  Below is a beautiful concept..updated title and content are
  present in BlogPostForm coz state and textInputs are defined
  there..

  This component just know id(1st param) and navigation pop 
  function(4th param)...so to get title and content it supplies
  this method to BlogPostForm so that it can call it with updated
  title and content..

  See how some param for editBlogPost are provided by child component
  and some param for editBlogpost are being used from parent component
  only.. 
  */
  return (
    <BlogPostForm
      initialValues={initialValues}
      onSubmit={(title, content) => {
        // navigation.pop() so that when it is called..we land on
        // the screen 4m which we visited this screen
        return editBlogPost(id, title, content, () => navigation.pop());
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
export default EditScreen;
