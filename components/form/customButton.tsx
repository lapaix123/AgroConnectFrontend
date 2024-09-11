import { router } from "expo-router";
import React from "react";
import { Button } from "react-native-paper";
import { StyleSheet, Text, ViewStyle, TextStyle } from "react-native";

// Define the type for props
interface CustomButtonProps {
  href?: string;
  buttonText: string;
  onPress?: () => void; // Include the onPress prop
  style?: ViewStyle; // Use style prop instead of className
}

// Define custom styles
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#026338",
    justifyContent: "center",
    height: 54,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default function CustomButton({
  href,
  buttonText,
  onPress,
  style, // Accept style prop
}: CustomButtonProps) {
  // Function to handle button press
  const handlePress = () => {
    if (onPress) {
      onPress(); // Call the passed onPress function
    }
    if (href) {
      router.push(href); // Navigate if href is provided
    }
  };

  return (
    <Button
      mode="contained"
      onPress={handlePress}
      style={[styles.button, style]} // Combine default styles with optional style prop
    >
      <Text style={styles.text}>{buttonText}</Text>
    </Button>
  );
}
