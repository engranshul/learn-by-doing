import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import React from "react";
import { Provider } from "./src/context/BlogContext";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Create: CreateScreen,
    Show: ShowScreen,
    Edit : EditScreen
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Lets Blog",
    },
  }
);

// earlier we were exporting below line always
// export default createAppContainer(navigator);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};

/* 
This way Provider is showing stackNavigator inside of it

Provider will be source of information and all the information
that is provided will be available to all child components
*/
