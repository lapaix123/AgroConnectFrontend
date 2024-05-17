import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import order from "@/assets/images/order.png";
import call from "@/assets/images/call.png";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

const StockDetails = () => {
  const foodType = ["Appetizer", "Starter", "Main", "Dessert", "Drink"];
  return (
    <View>
      <Text className="text-[#F7951C] font-bold text-lg text-center py-16">
        Choose Kigali
      </Text>
      <View className="flex flex-row justify-evenly">
        <View>
          <View className="flex flex-row gap-x-4">
            <Image source={order} className="h-14 w-14" />
            <Text className="text-lg">N8</Text>
          </View>
          <Text className="text-lg font-bold">Ordered</Text>
        </View>
        <View className=" w-[1px] bg-[#F7951C]"></View>
        <View>
          <Image source={call} className="h-14 w-14" />
          <Text className="text-lg">Call waiter</Text>
        </View>
      </View>
      <View className="py-4">
        <Text className="font-bold text-[#F7951C] text-3xl text-center py-5">
          menu
        </Text>
        {foodType.map((item: any, index: any) => (
          <TouchableOpacity
            key={index}
            className="flex flex-row items-center justify-between rounded-lg px-20 py-4 mt-2 "
            onPress={() => {
              item === "Drink"
                ? router.push("(tabs)/cart")
                : console.log("pressed");
            }}
          >
            <Text className="text-md">{item}</Text>
            <AntDesign name="right" size={20} color="" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default StockDetails;
