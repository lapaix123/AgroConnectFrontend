import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { stockData } from "./utils/data.dummy";

const StockContent = () => {
  return (
    <ScrollView className="px-4 bg-white">
      <Text className="text-[#F7951C] py-4">Nearby Restaurant</Text>
      {stockData.map((item: any, index: any) => (
        <View
          key={index}
          className="flex flex-row w-full rounded-2xl bg-gray-200 py-4 mt-4 px-4"
        >
          <View className="h-24 w-24 rounded-2xl ">
            <Image source={item.image} className="h-24 w-24 rounded-2xl" />
          </View>
          <View className="justify-center px-4">
            <Text className="font-bold">{item.titleLocation}</Text>
            <Text>{item.stockContent}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default StockContent;
