"use client"

import { usePathname } from "expo-router"
import { useTranslation } from "react-i18next"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
  mobileTitle?: string
  isMobile?: boolean
}

const menuItems = [
  { labelKey: "dashboard", path: "/" },
  { labelKey: "applications", path: "/applications" },
  { labelKey: "reporters", path: "/reporters" },
  { labelKey: "monitoreo", path: "/monitoreo" },
  { labelKey: "automatizaciones", path: "/automatizaciones" },
  { labelKey: "chats IA", path: "/chats" },
]

export const Sidebar = ({ collapsed, onToggle, isMobile }: SidebarProps) => {
  const { t } = useTranslation()
  const pathname = usePathname()

  return (
    <View className={`bg-white text-black flex flex-col h-full ${collapsed ? "w-[236px]" : "lg:w-[236px] w-full"}`}>
      {/* Logo Section - Desktop Only */}
      <View className="h-20 hidden lg:flex flex-row items-center justify-center border-b border-gray-200">
        <View className="flex flex-row w-full items-center justify-between px-4">
          <View className="w-[18px]" />
          <View className="flex items-center">
            <Image
              source={require("@/assets/icons/sidebar/sidebar.png")}
              style={{ width: 128, height: 40 }}
              resizeMode="contain"
            />
          </View>
          <TouchableOpacity onPress={onToggle} className="p-2" activeOpacity={0.7}>
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
        className="flex-1 lg:px-4 px-6 pt-6 lg:pt-4"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 16 }}
      >
        <Text className="lg:px-4 px-0 mb-4 lg:mb-5 text-xs font-semibold text-gray-600 tracking-wide">GENERAL</Text>
        <View className="lg:space-y-1 space-y-0">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.path
            return (
              <View
                className={`lg:border-0 ${index !== menuItems.length - 1 ? "border-b border-gray-200" : ""}`}
                key={index}
              >
                <TouchableOpacity
                  className={`w-full flex items-start lg:px-4 px-0 py-4 lg:py-3 lg:rounded-lg ${
                    isActive ? "lg:bg-gray-100" : ""
                  }`}
                  activeOpacity={0.7}
                >
                  <Text
                    className={`text-base lg:text-sm capitalize ${
                      isActive ? "font-bold lg:font-semibold text-black" : "font-medium text-gray-700"
                    }`}
                  >
                    {item.labelKey}
                  </Text>
                </TouchableOpacity>
              </View>
            )
          })}
        </View>
      </ScrollView>

      {/* Bottom Logo Section */}
      <View className="border-t border-gray-200 lg:border-0 px-6 lg:px-4 py-5 lg:py-4 flex flex-row items-center justify-between lg:justify-center">
        <Image source={require("@/assets/icons/logo.png")} style={{ width: 138, height: 35 }} resizeMode="contain" />
        {isMobile && (
          <TouchableOpacity onPress={onToggle} className="p-2 -mr-2" activeOpacity={0.7}>
            <Image
              source={require("@/assets/icons/dashboard/cross.png")}
              style={{ width: 19, height: 19 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}
