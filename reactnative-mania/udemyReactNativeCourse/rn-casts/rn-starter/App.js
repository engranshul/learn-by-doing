import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./exercises/17_LayoutAndPositioning/screens/HomeScreen";
import ListScreen from "./exercises/17_LayoutAndPositioning/screens/ListScreen";
import ImageScreen from "./exercises/17_LayoutAndPositioning/screens/ImageScreen";
import ColorScreen from "./exercises/17_LayoutAndPositioning/screens/ColorScreen";
import CounterScreen from "./exercises/17_LayoutAndPositioning/screens/CounterScreen";
import SquareScreen from "./exercises/17_LayoutAndPositioning/screens/SquareScreen";
import CounterScreenWithReducer from "./exercises/17_LayoutAndPositioning/screens/CounterScreenWithReducer";
import TextScreen from "./exercises/17_LayoutAndPositioning/screens/TextScreen";
import BoxScreen from "./exercises/17_LayoutAndPositioning/screens/BoxScreen";
import FlexScreen from "./exercises/17_LayoutAndPositioning/screens/FlexScreen";
import FlexValuesScreen from "./exercises/17_LayoutAndPositioning/screens/FlexValuesScreen";
import PositionScreen from "./exercises/17_LayoutAndPositioning/screens/PositionScreen";
import LayoutScreen from "./exercises/17_LayoutAndPositioning/screens/LayoutScreen";
import LayoutScreen2 from "./exercises/17_LayoutAndPositioning/screens/LayoutScreen2";
/* 
import HomeScreen from "./exercises/16_TextInput/screens/HomeScreen";
import ListScreen from "./exercises/16_TextInput/screens/ListScreen";
import ImageScreen from "./exercises/16_TextInput/screens/ImageScreen";
import ColorScreen from "./exercises/16_TextInput/screens/ColorScreen";
import CounterScreen from "./exercises/16_TextInput/screens/CounterScreen";
import SquareScreen from "./exercises/16_TextInput/screens/SquareScreen";
import CounterScreenWithReducer from "./exercises/16_TextInput/screens/CounterScreenWithReducer";
import TextScreen from "./exercises/16_TextInput/screens/TextScreen"; 
*/


/* 
import HomeScreen from "./exercises/15_ReducerPractice/screens/HomeScreen";
import ListScreen from "./exercises/15_ReducerPractice/screens/ListScreen";
import ImageScreen from "./exercises/15_ReducerPractice/screens/ImageScreen";
import ColorScreen from "./exercises/15_ReducerPractice/screens/ColorScreen";
import CounterScreen from "./exercises/15_ReducerPractice/screens/CounterScreen";
import SquareScreen from "./exercises/15_ReducerPractice/screens/SquareScreen";
import CounterScreenWithReducer from "./exercises/15_ReducerPractice/screens/CounterScreenWithReducer";
*/

/* 
import HomeScreen from "./exercises/14_SquareScreenWithReducer/screens/HomeScreen";
import ListScreen from "./exercises/14_SquareScreenWithReducer/screens/ListScreen";
import ImageScreen from "./exercises/14_SquareScreenWithReducer/screens/ImageScreen";
import ColorScreen from "./exercises/14_SquareScreenWithReducer/screens/ColorScreen";
import CounterScreen from "./exercises/14_SquareScreenWithReducer/screens/CounterScreen";
import SquareScreen from "./exercises/14_SquareScreenWithReducer/screens/SquareScreen"; 
*/

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    ImageScreen: ImageScreen,
    ColorScreen: ColorScreen,
    CounterScreen: CounterScreen,
    SquareScreen: SquareScreen,
    CounterScreenWithReducer: CounterScreenWithReducer,
    TextScreen : TextScreen,
    BoxScreen : BoxScreen,
    FlexScreen : FlexScreen,
    FlexValuesScreen:FlexValuesScreen,
    PositionScreen : PositionScreen,
    LayoutScreen : LayoutScreen,
    LayoutScreen2 : LayoutScreen2 
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
