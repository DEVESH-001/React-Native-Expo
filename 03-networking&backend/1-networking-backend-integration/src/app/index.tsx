import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch(
          "https://api.freeapi.app/api/v1/public/randomusers/user/random",
        );
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log("❌ fetch data", error);
      }
    }
    fetchUserData();
  }, []);
  return (
    <View style={styles.container}>
      <Text>Backend Integration</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
