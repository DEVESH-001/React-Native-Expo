# https://expo.dev/new/develop - New project

- npx create-expo-app my-app
- cd my-app
- npx eas-cli@latest login
- npx eas-cli@latest init

- basic-> index.tsx -> text, image, textinput, pressable(onPress, style), conditional rendering
- look-up for android iOS styling difference
- scrollView is not optimised, use `FlatList`(infinite scrolling), also there is SectionList
<!-- <FlatList
     data={USERS}
     keyExtractor={(item) => item.id} // keyExtractor is used to extract the key from the item
     renderItem={({ item }) => <Text>{item.name}</Text>} // renderItem is used to render the item in the list
     contentContainerStyle={{ padding: 16 }} // contentContainerStyle is used to add padding to the list
     ItemSeparatorComponent={() => (
       <View style={{ height: 1, backgroundColor: "red" }} />
     )}
   /> -->
- और यहीं पर एक concept और आता है कि कभी भी जो आपकी keys होती हैं, उनको index में नहीं देना चाहिए।

- use import { SafeAreaView } from "react-native-safe-area-context"; that work's on both ios & android (useful when any content is going out of the screen, then use it) [https://docs.expo.dev/develop/user-interface/safe-areas/#alternate-usesafeareainsets-hook] ~more advance via expo

- Expo ScreenOrientation(A universal library for managing a device's screen orientation)
- Expo Router