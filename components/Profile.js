import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Profile({ name }) {
  return (
    <View style={styles.wrap}>
      <View style={styles.avatarRing}>
        <Image
          source={require("../assets/profile.jpg")}
          style={styles.avatar}
        />
      </View>

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>React Native Student</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: "center",
    paddingTop: 6,
  },
  avatarRing: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#EEF2FF",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 105,
    height: 105,
    borderRadius: 52.5,
  },
  name: {
    marginTop: 14,
    fontSize: 18,
    fontWeight: "800",
    color: "#0F172A",
  },
  role: {
    marginTop: 4,
    fontSize: 13,
    fontWeight: "600",
    color: "#64748B",
  },
});
