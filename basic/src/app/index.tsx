// - basic-> index.tsx -> text, image, textinput, pressable(onPress, style), conditional rendering
// import { useState } from "react";
// import { Image, Pressable, Text, TextInput, View } from "react-native";

// export default function HomeScreen() {
//   const [email, setEmail] = useState("");

//   return (
//     <View>
//       <Text numberOfLines={5}>
//         Fusion Labs, Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Praesentium sapiente iusto nobis deserunt debitis deleniti totam sint
//         commodi nemo, magni ex ad, hic, nesciunt reprehenderit et? Perspiciatis,
//         inventore ducimus. Illum! Dolorem illo consequatur quis, molestiae
//         tempora, labore saepe nemo mollitia ullam autem deserunt asperiores
//         commodi at ut quidem iste obcaecati sapiente iusto ad et. Atque
//         praesentium quia aliquam doloribus quaerat! Necessitatibus incidunt,
//       </Text>

//       <Image
//         source={{
//           uri: "https://images.unsplash.com/photo-1580920790557-43158492adb5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
//         }}
//         style={{ width: 300, height: 400 }}
//       />
//       <TextInput
//         placeholder="Enter your email"
//         placeholderTextColor="red"
//         value={email}
//         onChangeText={setEmail}
//         style={{
//           borderWidth: 1,
//           borderColor: "black",
//           padding: 10,
//           borderRadius: 5,
//           marginBottom: 10,
//         }}
//       />
//       <Image
//         source={require("@/assets/images/icon.png")}
//         style={{ width: 100, height: 100 }}
//         blurRadius={10}
//       />
//       <Pressable
//         //onPress={() => alert("Pressed")}
//         onLongPress={() => alert("Pressed")}
//         hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} // increase the touch area of the button
//         style={({ pressed }) => ({
//           backgroundColor: pressed ? "#4a42d4" : "#6C63FF",
//         })}
//       >
//         {({ pressed }) =>
//           pressed ? <Text>pressing</Text> : <Text>press</Text>
//         }
//       </Pressable>
//     </View>
//   );
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ScrollView, Flatlist~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// import { useState } from "react";
// import {
//   Button,
//   FlatList,
//   KeyboardAvoidingView,
//   ScrollView,
//   StyleSheet,
//   Switch,
//   Text,
//   View,
// } from "react-native";

// const HomeScreen = () => {
//   //const items = Array.from({ length: 20 }, (_, i) => `arunima ${i + 1}`);
//   //const [isDarkMode, setIsDarkMode] = useState(false);
//   //---------------------------------------flatlist
//   const USERS = [
//     { id: "1", name: "Devesh yadav", role: "Developer" },
//     { id: "2", name: "neelesh yadav", role: "Developer" },
//     { id: "3", name: "Devesh yadav", role: "Developer" },
//     { id: "4", name: "neeles yadav", role: "Developer" },
//     { id: "5", name: "Devesh yadav", role: "Developer" },
//   ];
//   return (
//     //-----------------------------------------------------------------ScrollView-----------------------------------------------
//     // <ScrollView
//     //   style={{ flex: 1 }}
//     //   contentContainerStyle={{ padding: 16, alignItems: "center" }}
//     // >
//     //   {items.map((item) => (
//     //     <Text key={item}>{item}</Text>
//     //   ))}
//     //   <Button
//     //     title="Hello"
//     //     color={"green"}
//     //     onPress={() => alert("Hello World")}
//     //   />
//     //   <Switch
//     //     value={isDarkMode}
//     //     onValueChange={setIsDarkMode}
//     //     trackColor={{ false: "blue", true: "green" }}
//     //     // thumbColor={"yellow"}
//     //   />
//     // </ScrollView>
//     // -----------------FlatList
//     // <FlatList
//     //   data={USERS}
//     //   keyExtractor={(item) => item.id} // keyExtractor is used to extract the key from the item
//     //   renderItem={({ item }) => <Text>{item.name}</Text>} // renderItem is used to render the item in the list
//     //   contentContainerStyle={{ padding: 16 }} // contentContainerStyle is used to add padding to the list
//     //   ItemSeparatorComponent={() => (
//     //     <View style={{ height: 1, backgroundColor: "red" }} />
//     //   )}
//     // />

//     // <KeyboardAvoidingView>
//     //   <View style={{ flex: 1, justifyContent: "flex-end", padding: 24 }}></View>
//     // </KeyboardAvoidingView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({});

// useSafeAreaInsets: A hook that returns the insets of the safe area of the device(useful when any content is going out of the screen, then use it) [https://docs.expo.dev/develop/user-interface/safe-areas/#alternate-usesafeareainsets-hook] ~more advance via expo

// import { StatusBar, StyleSheet, Text, View } from "react-native";
// import React from "react";
// import {
//   SafeAreaView,
//   useSafeAreaInsets,
// } from "react-native-safe-area-context";

// const index = () => {
//   const insets = useSafeAreaInsets();
//   console.log(insets);

//   return (
//     <View style={{ flex: 1, paddingTop: insets.top, backgroundColor: "red" }}>
//       <StatusBar barStyle="dark-content" />
//       <Text>Content is in safe area.</Text>
//     </View>
//   );
// };

// export default index;

// const styles = StyleSheet.create({

// });

// -------------------------Expo ScreenOrientation(A universal library for managing a device's screen orientation)----------------

// import { View, Text, useWindowDimensions } from "react-native";
// import * as ScreenOrientation from "expo-screen-orientation";

// const ScreenOrientationTutorial = () => {
//   const { height, width } = useWindowDimensions();

//   const isTablet = width >= 768;
//   const isLandscape = width > height;

//   const lockLandscape = async () => {
//     await ScreenOrientation.lockAsync(
//       ScreenOrientation.OrientationLock.LANDSCAPE,
//     );
//   };

//   const lockPortrait = async () => {
//     await ScreenOrientation.lockAsync(
//       ScreenOrientation.OrientationLock.PORTRAIT,
//     );
//   };

//   return (
//     <View>
//       <Text>ScreenOrientation</Text>
//     </View>
//   );
// };

// export default ScreenOrientationTutorial;

// -------------------------------- useColorScheme() --------------------------------

import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Switch, Text, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const themes = {
  light: {
    background: "#FFFFFF",
    card: "#F5F5F5",
    text: "#1A1A1A",
    subtext: "#666666",
    accent: "#6C63FF",
  },
  dark: {
    background: "#121212",
    card: "#1E1E1E",
    text: "#FFFFFF",
    subtext: "#AAAAAA",
    accent: "#9D97FF",
  },
};

const ThemeSwitchDemo = () => {
  const systemScheme = useColorScheme(); //light/dark
  const [manualDark, setManualDark] = useState<boolean | null>(null);

  const isDark = manualDark !== null ? manualDark : systemScheme === "dark";
  const theme = isDark ? themes.dark : themes.light;

  console.log(systemScheme);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <StatusBar style={manualDark ? "light" : "dark"} />
      {/* Header */}
      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <Text style={[styles.title, { color: theme.text }]}>
          {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </Text>
        <Text style={[styles.subtitle, { color: theme.subtext }]}>
          System preference: {systemScheme ?? "unknown"}
        </Text>
      </View>

      {/* Toggle Row */}
      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <View style={styles.row}>
          <Text style={[styles.label, { color: theme.text }]}>
            Override system theme
          </Text>
          <Switch
            value={manualDark ?? systemScheme === "dark"}
            onValueChange={setManualDark}
            trackColor={{ false: "#ddd", true: theme.accent }}
            thumbColor="white"
          />
        </View>
      </View>

      {/* Content Card */}
      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <Text style={[styles.title, { color: theme.accent }]}>
          Themed Card 🎨
        </Text>
        <Text style={[styles.subtitle, { color: theme.subtext }]}>
          Colors adapt to dark/light mode automatically
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ThemeSwitchDemo;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12 },
  card: { padding: 20, borderRadius: 16 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 20, fontWeight: "bold" },
  subtitle: { fontSize: 14, marginTop: 4 },
  label: { fontSize: 16 },
});
