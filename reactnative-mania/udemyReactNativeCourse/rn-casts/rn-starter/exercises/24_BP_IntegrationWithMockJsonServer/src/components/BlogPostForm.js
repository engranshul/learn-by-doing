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

function BlogPostForm({ initialValues, onSubmit }) {

  /* state is defined here coz we have two textInputs in this 
  component..For both of these textInputs..their onChangeText 
  updates these states.. */


  // defining default values concept for both these states
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter title :</Text>
      <TextInput
        style={styles.textinput}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <Text style={styles.text}>Enter content :</Text>
      <TextInput
        multiline
        style={styles.textinput}
        value={content}
        onChangeText={(text) => setContent(text)}
      />

      <Button title="Save BlogPost" onPress={() => onSubmit(title, content)} />
    </View>
  );
}

/*  great concept of setting default props value just in case they 
are not provided..this way they dont result in undefined when
 accessed */
BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: ''
  }
};


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
export default BlogPostForm;
