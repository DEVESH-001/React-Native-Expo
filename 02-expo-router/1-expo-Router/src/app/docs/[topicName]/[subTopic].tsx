import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const SubTopicFile = () => {
  const { topicName, subTopic } = useLocalSearchParams();
  return (
    <View>
      <Text>SubTopicFile</Text>
      <Text>TopicName: {topicName}</Text>
      <Text>SubTopic: {subTopic}</Text>
    </View>
  );
};

export default SubTopicFile;

const styles = StyleSheet.create({});
