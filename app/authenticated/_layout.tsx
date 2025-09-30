import Header from "@/components/BasicUi/Header";
import { Sidebar } from "@/components/BasicUi/Sidebar";
import { Slot } from "expo-router";
import { useState } from "react";
import { Modal, Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";

export default function RootLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const { title } = usePageTitle();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-row bg-[#f2f2f2] flex-1">
        {/* Mobile Sidebar Modal */}
        <Modal
          visible={mobileMenuOpen}
          transparent
          animationType="fade"
          onRequestClose={() => setMobileMenuOpen(false)}
        >
          <Pressable
            className="flex-1 bg-black/60"
            onPress={() => setMobileMenuOpen(false)}
          >
            <View className="max-w-xs w-full h-full">
              <Pressable>
                <Sidebar
                  collapsed={false}
                  onToggle={toggleSidebar}
                  isMobile={true}
                />
              </Pressable>
            </View>
          </Pressable>
        </Modal>

        {/* Desktop Sidebar - Only visible on larger screens */}
        <View className="hidden lg:flex h-full">
          <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />
        </View>

        {/* Main Content */}
        <View className="flex-1 bg-[#f2f2f2]">
          {/* Header */}
          <View className="w-full lg:px-20 ">
            <Header onToggleSidebar={toggleMobileMenu} />
          </View>

          {/* Main Content Area - Full width with proper padding */}
          <View className="flex-1 px-0 md:px-10 xl:px-20 pt-8">
            <View className="w-full max-w-[98%] lg:max-w-[90%] mx-auto">
              <Slot />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
