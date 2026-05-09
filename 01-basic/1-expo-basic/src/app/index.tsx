import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  Button,
  Switch,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

// export default function Index() {
//   const [name, setName] = useState("");
//   return (
//     <View style={styles.container}>
//       <Text numberOfLines={2}>
//         {" "}
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptatem
//         eius natusLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
//         voluptatem eius natusLorem ipsum dolor sit amet consectetur adipisicing
//         elit. Ipsa voluptatem eius natusLorem ipsum dolor sit amet consectetur
//         adipisicing elit. Ipsa voluptatem eius natusLorem ipsum dolor sit amet
//         consectetur adipisicing elit. Ipsa voluptatem eius natusLorem ipsum
//         dolor sit amet consectetur adipisicing elit. Ipsa voluptatem eius
//         natusLorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
//       </Text>
//       <Image
//         source={{
//           uri: "https://images.unsplash.com/photo-1777335118390-969261251a29?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         }}
//         style={{ width: 300, height: 300 }}
//       />
//       <Image
//         source={require("@/assets/images/icon.png")}
//         style={{ width: 100, height: 100 }}
//         blurRadius={20}
//       />

//       <TextInput
//         placeholder="Enter your name"
//         value={name}
//         onChangeText={setName}
//         placeholderTextColor={"blue"}
//         style={{
//           borderWidth: 1,
//           borderColor: "blue",
//           padding: 10,
//           borderRadius: 5,
//         }}
//       />
//       <Pressable
//         onPress={() => alert("button press")}
//         style={({ pressed }) => ({
//           backgroundColor: pressed ? "gray" : "blue",
//           padding: 10,
//           borderRadius: 5,
//         })}
//         //hitSlop is used to increase the touchable area
//         hitSlop={{
//           top: 20,
//         }}
//       >
//         <Text>Press me</Text>
//       </Pressable>
//     </View>
//   );
// }

// export default function Index() {
//   const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <ScrollView style={{ backgroundColor: "cream", flex: 1 }}>
//       {items.map((item) => (
//         <Text key={item}>{item}</Text>
//       ))}
//       <Button title="Press me" onPress={() => alert("button press")} />
//       <Switch
//         value={darkMode}
//         onValueChange={setDarkMode}
//         trackColor={{ false: "white", true: "black" }}
//       />
//     </ScrollView>
//   );
// }

//flatlist

// export default function Index() {
//   const users = [
//     {
//       id: 1,
//       name: "John",
//       role: "Developer",
//     },
//     {
//       id: 2,
//       name: "Jane",
//       role: "Designer",
//     },
//     {
//       id: 3,
//       name: "Bob",
//       role: "Manager",
//     },
//   ];
//   return (
//     <FlatList
//       data={users}
//       horizontal={false}
//       keyExtractor={(item) => item.id.toString()}
//       contentContainerStyle={{ padding: 16 }}
//       renderItem={({ item }) => <Text>{item.name}</Text>} // renderItem is a function that takes an object with item and returns a component
//       ItemSeparatorComponent={() => (
//         <View style={{ height: 1, backgroundColor: "gray" }} />
//       )}
//     />
//   );
// }

//KeyboardAvoidingView
export default function Index() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={{ flex: 1, backgroundColor: "pink" }}>
        <Text>KeyboardAvoidingView</Text>
        <TextInput placeholder="Enter your name" />
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

//rnfes -> react native functional empty component with export default
