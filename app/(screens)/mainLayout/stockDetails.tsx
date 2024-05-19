import { Image, TouchableOpacity } from "react-native";
import React from "react";
import order from "@/assets/images/order.png";
import call from "@/assets/images/call.png";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import { View } from "@/components/View";
import { Text } from "@/components/Text";
import { useGoBack } from "@/hooks/useGoback";
import { useThemeColor } from "@/hooks/useThemeColor";

const StockDetails = () => {
  const foodType = ["Appetizer", "Starter", "Main", "Dessert", "Drink"];
  const goBack = useGoBack();
  const color = useThemeColor(
    {
      light: "#000",
      dark: "#fff",
    },
    "text"
  );
  return (
    <View className="px-4 h-screen">
      <TouchableOpacity onPress={goBack} className="mt-14">
        <AntDesign name="left" size={24} color="#F7951C" />
      </TouchableOpacity>
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
            <AntDesign name="right" size={20} color={color} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default StockDetails;
