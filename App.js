import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Pressable,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TaskDetailsScreen from "./screens/TaskDetailsScreen";

const Stack = createNativeStackNavigator();

function HeaderAvatar({ navigation }) {
  const { width } = useWindowDimensions();

  const isSmallScreen = width < 400;
  const isLargeScreen = width >= 768;

  const avatarSize = isLargeScreen ? 42 : isSmallScreen ? 30 : 34;

  return (
    <Pressable
      onPress={() => navigation.navigate("Profile")}
      style={styles.avatarButton}
    >
      <Image
        source={require("./assets/profile.jpg")}
        style={{
          width: avatarSize,
          height: avatarSize,
          borderRadius: avatarSize / 2,
          borderWidth: 2,
          borderColor: "rgba(255,255,255,0.9)",
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Task Manager"
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: "#6366F1",
          },
          headerTintColor: "#FFFFFF",
          headerTitleAlign: "left",
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: "700",
            fontSize: 20,
          },
          contentStyle: {
            backgroundColor: "#F8FAFC",
          },
          headerRight: () => <HeaderAvatar navigation={navigation} />,
        })}
      >
        <Stack.Screen
          name="Task Manager"
          component={HomeScreen}
          options={{ title: "Task Manager" }}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Profile" }}
        />

        <Stack.Screen
          name="Task Details"
          component={TaskDetailsScreen}
          options={{ title: "Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  avatarButton: {
    marginRight: 8,
  },
});
