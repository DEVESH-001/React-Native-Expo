import Home from "@/components/home";
import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      {/* <Home />
      <Link href="/about">About Page</Link> */}

      {/* Auth Routes */}
      {/* <Link href="/(auth)/login">Login</Link> */}

      {/* Main Routes */}
      {/* <Link href={"/(auth)/login"}>Login-New</Link> */}

      {/* Native-Tabs */}
      {/* <Link href="/(tabs)/">Tabs</Link> */}

      {/* Drawer */}
      <Link href="/(drawer)/">Drawer</Link>
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

// index.tsx : is the default route for the app, and it will be rendered when the user navigates to the root URL of the app.
