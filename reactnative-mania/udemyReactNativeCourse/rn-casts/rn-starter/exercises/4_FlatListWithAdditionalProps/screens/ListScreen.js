import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  /* this time we have removed key from personsArr object */

  const personsArr = [{ name: "jack" }, { name: "joe" }, { name: "hill" }];

  const hello = "anshul chauhan";

  // destructring example..here we get item using same..
  renderItemFunc = ({ item }) => {
    return <Text style={styles.textStyle}>{item.name}</Text>;
  };

  return (
    <View>
      <Text>list example</Text>
      <FlatList
        keyExtractor={(friend) => friend.name}
        data={personsArr}
        renderItem={renderItemFunc}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: { marginVertical: 100 },
});

export default ListScreen;


/* 
flatlist prop to make list horizontal : horizontal
flatlist prop to hide scrollbar : showsHorizonalScrollbarIndicator : {false/true}
{ marginVertical: 100 } style..
*/
