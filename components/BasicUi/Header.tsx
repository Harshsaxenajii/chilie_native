import { usePathname, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header = ({ onToggleSidebar }: HeaderProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [showReturn, setShowReturn] = useState(false);

  const handleNavigate = () => {
    router.push("/auth/login");
  };

  const handleGoBack = () => {
    router.back();
  };

  useEffect(() => {
    // Check if pathname includes 'dashboard/'
    if (pathname?.includes("dashboard/")) {
      setShowReturn(true);
    } else {
      setShowReturn(false);
    }
  }, [pathname]);

  return (
    <View className="xl:flex justify-end items-center">
      {/* Desktop Header */}
      <View className="hidden relative w-full lg:flex flex-row gap-8 justify-end items-center px-5 md:px-10 xl:pr-5 py-5">
        {showReturn && (
          <TouchableOpacity
            className="flex flex-row gap-2 absolute left-[3%]"
            onPress={handleGoBack}
            activeOpacity={0.7}
          >
            <Image
              source={require("@/assets/icons/dashboard/right-arrow.png")}
              style={{
                width: 17,
                height: 20,
                transform: [{ rotate: "180deg" }],
              }}
              resizeMode="contain"
            />
            <Text className="underline">Return</Text>
          </TouchableOpacity>
        )}

        <Image
          source={require("@/assets/icons/dashboard/bell.png")}
          style={{ width: 20, height: 20 }}
          resizeMode="contain"
        />
        <Image
          source={require("@/assets/icons/dashboard/chat.png")}
          style={{ width: 20, height: 20 }}
          resizeMode="contain"
        />
        <View className="flex flex-row gap-2 items-center">
          <TouchableOpacity onPress={handleNavigate} activeOpacity={0.7}>
            <Image
              source={require("@/assets/icons/dashboard/profile.png")}
              style={{ width: 32, height: 32 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View>
            <Text className="text-xs font-semibold">
              Ricardo Martínez Valenzuela
            </Text>
            <Text className="text-xs">Supervisor Contratista Alcántara</Text>
          </View>
        </View>
        <Image
          source={require("@/assets/icons/dashboard/right-arrow.png")}
          style={{ width: 20, height: 20 }}
          resizeMode="contain"
        />
      </View>

      {/* Mobile Header */}
      <View className="flex lg:hidden w-full flex-row items-center justify-between py-4 px-5 bg-white">
        <View style={{ width: 40 }} />
        <Image
          source={require("@/assets/icons/logo.png")}
          style={{ width: 152, height: 40 }}
          resizeMode="contain"
        />
        <TouchableOpacity
          onPress={onToggleSidebar}
          activeOpacity={0.7}
          className="xl:hidden"
        >
          {/* Custom Menu Icon - Replace lucide-react Menu */}
          <View className="w-6 h-6 justify-center items-center">
            <View className="w-5 h-0.5 bg-black mb-1" />
            <View className="w-5 h-0.5 bg-black mb-1" />
            <View className="w-5 h-0.5 bg-black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

// ALTERNATIVE: If you want to use lucide-react-native (install it first)
// npm install lucide-react-native
// Then import like this:
// import { Menu } from "lucide-react-native";

// ALTERNATIVE 2: Create a reusable MenuIcon component
export const MenuIcon = ({
  size = 24,
  color = "#000",
}: {
  size?: number;
  color?: string;
}) => {
  const lineHeight = size / 12; // Makes lines proportional to size
  const lineWidth = size * 0.7; // 70% of the size

  return (
    <View
      style={{
        width: size,
        height: size,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: lineWidth,
          height: lineHeight,
          backgroundColor: color,
          marginBottom: size / 8,
        }}
      />
      <View
        style={{
          width: lineWidth,
          height: lineHeight,
          backgroundColor: color,
          marginBottom: size / 8,
        }}
      />
      <View
        style={{ width: lineWidth, height: lineHeight, backgroundColor: color }}
      />
    </View>
  );
};

// Usage with MenuIcon component:
// <TouchableOpacity onPress={onToggleSidebar} activeOpacity={0.7} className="xl:hidden">
//   <MenuIcon size={24} color="#000" />
// </TouchableOpacity>
