import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import DetailScreen from "../../screens/DetailScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      //globally applied options
      screenOptions={{
        headerStyle: { backgroundColor: "#111827" },
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
        headerTitleAlign: "left",
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Overview", // This will override the default title
          headerStyle: { backgroundColor: "#111827" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
          headerTitleAlign: "left",
          //headerShown: false,
        }}
      />
      <Stack.Screen name="Detail" component={DetailScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default function DynamicStackNavigator() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
