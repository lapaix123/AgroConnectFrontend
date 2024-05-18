import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import card from "@/assets/images/card.png";
import { paymentData } from "./utils/data.dummy";
import { Button } from "react-native-paper";
import { router } from "expo-router";
const Checkout = () => {
  const [isCreditCardPressed, setIsCreditCardPressed] = useState(true);
  const [isMobileCashPressed, setIsMobileCashPressed] = useState(false);

  return (
    <View className="">
      <View className="h-64 w-[96%] bg-white shadow-lg shadow-[#d4f4e5] rounded-3xl px-6">
        <TouchableOpacity className="bg-gray-100 rounded-xl h-12 w-12 justify-center items-center mt-14">
          <AntDesign name="left" size={24} color="#34d48b" />
        </TouchableOpacity>
        <View className="flex flex-row justify-between py-4">
          <View className="flex flex-row items-center">
            <Text className="font-bold text-xl">Checkout</Text>
            <Image source={card} className="h-6 w-14" />
          </View>
          <View className="">
            <Text className="font-bold text-lg text-[#34d48b]">Frw 16,000</Text>
            <Text className=" text-sm text-gray-400">Including VAT (18%)</Text>
          </View>
        </View>
        <View className="flex flex-row bg-[#34d48b]  absolute -bottom-4 rounded-xl left-5 ">
          <TouchableOpacity
            style={[styles.button, isCreditCardPressed ? styles.pressed : {}]}
            onPress={() => {
              setIsMobileCashPressed(false);
              setIsCreditCardPressed(true);
            }}
          >
            <Text
              style={{ color: isCreditCardPressed ? "black" : "white" }}
              className="font-bold"
            >
              Credit card
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, isMobileCashPressed ? styles.pressed : {}]}
            onPress={() => {
              setIsCreditCardPressed(false);
              setIsMobileCashPressed(true);
            }}
          >
            <Text
              style={{ color: isMobileCashPressed ? "black" : "white" }}
              className="font-bold"
            >
              Mobile & Cash
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="mt-4">
        {paymentData.map((item: any, index: any) => (
          <TouchableOpacity
            key={index}
            className="flex flex-row py-3 mt-8 px-4 w-full"
          >
            <View className=" flex flex-row items-center">
              <Image source={item.image} className=" h-20 w-28" />
              <Text className="text-lg font-bold pl-12">
                {item.paymentType}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        <Text className="text-center text-gray-500 w-5/6 mx-auto text-xs py-4">
          We will send you an order details to your email after the successful
          payment
        </Text>
      </View>
      <Button
        mode="contained"
        icon="lock"
        onPress={() => router.push("(screens)/mainLayout/paymentStatus")}
        style={{
          backgroundColor: "#34d48b",
          justifyContent: "center",
          height: 54,
          width: "90%",
        }}
        className="mx-auto font-bold"
      >
        Pay for the order
      </Button>
    </View>
  );
};

export default Checkout;
const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },
  pressed: {
    backgroundColor: "white",
  },
});
