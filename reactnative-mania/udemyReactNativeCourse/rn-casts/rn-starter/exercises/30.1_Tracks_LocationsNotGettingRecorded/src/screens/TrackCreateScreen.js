import "../_mockLocation";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

// isFocused prop came with the help of withNavigationFocus
const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);

  /* calling use location hook.. */
  const [err] = useLocation(isFocused, (location) => {
    addLocation(location, state.recording);
  });

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
