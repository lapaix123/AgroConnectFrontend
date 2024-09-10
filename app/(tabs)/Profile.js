import { Text } from "@/components/Text";
import { View } from "@/components/View";
import React from "react";
import { StyleSheet, Image } from "react-native";

const Notifications = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }} // Replace with actual image URL
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>mus_lois</Text>
        <Text style={styles.profileEmail}>musimentalois@gmail.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.notificationItem}>
          <Text style={styles.notificationText}>You have a new message.</Text>
        </View>
        <View style={styles.notificationItem}>
          <Text style={styles.notificationText}>Your profile was viewed 5 times today.</Text>
        </View>
      </View>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profileEmail: {
    fontSize: 16,
    color: "#666",
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  notificationItem: {
    padding: 15,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    marginBottom: 10,
  },
  notificationText: {
    fontSize: 16,
  },
});
