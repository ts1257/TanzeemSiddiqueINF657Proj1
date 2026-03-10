import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TaskCard from "../components/TaskCard";
import tasksData from "../data/tasks";

export default function HomeScreen({ navigation }) {
  const [tasks, setTasks] = useState(tasksData);
  const { width } = useWindowDimensions();

  const completedCount = tasks.filter((task) => task.completed).length;
  const isLargeScreen = width >= 768;

  const handleComplete = (id) => {
    console.log("Complete button pressed for task id:", id);

    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: true } : task,
    );

    setTasks(updatedTasks);
    console.log("Updated task list:", updatedTasks);
  };

  const handleTaskPress = (task) => {
    console.log("Navigating to task details:", task.title);
    navigation.navigate("Task Details", {
      task,
      onComplete: () => handleComplete(task.id),
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.contentWrapper,
          { maxWidth: isLargeScreen ? 900 : "100%", alignSelf: "center" },
        ]}
      >
        <View style={styles.heroSection}>
          <Text
            style={[styles.heroTitle, { fontSize: isLargeScreen ? 36 : 30 }]}
          >
            Task Manager
          </Text>
          <Text
            style={[styles.heroSubtitle, { fontSize: isLargeScreen ? 16 : 15 }]}
          >
            Stay organized and finish your work
          </Text>

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{tasks.length}</Text>
              <Text style={styles.statLabel}>Total Tasks</Text>
            </View>

            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{completedCount}</Text>
              <Text style={styles.statLabel}>Completed</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskCard
              task={item}
              onPress={() => handleTaskPress(item)}
              onComplete={() => handleComplete(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  contentWrapper: {
    width: "100%",
    flex: 1,
  },
  heroSection: {
    marginBottom: 18,
  },
  heroTitle: {
    fontWeight: "800",
    color: "#0F172A",
  },
  heroSubtitle: {
    color: "#64748B",
    marginTop: 4,
    marginBottom: 18,
  },
  statsRow: {
    flexDirection: "row",
    gap: 12,
  },
  statBox: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingVertical: 18,
    paddingHorizontal: 16,
    boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: "800",
    color: "#6366F1",
  },
  statLabel: {
    fontSize: 14,
    color: "#64748B",
    marginTop: 4,
    fontWeight: "600",
  },
  listContent: {
    paddingBottom: 24,
  },
});
