import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.textSytle1}>Exercise9</Text>

      <Button
        title="to to list screen"
        onPress={() => navigation.navigate("List")}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate("List")}
        style={{ marginVertical: 20 }}
      >
        <Text>i can be clicked</Text>
        <Text>i can be clicked</Text>
        <Text>i can be clicked</Text>
        <Text>i can be clicked</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textSytle1: {
    fontSize: 20,
    color: "blue",
  },
  textStyle2: {
    fontSize: 10,
  },
});

export default HomeScreen;

/* 
we used destructuring by replacing props to {navigation} in HomeScreen function param..
This way you dont have to access navigation object using props.navigation..Destructuring
helps to directly get navigation project..but see it does require {} braces
*/