import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const SlugPage = () => {
  const { slug } = useLocalSearchParams() as { slug: string[] };
  return (
    <View>
      <Text>SlugPage</Text>
      <Text>{slug.join("/")}</Text>
      <Text>DocsDynamicPage : : : {Array.isArray(slug) ? slug.join("/") : slug}</Text>
    </View>
  );
};

export default SlugPage;

const styles = StyleSheet.create({});
