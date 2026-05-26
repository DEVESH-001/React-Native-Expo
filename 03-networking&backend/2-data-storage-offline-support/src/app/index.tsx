// //https://react-native-async-storage.github.io/2.0/API/#multiset
// import { Text, View, StyleSheet, Button } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";

// export default function Index() {
//   const [data, setData] = useState("");

//   const myObj = {
//     name: "devesh",
//     age: 25,
//     role: "developer",
//   };

//   // setItem
//   const saveData = async () => {
//     //await AsyncStorage.setItem("user", "Devesh");
//     await AsyncStorage.setItem("user", JSON.stringify(myObj));
//   };

//   // getItem
//   const getData = async () => {
//     const value = await AsyncStorage.getItem("user");
//     setData(value!);
//     console.log(value);
//   };

//   // removeItem
//   const removeData = async () => {
//     await AsyncStorage.removeItem("user");
//   };

//   // clearItem
//   const clearData = async () => {
//     await AsyncStorage.clear();
//   };

//   // getAllKeys
//   const getAllKeys = async () => {
//     const keys = await AsyncStorage.getAllKeys();
//     console.log(keys);
//   };

//   // saveMultipleItems :multiSet-> (Fetches multiple key-value pairs for given array)
//   const saveMultiple = async () => {
//     await AsyncStorage.multiSet([
//       ["user", "Devesh"],
//       ["age", "25"],
//       ["role", "founder@fusionlabs"],
//     ]);
//   };

//   // multiGet ->Stores multiple key-value pairs in a batch.
//   const getMultiple = async () => {
//     const values = await AsyncStorage.multiGet(["user", "age"]);
//     console.log(values);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Button title="Save Data" onPress={saveData} />
//       <Button title="Get Data" onPress={getData} />
//       <Button title="Remove Data" onPress={removeData} />
//       <Button title="Clear Storage" onPress={clearData} />
//       <Button title="Get All Keys" onPress={getAllKeys} />
//       <Button title="Save Multiple" onPress={saveMultiple} />
//       <Button title="Get Multiple" onPress={getMultiple} />

//       <View style={{ marginTop: 20 }}>
//         <Text style={styles.output}>Output : </Text>
//         <Text>{data}</Text>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//     gap: 12,
//   },
//   output: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// SecureStore in Expo [https://docs.expo.dev/versions/latest/sdk/securestore/]

// import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
// import * as SecureStore from "expo-secure-store";
// import { useState } from "react";
// import { SafeAreaView } from "react-native-safe-area-context";

// const Index = () => {
//   const [output, setOutput] = useState<string>("");

//   const saveToken = async () => {
//     await SecureStore.setItemAsync("token", "abc123xyz"); // this stores the token securely
//     setOutput("Token saved successfully");
//   };

//   const getToken = async () => {
//     const value = await SecureStore.getItemAsync("token");
//     setOutput(value || "No token found");
//   };

//   const deleteToken = async () => {
//     await SecureStore.deleteItemAsync("token");
//     setOutput("Token deleted successfully");
//   };

//   const checkAvailability = async () => {
//     const available = await SecureStore.isAvailableAsync();

//     setOutput(
//       available ? "SecureStore Available" : "SecureStore Not Available",
//     );
//   };

//   const saveObject = async () => {
//     const user = {
//       name: "Devesh yadav",
//       role: "founder",
//     };
//     await SecureStore.setItemAsync("user", JSON.stringify(user));
//     setOutput("Object saved successfully");
//   };

//   const getObject = async () => {
//     const data = await SecureStore.getItemAsync("user");

//     if (!data) {
//       setOutput("No User Found");
//       return;
//     }

//     const parsed = JSON.parse(data);

//     setOutput(`${parsed.name} - ${parsed.role}`);
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <ScrollView
//         contentContainerStyle={{
//           padding: 20,
//           gap: 12,
//         }}
//       >
//         <Text
//           style={{
//             fontSize: 28,
//             fontWeight: "bold",
//             marginBottom: 10,
//           }}
//         >
//           Expo FileSystem Modern API
//         </Text>

//         <Button title="Save Token" onPress={saveToken} />
//         <Button title="Get Token" onPress={getToken} />
//         <Button title="Delete Token" onPress={deleteToken} />
//         <Button title="Check Availability" onPress={checkAvailability} />
//         <Button title="Get Object" onPress={getObject} />
//         <Button title="Save Object" onPress={saveObject} />

//         <Text style={styles.output}>OUTPUT: {output}</Text>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default Index;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//     gap: 12,
//   },
//   output: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// SQlite [https://docs.expo.dev/versions/latest/sdk/sqlite/]
// import * as SQLite from "expo-sqlite";
// import React, { useEffect, useState } from "react";
// import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// const db = SQLite.openDatabaseSync("demo.db");

// const index = () => {
//   const [output, setOutput] = useState("");

//   const createTable = () => {
//     db.execSync(`
//         CREATE TABLE IF NOT EXISTS users (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name TEXT,
//         age INTEGER
//       );

//       `);

//     setOutput("Table created");
//   };

//   const insertUser = () => {
//     db.runSync("INSERT INTO users (name , age) VALUES (? , ?)", "Suraj", 22);
//   };

//   const getUsers = () => {
//     const users = db.getAllSync("SELECT * FROM users");

//     setOutput(JSON.stringify(users, null, 2));
//   };

//   const getFirstUser = () => {
//     const user = db.getFirstSync("SELECT * FROM users");

//     setOutput(JSON.stringify(user, null, 2));
//   };

//   const updateUser = () => {
//     db.runSync("UPDATE users SET age = ? WHERE id = ?", 25, 1);

//     setOutput("User Updated");
//   };

//   const deleteUser = () => {
//     db.runSync("DELETE FROM users WHERE id = ?", 1);

//     setOutput("User Deleted");
//   };

//   const dropTable = () => {
//     db.execSync(`
//       DROP TABLE IF EXISTS users;
//     `);

//     setOutput("Table Dropped");
//   };

//   useEffect(() => {
//     createTable();
//   }, []);

//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//       }}
//     >
//       <ScrollView
//         contentContainerStyle={{
//           padding: 20,
//           gap: 12,
//         }}
//       >
//         <Text
//           style={{
//             fontSize: 28,
//             fontWeight: "bold",
//             marginBottom: 10,
//           }}
//         >
//           SQLite Demo
//         </Text>

//         <Button title="Create Table" onPress={createTable} />

//         <Button title="Insert User" onPress={insertUser} />

//         <Button title="Get All Users" onPress={getUsers} />

//         <Button title="Get First User" onPress={getFirstUser} />

//         <Button title="Update User" onPress={updateUser} />

//         <Button title="Delete User" onPress={deleteUser} />

//         <Button title="Drop Table" onPress={dropTable} />

//         <View
//           style={{
//             marginTop: 20,
//             padding: 16,
//             borderWidth: 1,
//             borderRadius: 10,
//           }}
//         >
//           <Text
//             style={{
//               fontSize: 18,
//               fontWeight: "bold",
//               marginBottom: 10,
//             }}
//           >
//             Output
//           </Text>

//           <Text
//             selectable
//             style={{
//               fontSize: 14,
//             }}
//           >
//             {output}
//           </Text>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default index;

// const styles = StyleSheet.create({});

// Expo File System [https://docs.expo.dev/versions/latest/sdk/filesystem/]
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { File, Paths, Directory } from "expo-file-system";
import * as FileSystem from "expo-file-system";
import { useState } from "react";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [output, setOutput] = useState<string>("");
  const [downloadedImageUri, setDownloadedImageUri] = useState<string | null>(
    null,
  );

  // const file = new File(Paths.cache, "demo.txt"); // this creates a file object in the cache directory
  // console.log(file);

  // create file
  const demoFile = new File(Paths.document, "demo.txt");
  //console.log(Paths.document);

  const writeFile = async () => {
    demoFile.write("Hello Expo File System");
  };

  const readFile = async () => {
    const data = await demoFile.text();
    setOutput(data);
    return data;
  };

  // copy file
  const copiedFile = new File(Paths.document, "demo_copy.txt");
  //console.log("COPIED__FILE : : ", copiedFile);

  const copyFile = () => {
    demoFile.copy(copiedFile);

    setOutput("File copied successfully");
  };

  const movedFile = new File(Paths.document, "moved-demo.txt");

  // append -> add content to the end of the file
  const appendFile = async () => {
    const oldData = await readFile(); // get the existing content
    // now append new content to the existing content
    demoFile.write(oldData + "\nNew content");
  };

  const moveFile = async () => {
    copiedFile.move(movedFile);
  };

  const deleteAllFile = () => {
    demoFile.delete();
    copiedFile.delete();
    movedFile.delete();
    setOutput("File deleted ✅");
  };

  const getFileInfo = () => {
    const info = {
      exists: demoFile.exists,
      size: demoFile.size,
      uri: demoFile.uri,
      name: demoFile.name,
    };
    setOutput(JSON.stringify(info, null, 2));
  };

  //      ~~~ CREATING DIRECTORY ~~~

  const notesDirectory = new Directory(Paths.document, "notes");
  //console.log("NOTES DIRECTORY : : ", notesDirectory);

  //     ~~ CREATING/READING FOLDER IN DIRECTORY ~~
  const createFolder = () => {
    notesDirectory.create();
  };
  const readFolderDir = () => {
    const files = notesDirectory.list();
  };

  const readDir = () => {
    const files = notesDirectory.list();
    setOutput(
      JSON.stringify(
        files.map((f) => f.uri),
        null,
        2,
      ),
    );
  };

  //      ~~~ DOWNLOADING ~~~

  const downloadFile = async () => {
    const folder = new Directory(Paths.cache, "images");
    folder.create();

    const downloadedFile = await File.downloadFileAsync(
      "https://picsum.photos/300",
      folder,
    );

    setDownloadedImageUri(downloadedFile.uri);

    setOutput(
      JSON.stringify(
        {
          uri: downloadedFile.uri,
          exists: downloadedFile.exists,
          size: downloadedFile.size,
        },
        null,
        2,
      ),
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          padding: 20,
          gap: 12,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Expo FileSystem Modern API
        </Text>

        <Button title="1. Write File" onPress={writeFile} />
        <Button title="2. Read File" onPress={readFile} />
        <Button title="3. Append File" onPress={appendFile} />
        <Button title="4. Get File Info" onPress={getFileInfo} />
        <Button title="5. Copy File" onPress={copyFile} />
        <Button title="6. Move File" onPress={moveFile} />
        <Button title="7. Create Folder" onPress={createFolder} />
        <Button title="8. Read Directory" onPress={readDir} />
        <Button title="9. Download File" onPress={downloadFile} />
        <Button title="10. Delete All Files" onPress={deleteAllFile} />

        <View
          style={{
            marginTop: 20,
            padding: 16,
            borderWidth: 1,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Output
          </Text>

          <Text selectable>{output}</Text>
        </View>

        {downloadedImageUri ? (
          <View
            style={{
              marginTop: 20,
              alignItems: "center",
              gap: 8,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Downloaded Image
            </Text>

            <Image
              source={{ uri: downloadedImageUri }}
              style={{
                width: 300,
                height: 300,
                borderRadius: 10,
              }}
              contentFit="cover"
            />
          </View>
        ) : null}

        <View
          style={{
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            Paths.document
          </Text>

          <Text selectable>{Paths.document.uri}</Text>

          <Text
            style={{
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Paths.cache
          </Text>

          <Text selectable>{Paths.cache.uri}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
