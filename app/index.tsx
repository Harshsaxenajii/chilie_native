import i18n from "@/i18n";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Pressable, Text, View } from "react-native";

const index = () => {
  const router = useRouter();
  const selectEn = () => {
    i18n.changeLanguage("en-CL");
  };

  useEffect(() => {
    selectEn();
  }, []);
  return (
    <View className="flex-1 items-center justify-center h-500 bg-red-300">
      <Text>Main Screen</Text>
      <Text>Just left this screen for first authentication start page</Text>
      <Text className="text-black">Test Text</Text>

      <Pressable
        onPress={() => router.push("/auth/login")}
        className="w-50 h-100 p-2 bg-black rounded-md mt-10 "
      >
        <Text className="text-white">go to login</Text>
      </Pressable>
    </View>
  );
};

export default index;
