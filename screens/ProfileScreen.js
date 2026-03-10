import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Profile from "../components/Profile";

export default function ProfileScreen({ navigation }) {
  const [firstName, setFirstName] = useState("Tanzeem");
  const [lastName, setLastName] = useState("Siddique");
  const [email, setEmail] = useState("tanzeem@example.com");
  const [phone, setPhone] = useState("(555) 123-4567");
  const [username, setUsername] = useState("tanzeemsiddique");
  const [address, setAddress] = useState("Irving, Texas");

  const { width } = useWindowDimensions();

  const isTablet = width >= 768;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[
            styles.wrapper,
            { maxWidth: isTablet ? 900 : "100%", alignSelf: "center" },
          ]}
        >
          <Text style={[styles.pageTitle, { fontSize: isTablet ? 36 : 30 }]}>
            Profile
          </Text>

          <Text style={styles.pageSubtitle}>
            Manage your personal information
          </Text>

          <View style={styles.card}>
            <Profile
              firstName={firstName}
              lastName={lastName}
              role="React Native Student"
              image={require("../assets/profile.jpg")}
            />

            <View
              style={[
                styles.formContainer,
                { flexDirection: isTablet ? "row" : "column" },
              ]}
            >
              <View style={[styles.column, isTablet && styles.columnSpacing]}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>First Name</Text>
                  <TextInput
                    style={styles.input}
                    value={firstName}
                    onChangeText={setFirstName}
                  />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Last Name</Text>
                  <TextInput
                    style={styles.input}
                    value={lastName}
                    onChangeText={setLastName}
                  />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Username</Text>
                  <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                  />
                </View>
              </View>

              <View style={styles.column}>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Email</Text>
                  <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                  />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Phone</Text>
                  <TextInput
                    style={styles.input}
                    value={phone}
                    onChangeText={setPhone}
                    keyboardType="phone-pad"
                  />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Address</Text>
                  <TextInput
                    style={styles.input}
                    value={address}
                    onChangeText={setAddress}
                  />
                </View>
              </View>
            </View>

            <Pressable style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save Profile</Text>
            </Pressable>

            <Pressable
              style={styles.homeButton}
              onPress={() => navigation.navigate("Task Manager")}
            >
              <Text style={styles.homeButtonText}>Back to Home</Text>
            </Pressable>
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
    paddingHorizontal: 16,
    paddingTop: 10,
  },

  wrapper: {
    width: "100%",
  },

  pageTitle: {
    fontWeight: "800",
    color: "#0F172A",
  },

  pageSubtitle: {
    fontSize: 15,
    color: "#64748B",
    marginTop: 4,
    marginBottom: 18,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 22,
    boxShadow: "0px 4px 10px rgba(0,0,0,0.05)",
    elevation: 3,
  },

  formContainer: {
    marginTop: 10,
  },

  column: {
    flex: 1,
  },

  columnSpacing: {
    marginRight: 16,
  },

  inputGroup: {
    marginBottom: 14,
  },

  label: {
    fontSize: 14,
    fontWeight: "700",
    color: "#334155",
    marginBottom: 6,
  },

  input: {
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: "#0F172A",
  },

  saveButton: {
    backgroundColor: "#6366F1",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 16,
  },

  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },

  homeButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#CBD5E1",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 12,
  },

  homeButtonText: {
    color: "#0F172A",
    fontSize: 16,
    fontWeight: "700",
  },
});
