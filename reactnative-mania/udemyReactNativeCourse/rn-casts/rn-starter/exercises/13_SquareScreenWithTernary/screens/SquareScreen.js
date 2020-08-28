import React, { useState } from "react";
import { Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

function SquareScreen() {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  const CHANGE = 50;

  const setColor = (color, change) => {
      
    console.log("value of red is", red);
    console.log("value of blue is", blue);
    console.log("value of green is", green);

    console.log(`color is ${color} and change is ${change}`);

    color === "red" && red + change < 255 && red + change > 0
      ? setRed(red + change)
      : null;

    color === "blue" && blue + change < 255 && blue + change > 0
      ? setBlue(blue + change)
      : null;

    color === "green" && green + change < 255 && green + change > 0
      ? setGreen(green + change)
      : null;
  };

  return (
    <View>
      <Text>welcome to square screen</Text>
      <ColorCounter
        color="Red"
        onIncrease={() => setColor("red", CHANGE)}
        onDecrease={() => setColor("red", -1 * CHANGE)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => setColor("blue", CHANGE)}
        onDecrease={() => setColor("blue", -1 * CHANGE)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => setColor("green", CHANGE)}
        onDecrease={() => setColor("green", -1 * CHANGE)}
      />

      <View
        style={{
          height: 200,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
}

export default SquareScreen;

/* 
In this i learnt how to pass func from parent to child so that child can change state that is present in parent
Learnt how to make constants and use them
ternary operator usage..this could also be solved using Switch case
concept of how we used NUll in ternary when we dont we have do anything..return cant be used in ternary
Here we have 3 states(red,green and blue) and they are very much related


When there are pieces of states that are closely related and there is precise set of well known ways in which
we update these values then this makes our state great candidate of being managed by reducer..check out it usage
in next exercise.
*/
