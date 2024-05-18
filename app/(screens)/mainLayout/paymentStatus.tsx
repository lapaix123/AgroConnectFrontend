import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import success from "@/assets/images/success.png";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "@/components/form/customButton";
const PaymentStatus = () => {
  return (
    <View>
      <View className="flex flex-row justify-center mt-[30%]">
        <Image source={success} className="h-64 w-64" />
      </View>
      <View className="px-4">
        <Text className="font-bold text-center text-xl text-[#F7951C]">
          Payment Success, Yayy!
        </Text>
        <Text className="text-center  text-gray-400 px-8 py-3">
          We will se order details and invoice in your contact no. and
          rregistered email
        </Text>
        <TouchableOpacity className="flex flex-row items-center justify-center py-4">
          <Text className="text-[#F7951C]">Check details</Text>
          <AntDesign name="arrowright" size={20} color="#F7951C" />
        </TouchableOpacity>
        <CustomButton
          buttonText="Download Invoice"
          href={"(screens)/mainLayout/rateApp"}
        />
      </View>
      <View className="flex flex-row justify-center py-[20%]">
        <Text className="text-black font-extrabold text-4xl">Supa</Text>
        <Text className="text-[#F7951C] font-extrabold text-4xl">Menu</Text>
      </View>
    </View>
  );
};

export default PaymentStatus;
