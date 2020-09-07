import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import React from "react";
import { BlogProvider } from "./src/context/BlogContext";
const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Dummy Template",
    },
  }
);

// earlier we were exporting below line always
// export default createAppContainer(navigator);

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};

/* 
This way Provider is showing stackNavigator inside of it

Provider will be source of information and all the information
that is provided will be available to all child components
*/