//https://react-native-async-storage.github.io/2.0/API/#multiset
import { Text, View, StyleSheet, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [data, setData] = useState("");

  const myObj = {
    name: "devesh",
    age: 25,
    role: "developer",
  };

  // setItem
  const saveData = async () => {
    //await AsyncStorage.setItem("user", "Devesh");
    await AsyncStorage.setItem("user", JSON.stringify(myObj));
  };

  // getItem
  const getData = async () => {
    const value = await AsyncStorage.getItem("user");
    setData(value!);
    console.log(value);
  };

  // removeItem
  const removeData = async () => {
    await AsyncStorage.removeItem("user");
  };

  // clearItem
  const clearData = async () => {
    await AsyncStorage.clear();
  };

  // getAllKeys
  const getAllKeys = async () => {
    const keys = await AsyncStorage.getAllKeys();
    console.log(keys);
  };

  // saveMultipleItems :multiSet-> (Fetches multiple key-value pairs for given array)
  const saveMultiple = async () => {
    await AsyncStorage.multiSet([
      ["user", "Devesh"],
      ["age", "25"],
      ["role", "founder@fusionlabs"],
    ]);
  };

  // multiGet ->Stores multiple key-value pairs in a batch.
  const getMultiple = async () => {
    const values = await AsyncStorage.multiGet(["user", "age"]);
    console.log(values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Save Data" onPress={saveData} />
      <Button title="Get Data" onPress={getData} />
      <Button title="Remove Data" onPress={removeData} />
      <Button title="Clear Storage" onPress={clearData} />
      <Button title="Get All Keys" onPress={getAllKeys} />
      <Button title="Save Multiple" onPress={saveMultiple} />
      <Button title="Get Multiple" onPress={getMultiple} />

      <View style={{ marginTop: 20 }}>
        <Text style={styles.output}>Output : </Text>
        <Text>{data}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 12,
  },
  output: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
