import * as React from "react";
import {
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  children?: React.ReactNode;
  title?: string;
  className?: string;
  textClassName?: string;
}

const Button = React.forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  ButtonProps
>(
  (
    {
      className = "",
      textClassName = "",
      variant = "default",
      size = "default",
      children,
      title,
      disabled,
      style,
      ...props
    },
    ref
  ) => {
    // Base button styles
    const getButtonStyle = (): ViewStyle => {
      let baseStyle: ViewStyle = {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        opacity: disabled ? 0.5 : 1,
      };

      // Variant styles
      switch (variant) {
        case "default":
          baseStyle.backgroundColor = "#3B3B3B";
          break;
        case "secondary":
          baseStyle = {
            ...baseStyle,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            borderWidth: 1,
            borderColor: "rgba(229, 231, 235, 0.5)",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 2,
          };
          break;
        case "outline":
          baseStyle = {
            ...baseStyle,
            backgroundColor: "transparent",
            borderWidth: 2,
            borderColor: "#E5E7EB",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            // elevation: 2,
          };
          break;
        case "ghost":
          baseStyle.backgroundColor = "transparent";
          break;
      }

      // Size styles
      switch (size) {
        case "default":
          baseStyle.height = 33;
          baseStyle.width = 108;
          break;
        case "sm":
          baseStyle.height = 36;
          baseStyle.paddingHorizontal = 16;
          break;
        case "lg":
          baseStyle.height = 48;
          baseStyle.paddingHorizontal = 32;
          baseStyle.borderRadius = 12;
          break;
        case "icon":
          baseStyle.height = 44;
          baseStyle.width = 44;
          break;
      }

      return baseStyle;
    };

    // Base text styles
    const getTextStyle = (): TextStyle => {
      let baseTextStyle: TextStyle = {
        fontSize: 14,
        fontWeight: "600",
      };

      switch (variant) {
        case "default":
          baseTextStyle.color = "#FFFFFF";
          break;
        case "secondary":
        case "outline":
          baseTextStyle.color = "#374151";
          break;
        case "ghost":
          baseTextStyle.color = "#6B7280";
          break;
      }

      if (size === "lg") baseTextStyle.fontSize = 16;

      return baseTextStyle;
    };

    const buttonStyle = getButtonStyle();
    const textStyle = getTextStyle();

    return (
      <TouchableOpacity
        ref={ref}
        style={[buttonStyle, style]}
        disabled={disabled}
        activeOpacity={0.95}
        {...props}
        className={className}
      >
        {children ? (
          children
        ) : (
          <Text style={textStyle} numberOfLines={1} className={textClassName}>
            {title}
          </Text>
        )}
      </TouchableOpacity>
    );
  }
);

Button.displayName = "Button";

// Default export
export default Button;
