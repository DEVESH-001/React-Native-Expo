import { Button, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const DetailScreen = ({ route }: any) => {
  
  const navigation = useNavigation<any>();
  const { username } = route.params; // getting data from home screen

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Devesh Yadav",
    });
  });
  return (
    <View>
      <Text>DetailScreen</Text>
      <Text>{username}</Text>
      <Button title="Go back to home" onPress={() => navigation.goBack()} />
      <Button
        title="Go to profile"
        onPress={() => navigation.replace("Profile")}
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
