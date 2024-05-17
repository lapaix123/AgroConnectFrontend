import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import qrcode from "@/assets/images/qrcode.png";
const HomeMain = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <View className="bg-[#F7951C] h-full px-4">
      <Searchbar
        placeholder="Search for your favorite restaurant"
        onChangeText={setSearchQuery}
        value={searchQuery}
        mode="bar"
        className="px-4"
        style={{ backgroundColor: "#fff", marginTop: "30%", height: 54 }}
      />
      <View>
        <Text className="text-center py-14 font-extrabold text-xl">Or</Text>
      </View>
      <View className="justify-center items-center">
        <Image source={qrcode} />
      </View>
      <View>
        <Text className="font-bold text-lg text-center py-8">
          Scan, Pay & Enjoy!
        </Text>
      </View>
    </View>
  );
};

export default HomeMain;
