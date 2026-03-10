import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TaskDetailsScreen({ route, navigation }) {
  const { task, onComplete } = route.params;

  const { width } = useWindowDimensions();
  const isLargeScreen = width >= 768;

  if (!task) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.notFoundText}>Task not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.wrapper,
            { maxWidth: isLargeScreen ? 900 : "100%", alignSelf: "center" },
          ]}
        >
          <View style={styles.imageWrapper}>
            <Image
              source={task.image}
              style={[styles.image, { height: isLargeScreen ? 320 : 220 }]}
              resizeMode="cover"
            />
          </View>

          <View style={styles.contentCard}>
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

            <Text style={[styles.title, { fontSize: isLargeScreen ? 30 : 26 }]}>
              {task.title}
            </Text>

            <Text
              style={[
                styles.description,
                { fontSize: isLargeScreen ? 16 : 15 },
              ]}
            >
              {task.description}
            </Text>

            <Text style={styles.detailsTitle}>More Details</Text>
            <Text style={styles.detailsText}>{task.details}</Text>

            {!task.completed && (
              <TouchableOpacity
                style={styles.completeButton}
                onPress={() => {
                  console.log(
                    "Task completed from details screen:",
                    task.title,
                  );
                  if (onComplete) {
                    onComplete();
                  }
                  navigation.goBack();
                }}
              >
                <Text style={styles.completeButtonText}>Mark as Completed</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backButtonText}>Go Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    padding: 16,
  },
  wrapper: {
    width: "100%",
  },
  imageWrapper: {
    borderRadius: 24,
    overflow: "hidden",
    marginBottom: 16,
  },
  image: {
    width: "100%",
  },
  contentCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    shadowColor: "#0F172A",
    shadowOpacity: 0.05,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  statusPill: {
    alignSelf: "flex-start",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 999,
    marginBottom: 14,
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
  title: {
    fontWeight: "800",
    color: "#0F172A",
    marginBottom: 12,
  },
  description: {
    lineHeight: 24,
    color: "#475569",
    marginBottom: 16,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0F172A",
    marginBottom: 8,
  },
  detailsText: {
    fontSize: 15,
    lineHeight: 24,
    color: "#64748B",
  },
  completeButton: {
    marginTop: 24,
    backgroundColor: "#4F46E5",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  completeButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  backButton: {
    marginTop: 12,
    backgroundColor: "#E2E8F0",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  backButtonText: {
    color: "#0F172A",
    fontSize: 16,
    fontWeight: "700",
  },
  notFoundText: {
    fontSize: 18,
    color: "#0F172A",
    textAlign: "center",
    marginTop: 40,
  },
});
