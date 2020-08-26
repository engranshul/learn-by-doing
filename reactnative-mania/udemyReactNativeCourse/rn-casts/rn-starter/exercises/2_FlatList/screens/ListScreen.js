import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {

  /* here we have explicitly provided key..nothing else is required..if you gonna
  remove this key..you will get a warning message.. */
  
  const personsArr = [{ key : 1,name: "jack" }, { key : 2,name: "joe" }, {key : 3, name: "hill" }];

  const hello = "anshul chauhan";
  
  // destructring example..here we get item using same..
  renderItemFunc = ({ item }) => {
    return <Text>{item.name}</Text>;
  };

  return (
    <View>
      <Text>list example</Text>
      <FlatList data={personsArr} renderItem={renderItemFunc} />
    </View>
  );
};
const styles = StyleSheet.create({});
export default ListScreen;

/* 
Flatlist contains two props : data and renderItem
Defining renderItem outside concept
*/
