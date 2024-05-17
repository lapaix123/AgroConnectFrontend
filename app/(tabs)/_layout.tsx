import { Tabs } from "expo-router";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="home" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notification",
          tabBarIcon: ({ color, focused }) => (
            <EvilIcons name="bell" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="stock"
        options={{
          headerShown: true,
          title: "Stock",
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="inbox" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="clock"
        options={{
          title: "Clock",
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="clockcircleo" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, focused }) => (
            <Feather name="shopping-cart" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
