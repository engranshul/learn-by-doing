import React, { useState } from "react";
import { Button, Text, View, StyleSheet, TextInput } from "react-native";

function TextScreen() {
  const [name, setName] = useState(0);
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>****welcome to text screen****</Text>

      <Text>Enter Name :</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>Your name is : {name}</Text>
      <Text>{""}</Text>

      <Text>Enter Password :</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />

      {password.length <= 5 ? (
        <Text>Password length shd be greater than 5</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: { margin: 1, borderWidth: 1, borderColor: "black" },
});
export default TextScreen;



/* 
Learn about two props of textInput : autoCapitalize and autoCorrect
how to use ternary inside JSX  
*/