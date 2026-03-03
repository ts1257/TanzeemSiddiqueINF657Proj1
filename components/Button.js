import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

export default function Button({ label, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}
    >
      <Text style={styles.btnText}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 18,
    width: "100%",
    backgroundColor: "#4F46E5",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    shadowColor: "#4F46E5",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
  },
  btnPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  btnText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },
});
