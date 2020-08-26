import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {

  /* this time we have removed key from personsArr object */
  
  const personsArr = [{name: "jack" }, {name: "joe" }, {name: "hill" }];

  const hello = "anshul chauhan";
  
  // destructring example..here we get item using same..
  renderItemFunc = ({ item }) => {
    return <Text>{item.name}</Text>;
  };

  return (
    <View>
      <Text>list example</Text>
      <FlatList keyExtractor = {friend => friend.name} data={personsArr} renderItem={renderItemFunc} />
    </View>
  );
};
const styles = StyleSheet.create({});
export default ListScreen;

/* 
Flatlist contains two props : data and renderItem
Defining renderItem outside concept
see how we removed key from persons object and defined key with the help of keyExtractor as props
key can be an integer or a string
*/
