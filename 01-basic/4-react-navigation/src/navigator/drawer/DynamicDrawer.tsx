import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

function ProfileScreen() {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
}

const DynamicDrawer = () => {
  return <MyDrawer />;
};

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default DynamicDrawer;

const styles = StyleSheet.create({});
