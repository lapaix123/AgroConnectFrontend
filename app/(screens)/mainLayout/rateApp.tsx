import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const RateApp = () => {
  return (
    <View>
      <View className="py-[30%]">
        <Text className="text-center text-[#F7951C] font-bold text-lg">
          Yayy!
        </Text>
        <Text className="text-center text-[#F7951C] font-bold text-lg">
          We value all feedback,
        </Text>
        <Text className="text-center text-[#F7951C] font-bold text-lg">
          Please rate your experience
        </Text>
        <Text className="text-center text-[#F7951C] font-bold text-lg">
          below:{" "}
        </Text>
      </View>
      <View className="flex flex-row justify-center ">
        <AntDesign name="star" size={25} color="#F7951C" />
        <AntDesign name="star" size={25} color="#F7951C" />
        <AntDesign name="star" size={25} color="#F7951C" />
        <AntDesign name="star" size={25} color="#fff" />
        <AntDesign name="star" size={25} color="#fff" />
      </View>
      <View className="py-20">
        <Text className="text-center text-[#F7951C] font-bold text-lg">
          Thank you for helping us
        </Text>
        <Text className="text-center text-[#F7951C] font-bold text-lg">
          improve our service!
        </Text>
      </View>
      <View className="flex flex-row justify-center py-[20%]">
        <Text className="text-black font-extrabold text-4xl">Supa</Text>
        <Text className="text-[#F7951C] font-extrabold text-4xl">Menu</Text>
      </View>
    </View>
  );
};

export default RateApp;

const styles = StyleSheet.create({});
