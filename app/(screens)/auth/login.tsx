import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-paper";
import CustomInput from "@/components/form/customInput";
import CustomButton from "@/components/form/customButton";
import { TouchableOpacity } from "react-native";
import google from "@/assets/images/google.png";
import facebook from "@/assets/images/facebook.png";
import { router } from "expo-router";

const Login = () => {
  return (
    <View className="w-full ">
      <View className=" h-40 bg-[#F7951C]"></View>
      <View className="rounded-t-3xl h-screen bg-white absolute top-32 px-4 py-8 ">
        <View className="flex flex-row justify-center py-4">
          <Text className="text-black font-extrabold text-3xl">Supa</Text>
          <Text className="text-[#F7951C] font-extrabold text-3xl">Menu</Text>
        </View>
        <View>
          <Text className="text-[#0e244e9e] font-bold text-lg text-center">
            Welcome...
          </Text>
          <Text className="text-gray-600 font-bold text-sm text-center py-2">
            Sign In to continue
          </Text>
        </View>
        <ScrollView className="" showsVerticalScrollIndicator={false}>
          <View className="py-4">
            <CustomInput
              left={<TextInput.Icon icon="mail" />}
              label="Your Email"
            />
            <CustomInput
              left={<TextInput.Icon icon="lock" />}
              label="Password"
            />
          </View>
          <View className="py-3">
            <CustomButton href="(tabs)" buttonText="Sign In" />
          </View>
          <View className="flex flex-row items-center gap-x-2">
            <View className="h-[1px] w-[45%] bg-gray-200"></View>
            <Text>OR</Text>
            <View className="h-[1px] w-[45%] bg-gray-200"></View>
          </View>
          <View>
            <TouchableOpacity
              className="py-4 border-[1px] w-full flex m-auto border-gray-200 rounded-lg mt-4 mb-2"
              onPress={() => console.log("pressed")}
            >
              <View className="flex flex-row justify-center gap-2 bg-transparent">
                <Image source={google} style={{ height: 20, width: 20 }} />
                <Text className="text-center text-[#626262">
                  Login with Google
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              className="py-4 border-[1px] w-full flex m-auto border-gray-200 rounded-lg mt-2 mb-2"
              onPress={() => console.log("pressed")}
            >
              <View className="flex flex-row justify-center gap-2 bg-transparent">
                <Image source={facebook} style={{ height: 20, width: 20 }} />
                <Text className="text-center text-[#626262">
                  Login with Facebook
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text className="text-[#F7951C] text-center">Forgot password?</Text>
          </View>
          <View className="flex flex-row py-4 justify-center">
            <Text>Don't have account?</Text>
            <Pressable onPress={() => router.push("/(screens)/auth/signup")}>
              <Text className="text-[#F7951C]">Register</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
