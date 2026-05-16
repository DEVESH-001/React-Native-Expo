import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function HomeScreen() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 80,
          paddingBottom: 8,
        },
        tabBarInactiveBackgroundColor: "green",
        tabBarActiveBackgroundColor: "tomato",
        tabBarIcon: ({ focused, color, size }) => {
          const icon =
            route.name === "Home"
              ? focused
                ? "home"
                : "home-outline"
              : route.name === "Search"
                ? focused
                  ? "search"
                  : "search-outline"
                : focused
                  ? "chatbubble"
                  : "chatbubble-outline";
          return <Ionicons name={icon} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Dashboard", tabBarLabel: "Start" }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
}

export default function DynamicTabNavigator() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
