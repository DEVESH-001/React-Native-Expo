import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Sign Up</Text>
        <Text>Let's Experience the joy of AI</Text>

        <View style={styles.form}>
          <Text>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
          />
          <Text>Password</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
          />
          <Button title="Sign Up" onPress={() => alert("Sign Up")} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
  },
  form: {
    marginTop: 20,
    gap: 10,
  },
});
