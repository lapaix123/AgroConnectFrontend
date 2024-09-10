import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";

export type StaticRoutes = any;

interface CustomButtonProps {
  href?: StaticRoutes;
  buttonText: string;
  className?: string;
}

export default function CustomButton({
  href,
  buttonText,
  className,
}: CustomButtonProps) {
  return (
    <Button
      mode="contained"
      onPress={() => router.push(href)}
      style={{
        backgroundColor: "#026338",
        justifyContent: "center",
        height: 54,
      }}
    >
      {buttonText}
    </Button>
    // <TouchableOpacity
    //   onPress={() => router.push(href)}
    //   className={`flex m-auto items-center w-full rounded-xl bg-[#F7951C] py-5 font-bold mt-5 ${className}`}
    // >
    //   <Text className="text-white font-bold p-auto">{buttonText}</Text>
    // </TouchableOpacity>
  );
}
