import React, { useContext } from "react";
import { FlatList,Button, View, Text, StyleSheet, ScrollView } from "react-native";
import BlogContext from "../context/BlogContext";

function SearchScreen() {

  /* By using useContext we get all the things that are provided in 
  value in BlogContext */
  const {data,addBlogPost} = useContext(BlogContext);
  return (
    <View>
      <Text>exercise 20</Text>
      <Button title ="Add Post" onPress = {() => addBlogPost()}/>

      <FlatList
        data={data}
        /* in flatlist if u want just item field..u have to destructure it with {} */
        renderItem={({item}) => {
          return <Text>{item.title}</Text>; // return is important
        }}
      />
    </View>
  );
}

StyleSheet.create({});

export default SearchScreen;

/* 
concept of how we have passed two functions from SearchScreen to SearchBar and
how they are called in SearchBar..
*/
