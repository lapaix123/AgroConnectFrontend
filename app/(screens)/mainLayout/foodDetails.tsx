import { Image, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import React from "react";
import { drinksData } from "./utils/data.dummy";
import { router } from "expo-router";
import CustomButton from "@/components/form/customButton";
import { useGoBack } from "@/hooks/useGoback";
import { View } from "@/components/View";
import { Text } from "@/components/Text";

const FoodDetails = () => {
  const [value, setValue] = React.useState(1);
  const increment = () => {
    setValue(value + 1);
  };
  const decrement = () => {
    setValue(value - 1);
  };
  const goBack = useGoBack();
  return (
    <View className="px-4">
      <TouchableOpacity
        className="bg-gray-100 rounded-xl h-12 w-12 justify-center items-center mt-14"
        onPress={goBack}
      >
        <AntDesign name="left" size={24} color="#F7951C" />
      </TouchableOpacity>
      <View className=" items-end">
        <Text className="font-bold text-lg ">Choose Kigali</Text>
        <Text className="text-[#F7951C] text-lg">Drinks</Text>
      </View>
      {drinksData.map((item: any, index: any) => (
        <TouchableOpacity
          key={index}
          className="flex flex-row rounded-2xl bg-gray-200 py-4 mt-4 px-4"
          onPress={() => router.push("(screens)/mainLayout/stockDetails")}
        >
          <View className="h-24 w-24 rounded-2xl ">
            <Image source={item.image} className="h-24 w-24 rounded-2xl" />
          </View>
          <TouchableOpacity className="justify-center px-4 w-64">
            <Text className="text-xs text-black">{item.drink}</Text>
            <Text className="font-bold py-2 text-black">{item.place}</Text>
            <View className="flex flex-row justify-between py-1 items-center bg-gray-200">
              <Text className="text-xl font-bold text-[#F7951C] py-2">
                Frw 6,000
              </Text>
              <View className="flex flex-row items-center bg-white rounded-md px-2 h-7">
                <TouchableOpacity onPress={decrement}>
                  <AntDesign name="minus" size={17} color="#F7951C" />
                </TouchableOpacity>
                <Text className="px-2 text-lg text-black">{value}</Text>
                <TouchableOpacity onPress={increment}>
                  <AntDesign name="plus" size={17} color="#F7951C" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
      <TouchableOpacity className="flex flex-row items-center justify-center py-4">
        <Text className="text-[#F7951C]">More drinks</Text>
        <AntDesign name="arrowright" size={24} color="#F7951C" />
      </TouchableOpacity>
      <View className="flex flex-row justify-between py-4">
        <Text className="font-bold text-lg">Total</Text>
        <Text className="font-bold text-[#F7951C] text-lg">Frw 18,000</Text>
      </View>
      <CustomButton
        buttonText="Proceed to checkout"
        href="/(screens)/mainLayout/checkout"
      />
    </View>
  );
};

export default FoodDetails;
