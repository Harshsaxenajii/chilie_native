import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  className?: string;
  tooltipClassName?: string;
  textClassName?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  text,
  className = "",
  tooltipClassName = "",
  textClassName = "",
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setVisible(true)}
      onPressOut={() => setVisible(false)}
    >
      <View className={`relative ${className}`}>
        {children}

        {visible && (
          <View
            className={`absolute left-full top-1/2 -translate-y-1/2 -translate-x-3 w-[150px] bg-white border border-gray-300 py-2 px-2 rounded ${tooltipClassName}`}
            style={styles.tooltipWrapper}
          >
            <Text className={`text-black text-sm ${textClassName}`}>
              {text}
            </Text>

            {/* Triangle */}
            <View style={styles.triangle} />
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  tooltipWrapper: {
    zIndex: 9999,
    elevation: 10,
  } as ViewStyle,

  triangle: {
    position: "absolute",
    top: "50%",
    right: "100%",
    marginTop: -6,
    width: 0,
    height: 0,
    borderTopWidth: 6,
    borderBottomWidth: 6,
    borderRightWidth: 6,
    borderStyle: "solid",
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
    borderRightColor: "#d1d5db",
  } as ViewStyle,
});
