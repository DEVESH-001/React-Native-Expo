import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import DetailScreen from "../../screens/DetailScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import { createStaticNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator({
  //initialRouteName: "Home",
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        title: "Home Skreen",
      },
    },
    Details: DetailScreen,
    Profile: ProfileScreen,
  },
});

const Navigation = createStaticNavigation(Stack); // this creates a static navigation instance
export default function StaticStackNavigator() {
  return <Navigation />;
}
