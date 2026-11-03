// - basic-> index.tsx -> text, image, textinput, pressable(onPress, style), conditional rendering
import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [email, setEmail] = useState("");

  return (
    <View>
      <Text numberOfLines={5}>
        Fusion Labs, Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Praesentium sapiente iusto nobis deserunt debitis deleniti totam sint
        commodi nemo, magni ex ad, hic, nesciunt reprehenderit et? Perspiciatis,
        inventore ducimus. Illum! Dolorem illo consequatur quis, molestiae
        tempora, labore saepe nemo mollitia ullam autem deserunt asperiores
        commodi at ut quidem iste obcaecati sapiente iusto ad et. Atque
        praesentium quia aliquam doloribus quaerat! Necessitatibus incidunt,
      </Text>

      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1580920790557-43158492adb5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
        }}
        style={{ width: 300, height: 400 }}
      />
      <TextInput
        placeholder="Enter your email"
        placeholderTextColor="red"
        value={email}
        onChangeText={setEmail}
        style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
      />
      <Image
        source={require("@/assets/images/icon.png")}
        style={{ width: 100, height: 100 }}
        blurRadius={10}
      />
      <Pressable
        //onPress={() => alert("Pressed")}
        onLongPress={() => alert("Pressed")}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} // increase the touch area of the button
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#4a42d4" : "#6C63FF",
        })}
      >
        {({ pressed }) =>
          pressed ? <Text>pressing</Text> : <Text>press</Text>
        }
      </Pressable>
    </View>
  );
}
