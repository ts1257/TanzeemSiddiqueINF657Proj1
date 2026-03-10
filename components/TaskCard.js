import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";

export default function TaskCard({ task, onPress, onComplete }) {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 400;
  const isLargeScreen = width >= 768;

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Image
          source={task.image}
          style={[
            styles.thumbnail,
            {
              width: isLargeScreen ? 90 : isSmallScreen ? 64 : 78,
              height: isLargeScreen ? 90 : isSmallScreen ? 64 : 78,
            },
          ]}
          resizeMode="cover"
        />

        <View style={styles.textSection}>
          <Text
            style={[
              styles.title,
              { fontSize: isLargeScreen ? 20 : isSmallScreen ? 16 : 18 },
            ]}
          >
            {task.title}
          </Text>

          <Text
            style={[styles.description, { fontSize: isLargeScreen ? 15 : 14 }]}
            numberOfLines={2}
          >
            {task.description}
          </Text>

          <View
            style={[
              styles.statusPill,
              task.completed ? styles.completedPill : styles.pendingPill,
            ]}
          >
            <Text
              style={[
                styles.statusText,
                task.completed ? styles.completedText : styles.pendingText,
              ]}
            >
              {task.completed ? "Completed" : "Pending"}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.buttonRow}>
        <Pressable style={styles.outlineButton} onPress={onPress}>
          <Text style={styles.outlineButtonText}>Details</Text>
        </Pressable>

        <Pressable
          style={[
            styles.primaryButton,
            task.completed && styles.disabledButton,
          ]}
          onPress={onComplete}
          disabled={task.completed}
        >
          <Text style={styles.primaryButtonText}>
            {task.completed ? "Done" : "Complete"}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 14,
    marginBottom: 14,
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    elevation: 3,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  thumbnail: {
    borderRadius: 16,
    marginRight: 14,
  },
  textSection: {
    flex: 1,
    minWidth: 0,
  },
  title: {
    fontWeight: "800",
    color: "#0F172A",
    marginBottom: 6,
  },
  description: {
    lineHeight: 20,
    color: "#64748B",
    marginBottom: 10,
  },
  statusPill: {
    alignSelf: "flex-start",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  pendingPill: {
    backgroundColor: "#FEF3C7",
  },
  completedPill: {
    backgroundColor: "#DCFCE7",
  },
  statusText: {
    fontSize: 12,
    fontWeight: "700",
  },
  pendingText: {
    color: "#B45309",
  },
  completedText: {
    color: "#15803D",
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 14,
    gap: 10,
  },
  outlineButton: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: "#D4D4D8",
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
  },
  outlineButtonText: {
    color: "#0F172A",
    fontSize: 14,
    fontWeight: "700",
  },
  primaryButton: {
    flex: 1,
    backgroundColor: "#6366F1",
    paddingVertical: 12,
    borderRadius: 14,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#94A3B8",
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
});
