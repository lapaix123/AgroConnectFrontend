import React, { useState } from "react";
import { StyleSheet, TextInput, FlatList, TouchableOpacity } from "react-native";
import { View } from "@/components/View";
import { Text } from "@/components/Text";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Clock = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Welcome to the chat!", id: "1", type: "received" },
    { text: "Connect with farmers", id: "2", type: "sent" },
  ]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = { text: message, id: Math.random().toString(), type: "sent" };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setMessage("");
    }
  };

  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageContainer,
        item.type === "sent" ? styles.sentMessage : styles.receivedMessage,
      ]}
    >
      <Text
        style={[
          styles.messageText,
          item.type === "sent" ? styles.sentMessageText : styles.receivedMessageText,
        ]}
      >
        {item.text}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <MaterialIcons name="send" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Clock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  messageContainer: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: "70%",
  },
  sentMessage: {
    backgroundColor: "green",
    alignSelf: "flex-end",
  },
  receivedMessage: {
    backgroundColor: "#e5e5e5",
    alignSelf: "flex-start",
  },
  messageText: {
    fontSize: 16,
  },
  sentMessageText: {
    color: "#fff",
  },
  receivedMessageText: {
    color: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
  },
  sendButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});
