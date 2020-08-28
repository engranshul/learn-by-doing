import React, { useReducer } from "react";
//import React, { useState } from "react";
import { Text, View, Button } from "react-native";

// *******This is the earlier way in which we make use of useState*******
/* function CounterScreenWithReducer() {
  const [counter, setCounter] = useState(0);
  return (
    <View>
      <Text>welcome to counter screen with reducer</Text>
      <Button
        title="Increase Counter"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Text>{counter}</Text>
    </View>
  );
} */


//********* this way we use reducers but state should be an object
// generally with reducers we use state as object..***************

/* const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.payload;
    case "decrement":
      return state + action.payload;

    default:
      return state;
  }
};

const initialState = 0;

function CounterScreenWithReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View>
      <Text>welcome to counter screen with reducer</Text>
      <Button
        title="Increase Counter"
        onPress={() => dispatch({ type: "increment", payload: 1 })}
      />

      <Button
        title="Decrease Counter"
        onPress={() => dispatch({ type: "decrement", payload: -1 })}
      />
      <Text>{state}</Text>
    </View>
  );
} */


//*******way to use reducers with state as object..perfect way**********

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            // perfect way to update state object
            return {...state,count :state.count + action.payload};
        case "decrement":
            return { ...state, count: state.count + action.payload };

        default:
            return state;
    }
};

const initialState = {count : 0};

function CounterScreenWithReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <View>
            <Text>welcome to counter screen with reducer</Text>
            <Button
                title="Increase Counter"
                onPress={() => dispatch({ type: "increment", payload: 1 })}
            />

            <Button
                title="Decrease Counter"
                // payload key in dispatch not mandatory..dispatch can have 
                // anything that is required to update state
                onPress={() => dispatch({ type: "decrement", payload: -1 })}
            />
            <Text>{state.count}</Text>
        </View>
    );
}

export default CounterScreenWithReducer;
