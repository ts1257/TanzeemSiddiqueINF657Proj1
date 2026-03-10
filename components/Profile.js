import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

export default function Profile({ firstName, lastName, role, image }) {
  const { width } = useWindowDimensions();
  const isLargeScreen = width >= 768;

  const avatarSize = isLargeScreen ? 120 : 96;

  return (
    <View style={styles.profileHeader}>
      <Image
        source={image}
        style={{
          width: avatarSize,
          height: avatarSize,
          borderRadius: avatarSize / 2,
          marginBottom: 14,
        }}
      />
      <Text style={[styles.name, { fontSize: isLargeScreen ? 28 : 24 }]}>
        {firstName} {lastName}
      </Text>
      <Text style={[styles.role, { fontSize: isLargeScreen ? 16 : 15 }]}>
        {role}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profileHeader: {
    alignItems: "center",
    marginBottom: 24,
  },
  name: {
    fontWeight: "800",
    color: "#0F172A",
  },
  role: {
    color: "#6366F1",
    fontWeight: "600",
    marginTop: 4,
  },
});
