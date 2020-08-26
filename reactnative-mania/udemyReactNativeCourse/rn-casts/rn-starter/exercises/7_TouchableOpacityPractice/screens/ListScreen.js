  import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  /* this time we have removed key from personsArr object */

  const personsArr = [{ name: "jack", age: 10 }, { name: "joe", age: 11 }, { name: "hill", age: 12 }, { name: "hill", age: 12 }, { name: "hill", age: 12 }, { name: "hill", age: 12 }];

  // destructring example..here we get item using same..
  renderItemFunc = ({ item }) => {
  return <Text style={styles.textStyle}>{item.name} Age- {item.age}</Text>;
  };

  return (
    <View>
      <Text>list example</Text>
      <FlatList horizontal showsHorizontalScrollIndicator = {false}
        keyExtractor={(friend) => friend.name}
        data={personsArr}
        renderItem={renderItemFunc}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: { marginVertical: 100 ,margin : 10 },
});

export default ListScreen;


/* 
flatlist prop to make list horizontal : horizontal
flatlist prop to hide scrollbar : showsHorizonalScrollbarIndicator or showsVerticalScrollbarIndicator : {false/true}
{ margin: 100 } style..
concept of how static string like "Age-" above doesnt have to be wrapped in {} 
*/
