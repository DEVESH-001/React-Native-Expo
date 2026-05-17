import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const UserIDScreen = () => {
  const { userId } = useLocalSearchParams();
  return (
    <View>
      <Text>UserIDScreen</Text>
      <Text>{userId}</Text>
    </View>
  );
};

export default UserIDScreen;

const styles = StyleSheet.create({});
