import {
  Text,
  StyleSheet,
  useWindowDimensions,
  useColorScheme,
  Switch,
} from "react-native";
import {
  initialWindowMetrics,
  SafeAreaView,
} from "react-native-safe-area-context";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as ScreenOrientation from "expo-screen-orientation";
import { useState } from "react";
// function UnsafeScreen() {
//   return (
//     <View style={{ flex: 1, backgroundColor: "#000" }}>
//       <Text style={{ color: "#fff", fontSize: 18, padding: 16 }}>
//         Header (bleeds under notch!)
//       </Text>
//       <Text style={{ color: "#aaa", padding: 16 }}>
//         This content might be hidden behind the status bar in dark mode.
//       </Text>
//     </View>
//   );
// }

// function SafeScreen() {
//   return (
//     <SafeAreaView
//       edges={["top", "bottom"]}
//       style={{ flex: 1, backgroundColor: "#000" }}
//     >
//       <Text style={{ color: "#fff", fontSize: 18, padding: 16 }}>
//         Header (Safely under notch!)
//       </Text>
//       <Text style={{ color: "#aaa", padding: 16 }}>
//         This content is safely within the viewport.
//       </Text>
//     </SafeAreaView>
//   );
// }

// export default function Index() {
//   return <SafeScreen />;
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// Using useSafeAreaInsets hook
// const HomeScreen = () => {
//   const insets = useSafeAreaInsets(); // gives padding values for safe areas (useful for notches, home indicators)
//   console.log(insets); // padding values for safe areas
//   console.log(initialWindowMetrics); // provides frame and insets for the entire window

//   return (
//     <View
//       style={[
//         styles.container,
//         { paddingTop: insets.top, paddingBottom: insets.bottom },
//       ]}
//     >
//       <Text>Home Screen</Text>
//       <StatusBar barStyle={"dark-content"} />
//     </View>
//   );
// };

// Using StyleSheet component
// const HomeScreen = () => {
//   return (
//     <SafeAreaView>
//       <View style={[styles.card]}>
//         <StatusBar style="dark" />
//         <Text style={[styles.title]}>Home Screen</Text>
//         <Text style={[styles.subtitle]}>Welcome to the app!</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   card: {
//     padding: 16,
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     margin: 16,
//     elevation: 1, // for Android shadow
//     shadowColor: "#000", // for iOS shadow
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     shadowOffset: {
//       height: 2,
//       width: 0,
//     },
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#666",
//   },
// });

// Using conditional styling with StyleSheet/ using StyleSheet.compose method

// const HomeScreen = () => {
//   const isActive = true;

//   // StyleSheet.compose combines multiple styles into one
//   const buttonStyle = StyleSheet.compose(
//     styles.button,
//     isActive ? styles.activeButton : null,
//   );

//   return (
//     <View style={styles.container}>
//       {/* @ts-ignore */}
//       <View style={buttonStyle}>
//         {/* <View style={[]}></View> [] for multiple styles */}
//         <Text style={styles.buttonText}>Home Screen</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center" },
//   button: {
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 10,
//     backgroundColor: "#ccc", // Default grey
//   },
//   activeButton: {
//     backgroundColor: "#6C63FF", // Override to purple when active
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
// });
// export default HomeScreen;

// StyleSheet.flatten

// const styleA = StyleSheet.create({ text: { color: "red", fontSize: 20 } });
// const styleB = StyleSheet.create({
//   text: { color: "blue", fontWeight: "bold" },
// });

// const flat = StyleSheet.flatten([styleB.text, styleB.text]); // Merges styles, last one wins

// const HomeScreen = () => {
//   return (
//     <SafeAreaView>
//       <Text style={styleA.text}>Flattened StyleSheet</Text>
//       <Text style={styleB.text}>Flattened StyleSheet</Text>
//       <Text style={flat}>Flattened StyleSheet</Text>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;

// dimensions -> useWindowDimensions() : returns an object with height and width properties

// const HomeScreen = () => {
//   const { height, width } = useWindowDimensions();
//   console.log(height, width);

//   return (
//     <SafeAreaView>
//       <Text>Home Screen</Text>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;

// PROJECT -> TODO: Complete it
// https://docs.expo.dev/versions/latest/sdk/screen-orientation/#installation

// const HomeScreen = () => {
//   const { height, width, fontScale, scale } = useWindowDimensions();

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
//     <SafeAreaView style={styles.container}>
//       <Text>
//         <View>
//           <Text>Lock Landscape</Text>
//           <Text>Lock Portrait</Text>
//         </View>
//       </Text>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// useColorScheme :

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
const HomeScreen = () => {
  const systemScheme = useColorScheme();
  const [manualDark, setManulDark] = useState<boolean | null>(null);

  const isDark = manualDark !== null ? manualDark : systemScheme === "dark";
  const theme = isDark ? themes.dark : themes.light;
  console.log(systemScheme);

  return (
    <SafeAreaView style={[styles.container]}>
      <View>
        <Text style={styles.row}>Overrride system theme</Text>
        <Switch
          value={manualDark ?? systemScheme === "dark"}
          onValueChange={setManulDark}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
