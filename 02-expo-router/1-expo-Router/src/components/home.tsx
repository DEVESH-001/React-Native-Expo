import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Link href="/profile/details">Go to Profile Details</Link>
      {/* dynamic-route */}
      <Link href={"/user/911"}>userID</Link>

      {/* nested-dynamic-route */}
      <Link href={"/docs/React"}>Go to Docs</Link>
      <Link href={"/docs/JavaScript/Getting-Started"}>Go to Enhances Docs</Link>
      {/* deep-nested-dynamic-route [...slug]-> `catch-all route` */}
      <Link href={"/new-docs/devesh/yadav/alwar"}>Go to devesh Docs</Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
