import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button title="go to Home" onPress={() => navigation.popToTop("Home")} />
      {/* //PopTo ->  */}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});

// hooks in useNavigation()
//1. navigate() go to a screen by name
//2. replace() replace the current screen with a new screen
//3. popToTop() go to the top of the stack
//4. pop() go back to the previous screen
//5. goBack() go back to the previous screen
