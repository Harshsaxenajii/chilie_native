import { usePathname } from "expo-router";
import { useTranslation } from "react-i18next";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  mobileTitle?: string;
  isMobile?: boolean;
}

const menuItems = [
  { labelKey: "dashboard", path: "/" },
  { labelKey: "applications", path: "/applications" },
  { labelKey: "reporters", path: "/reporters" },
  { labelKey: "monitoreo", path: "/monitoreo" },
  { labelKey: "automatizaciones", path: "/automatizaciones" },
  { labelKey: "chats IA", path: "/chats" },
];

export function Sidebar({ collapsed, onToggle, isMobile }: SidebarProps) {
  const { t } = useTranslation();
  const pathname = usePathname();

  return (
    <View
      className={`bg-white text-black flex flex-col-reverse lg:flex-col h-full ${
        collapsed ? "w-[236px]" : "lg:w-[236px] w-screen"
      }`}
    >
      {/* Logo Section - Desktop */}
      <View className="h-20 hidden lg:flex flex-row items-center justify-center border-b border-white/10">
        <View className="flex flex-row w-full items-center justify-between">
          <View />
          <View className="flex items-center">
            <Image
              source={require("@/assets/icons/sidebar/sidebar.png")}
              style={{ width: 128, height: 40 }}
              resizeMode="contain"
            />
          </View>
          <TouchableOpacity
            onPress={onToggle}
            className="pr-3"
            activeOpacity={0.7}
          >
            <Image
              source={require("@/assets/icons/sidebar/left-arrow.png")}
              style={{ width: 18, height: 15 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Navigation */}
      <ScrollView
        className="flex-1 px-8 pt-3 xl:border-t border-gray-200"
        showsVerticalScrollIndicator={false}
      >
        <Text className="xl:px-8 mb-3 xl:mb-5 ml-5 font-semibold">GENERAL</Text>
        <View className="space-y-5">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <View
                className={` xl:border-0 pb-2 xl:pb-0 ${
                  index !== menuItems.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
                key={index}
              >
                <View>
                  <TouchableOpacity
                    className={`w-full flex items-center px-0 xl:px-8 ${
                      isActive ? "font-light" : "text-xs"
                    }`}
                    activeOpacity={0.7}
                  >
                    <Text
                      className={`text-sm capitalize ${
                        isActive ? "font-bold text-lg" : "font-medium text-base"
                      }`}
                    >
                      {item.labelKey}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>

      {/* Bottom Logo Section */}
      <View className="pb-4 xl:pr-0 pr-6 xl:py-4 py-6 flex flex-row items-center justify-between lg:justify-center">
        <View className="block lg:hidden" />
        <Image
          source={require("@/assets/icons/logo.png")}
          style={{ width: 138, height: 35 }}
          resizeMode="contain"
        />
        {isMobile && (
          <TouchableOpacity onPress={onToggle} activeOpacity={0.7}>
            <Image
              source={require("@/assets/icons/dashboard/cross.png")}
              style={{ width: 19, height: 19 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
