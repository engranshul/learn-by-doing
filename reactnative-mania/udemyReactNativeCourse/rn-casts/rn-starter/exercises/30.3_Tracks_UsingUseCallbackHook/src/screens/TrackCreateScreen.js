import "../_mockLocation";
import React, { useContext,useCallback } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

// isFocused prop came with the help of withNavigationFocus
const TrackCreateScreen = ({ isFocused }) => {
  
  const {
    state: { recording },
    addLocation
  } = useContext(LocationContext);


// useCallback limits the number of times new callback function
// gets created when TrackCreateScreen rerenders..in this case
// new callback only gets created if recording flag changes  
  const callback = useCallback(
    location => {
      addLocation(location, recording);
    },
    [recording]
  );

  const [err] = useLocation(isFocused, callback);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);

/* 
withNavigationFocus is a higher order component which passes the isFocused prop 
into a wrapped component. It's useful if you need to use the focus state in the
render function of your screen component or another component rendered somewhere
inside of a screen.

withNavigationFocus(Component) returns a component.
*/


/* 
Returns a memoized callback.

Pass an inline callback and an array of dependencies. useCallback will 
return a memoized version of the callback that only changes if one of
the dependencies has changed. This is useful when passing callbacks 
to optimized child components that rely on reference equality to
prevent unnecessary renders (e.g. shouldComponentUpdate).
*/