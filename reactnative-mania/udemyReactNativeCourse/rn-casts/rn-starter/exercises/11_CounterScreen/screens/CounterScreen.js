import React,{useState} from "react";
import { Text, StyleSheet, View,Button } from "react-native";
import ImageDetail from "../components/ImageDetail";

const CounterScreen = () => {

  const [counter,setCounter] =useState(0);
  return (
    <View>
    
     {/* Below line wont work..directly updating counter will not update view  
      <Button title = "Increase" onPress = {()=> counter +1}/>
      <Button title="Decrease" onPress = {() => counter -1} /> 
     */}

      <Button title="Increase" onPress={() => setCounter(counter + 1)} />
      <Button title="Decrease" onPress={() => setCounter(counter - 1)} /> 
      <Text>Counter is : {counter}</Text>
    </View>
  );
};

export default CounterScreen;
