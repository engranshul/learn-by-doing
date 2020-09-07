import React, { useContext } from "react";
import { FlatList, View, Text, StyleSheet, ScrollView } from "react-native";
import BlogContext from "../context/BlogContext";

function SearchScreen() {
  const blogPosts = useContext(BlogContext);
  return (
    <View>
      <Text>exercise 20</Text>

      <FlatList
        data={blogPosts}
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
