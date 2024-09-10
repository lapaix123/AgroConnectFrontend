import { Pressable, StyleSheet, View, Text, Alert, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import axios from 'axios';
import CustomInput from "@/components/form/customInput";
import CustomButton from "@/components/form/customButton";

const Signup = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!fullName || !phoneNumber || !email) {
      Alert.alert("Error", "Please fill all the fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('https://your-backend-url.com/api/signup', {
        fullName,
        phoneNumber,
        email,
      });

      if (response.data.success) {
        Alert.alert("Success", "Signup successful!");
        navigation.navigate("Login");
      } else {
        Alert.alert("Error", response.data.message);
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred during signup. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.formContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Agri</Text>
          <Text style={styles.titleHighlight}>Connect</Text>
        </View>
        <View>
          <Text style={styles.welcomeText}>Welcome...</Text>
          <Text style={styles.instructionText}>
            Please fill in the information
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <CustomInput
            left={<TextInput.Icon icon="account" />}
            label="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
          <CustomInput
            left={<TextInput.Icon icon="phone" />}
            label="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <CustomInput
            left={<TextInput.Icon icon="mail" />}
            label="Your Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton href="" buttonText="Proceed" onPress={handleSignup} />
        </View>
        {loading && <ActivityIndicator size="large" color="#026338" />}
        <View style={styles.orContainer}>
          <View style={styles.divider}></View>
          <Text>OR</Text>
          <View style={styles.divider}></View>
        </View>
        <View>
          <Text style={styles.signInText}>
            If you have a PMG account
          </Text>
        </View>
        <View>
          <CustomButton href="" buttonText="Sign In" onPress={() => navigation.navigate('Login')} />
        </View>
        <View style={styles.registerContainer}>
          <Text>Don't have account?</Text>
          <Pressable onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}>Register</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};




export default Signup;
