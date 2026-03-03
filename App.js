import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Button from "./components/Button";

export default function App() {
  const [greeting, setGreeting] = useState("");

  const toggleGreeting = () => {
    setGreeting((prev) => (prev ? "" : "Hello! Welcome to React Native"));
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        <Header title="My First App" />

        <View style={styles.card}>
          <Profile name="Tanzeem Siddique" />

          <Text style={styles.greeting}>{greeting}</Text>

          <Button
            label={greeting ? "Hide Greeting" : "Show Greeting"}
            onPress={toggleGreeting}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#F6F7FB",
  },

  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 30,
    justifyContent: "flex-start",
  },

  card: {
    width: "100%",
    marginTop: 30,
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 22,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
    alignItems: "center",
  },

  greeting: {
    marginTop: 14,
    minHeight: 24,
    fontSize: 15,
    color: "#334155",
    textAlign: "center",
    fontWeight: "600",
  },
});
