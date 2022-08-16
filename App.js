import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import FlatListComponent from "./src/screens/FlatListSample";
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    FlatListSample: FlatListComponent
  },
  {
    initialRouteName: "FlatListSample",
    defaultNavigationOptions: {
      title: "NMS Sports Club",
    },
  }
);

export default createAppContainer(navigator);
