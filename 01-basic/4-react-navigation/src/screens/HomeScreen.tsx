import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@react-navigation/elements";
import { Link, useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Text>HomeScreen</Text>
      {/* <Button screen={"Details"}>Go to Details</Button> */}
      {/* <Link screen={"Details"}>Go to Details</Link> */}
      {/* <Button onPress={() => navigation.navigate("Details")}>
        Go to Details
      </Button> */}
      {/* //sending data */}
      <Button
        onPress={() => navigation.navigate("Detail", { username: "devesh" })}
      >
        Go to Details
      </Button>
      <Button
        onPress={() => navigation.navigate("Profile", { username: "devesh" })}
      >
        Go to Profile
      </Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

// hooks in useNavigation()
//1. navigate() go to a screen by name
//2. replace() replace the current screen with a new screen(use-case: redirecting after login)
//3. popToTop() go to the top of the stack/1st screen
//4. pop() go back to the previous screen
//5. popTo() go to a specific screen in the stack
//6. goBack() go back to the previous screen
//7. push() always adds a new screen/instance to the stack
