// Static Tab Navigator
//https://reactnavigation.org/docs/bottom-tab-navigator?config=static
import * as React from "react";
import { View, Text } from "react-native";

import { createStaticNavigation } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DynamicTabNavigator from "./src/navigator/tabs/DynamicTabNavigator";
import DynamicTabNav2 from "./src/navigator/tabs/DynamicTabNav2";

// function HomeScreen() {
//   return (
//     <View>
//       <Text>Home</Text>
//     </View>
//   );
// }

// function ProfileScreen() {
//   return (
//     <View>
//       <Text>Profile</Text>
//     </View>
//   );
// }

// const MyTabs = createBottomTabNavigator({
//   screens: {
//     Home: HomeScreen,
//     Profile: ProfileScreen,

//   },
// });
// const Navigation = createStaticNavigation(MyTabs);
export default function App() {
  // return <DynamicTabNavigator />;
  return <DynamicTabNav2 />;
}
