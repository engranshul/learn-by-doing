import React, { useReducer } from "react";
import { Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

// defining reducer function..it takes 2 params state and action

function reducer(state, action) {
  console.log("state is", state);
  console.log("action is", action);

  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case 'change_green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case 'change_blue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
}

function SquareScreen() {

  const COLOR_INCREMENT = 50;
  // reducer initialization
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  // const [red,green,blue] = state;  .. this wont work..destructuring works with {}
  const { red, green, blue } = state;

  return (
    <View>
      <Text>welcome to square screen</Text>
      <ColorCounter
        color="Red"
        onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
        onDecrease={() =>
          dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })
        }
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
In this we use useReducer instead of useState..useReducer returns 2 things : state and dispatch
Reducer takes in two params : state and action
Action param tells reducer function how to change state
Inside reducer function never change state directly..like state.red = red
Returning state from reducer is very important
In some cases..u may not want to change state in reducer based on some validations..dn just return input state
reducer function is called using dispatch method..dispatch method more meaningful name could be runMyReducer(just for understanding)
When reducer function returns something..react automatically renders component
Learn concept of using TERNARY inside SWITCH

some conventions : 
our action object had {colorToChange : red , amount :15}
but {type : "change_red",payload : 15} is preferred..
*/
