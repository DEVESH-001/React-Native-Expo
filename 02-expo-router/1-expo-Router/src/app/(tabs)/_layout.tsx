// import { Tabs } from "expo-router";

import { Tabs } from "expo-router";
import { View } from "react-native";

// export default function TabsLayout() {
//   return (
//     <Tabs>
//       <Tabs.Screen name="index" />
//     </Tabs>
//   );
// }

//native tabs
// import { NativeTabs } from "expo-router/unstable-native-tabs";

// export default function TabLayout() {
//   return (
//     <NativeTabs tintColor={"tomato"}>
//       <NativeTabs.Trigger name="index">
//         <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
//         <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
//       </NativeTabs.Trigger>

//       <NativeTabs.Trigger name="settings">
//         <NativeTabs.Trigger.Icon sf="gear" md="settings" />
//         <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
//       </NativeTabs.Trigger>
//     </NativeTabs>
//   );
// }

//custom tabs(default expo router tabs)

function MyTabBar({ state, descriptors, navigation }: any) {
  return (
    <View
      style={{
        backgroundColor: "red",
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    ></View>
  );
}
export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="settings" options={{ title: "Settings" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
