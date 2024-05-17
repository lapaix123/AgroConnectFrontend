import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-paper";
import CustomInput from "@/components/form/customInput";
import CustomButton from "@/components/form/customButton";

const Signup = () => {
  return (
    <View className="w-full ">
      <View className=" h-40 bg-[#F7951C]"></View>
      <View className="rounded-t-3xl bg-white absolute top-32 px-4 py-8 ">
        <View className="flex flex-row justify-center py-4">
          <Text className="text-black font-extrabold text-3xl">Supa</Text>
          <Text className="text-[#F7951C] font-extrabold text-3xl">Menu</Text>
        </View>
        <View>
          <Text className="text-[#7ea5f39e] font-bold text-lg text-center">
            Welcome...
          </Text>
          <Text className="text-gray-600 font-bold text-sm text-center py-2">
            Please fill in the information
          </Text>
        </View>
        <View className="py-4">
          <CustomInput
            left={<TextInput.Icon icon="account" />}
            label="Full Name"
          />
          <CustomInput
            left={<TextInput.Icon icon="phone" />}
            label="Phone Number"
          />
          <CustomInput
            left={<TextInput.Icon icon="mail" />}
            label="Your Email"
          />
        </View>
        <View className="py-5">
          <CustomButton href="" buttonText="Proceed" />
        </View>
        <View className="flex flex-row items-center gap-x-2">
          <View className="h-[1px] w-[45%] bg-gray-200"></View>
          <Text>OR</Text>
          <View className="h-[1px] w-[45%] bg-gray-200"></View>
        </View>
        <View>
          <Text className="text-center py-4 text-gray-500">
            If you have a PMG account
          </Text>
        </View>
        <View>
          <CustomButton href="" buttonText="Sign In" />
        </View>
        <View className="flex flex-row py-4 justify-center">
          <Text>Don't have account?</Text>
          <Pressable>
            <Text className="text-[#F7951C]">Register</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Signup;
