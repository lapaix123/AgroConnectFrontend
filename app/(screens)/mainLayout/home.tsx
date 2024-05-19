import { Image } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import qrcode from "@/assets/images/qrcode.png";
import { View } from "@/components/View";
import { Text } from "@/components/Text";
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
      <View className="bg-[#F7951C]">
        <Text className="text-center py-14 font-extrabold text-xl text-black">
          Or
        </Text>
      </View>
      <View className="justify-center items-center bg-[#F7951C]">
        <Image source={qrcode} />
      </View>
      <View className="bg-[#F7951C]">
        <Text className="font-bold text-lg text-center py-8 text-black">
          Scan, Pay & Enjoy!
        </Text>
      </View>
    </View>
  );
};

export default HomeMain;
