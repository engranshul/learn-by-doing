import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./exercises/12_ColorScreen/screens/HomeScreen";
import ListScreen from "./exercises/12_ColorScreen/screens/ListScreen";
import ImageScreen from "./exercises/12_ColorScreen/screens/ImageScreen";
import ColorScreen from "./exercises/12_ColorScreen/screens/ColorScreen";
import CounterScreen from "./exercises/12_ColorScreen/screens/CounterScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    ImageScreen : ImageScreen,
    ColorScreen : ColorScreen,
    CounterScreen: CounterScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
