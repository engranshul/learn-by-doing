import React, { useContext,useEffect } from "react";
import {
  FlatList,
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

function IndexScreen({ navigation }) {
  /* By using useContext we get all the things that are provided in 
  value in BlogContext */
  const { state, deleteBlogPost,getBlogPosts } = useContext(Context);

  useEffect(() => {
    console.log("i am in use effect..")
    // below code gets executed only first time component renders
    getBlogPosts();
    // below code gets executed when we return back to index screen 4m another screen
    const listener = navigation.addListener("didFocus",()=> {
      console.log("i am in use effect..navigation did focus");
      getBlogPosts();
    });
    // below step does cleanup
    return () => {
      listener.remove();
    }
  }, [])

 


  return (
    <View>
      {console.log("i am being rendered..")}
      <FlatList
        data={state}
        /* in flatlist if u want just item field..u have to destructure it with {} */
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Show", { id: item.id });
              }}
            >
              <View style={styles.container}>
                <Text>{item.title}</Text>
                <TouchableOpacity
                  onPress={() => {
                    deleteBlogPost(item.id);
                  }}
                >
                  <Entypo name="trash" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ); // return is important
        }}
      />
    </View>
  );
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
});

export default IndexScreen;

/* 
concept of how we have passed two functions from SearchScreen to SearchBar and
how they are called in SearchBar..
*/
