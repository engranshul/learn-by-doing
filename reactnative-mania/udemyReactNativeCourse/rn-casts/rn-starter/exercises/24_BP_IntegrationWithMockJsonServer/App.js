import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import React from "react";
/* just give alias in below line in case you have to create
more files similiar to BlogContext..as per current code every
file like BlogContext will have to be imported using {Provider}
but to differentiate between them do {Provider as aliasName} */
import { Provider } from "./src/context/BlogContext";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Create: CreateScreen,
    Show: ShowScreen,
    Edit: EditScreen,
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
    /* just wrap <App />in case u have more providers */
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


/* 
Remember that this project uses fake Rest Api server
https://www.npmjs.com/package/json-server

All its code is present in  jsonserver folder in this project..


we run json server on localhost and simulator in my mobile connects
it easily..

If u want to deploy app on ur physical device and then connect
with json-server running on ur computer..u may need to use ngrok
as it helps in providing public proxy endpoint..as of now NOT using
it..
*/