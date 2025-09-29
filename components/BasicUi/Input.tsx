import React, { forwardRef } from "react";
import { StyleProp, TextInput, TextInputProps, TextStyle } from "react-native";

export interface InputProps extends TextInputProps {
  className?: string;
  style?: StyleProp<TextStyle>;
}

const Input = forwardRef<TextInput, InputProps>(
  ({ className, style, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        className={className}
        style={[
          {
            height: 35,
            paddingHorizontal: 10,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: "#ccc",
          },
          style,
        ]}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
