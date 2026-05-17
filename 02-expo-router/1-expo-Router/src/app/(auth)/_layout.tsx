import { Stack } from "expo-router";

export default function AuthLayout() {
  const isLoggedIn = false;
  return (
    // <Stack
    //   screenOptions={{
    //     headerShown: true,
    //     headerTitle: "Auth",
    //     headerTitleAlign: "center",
    //   }}
    // />

    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: "Auth",
        headerTitleAlign: "center",
      }}
    >
      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>

      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="login" />
      </Stack.Protected>
    </Stack>
  );
}
