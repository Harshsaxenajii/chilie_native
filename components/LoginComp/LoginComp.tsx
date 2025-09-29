import React from "react";
import { useTranslation } from "react-i18next";
import { Text, View } from "react-native";
import Button from "../BasicUi/Button";
import Input from "../BasicUi/Input";

interface LoginCompProps {
  username: string;
  password: string;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  handleLogin: () => void;
  onForgotPassword?: () => void;
}

const LoginComp: React.FC<LoginCompProps> = ({
  username,
  password,
  setUsername,
  setPassword,
  handleLogin,
  onForgotPassword,
}) => {
  const { t } = useTranslation();

  return (
    <View className=" px-5 w-full">
      {/* Username */}
      <View className="flex flex-col gap-2 mb-6">
        <Text className="text-gray-700 text-[14px] font-medium">
          {t(`auth.login.user`)}
        </Text>
        <Input
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      {/* Password */}
      <View className="flex flex-col gap-2 mb-6">
        <Text className="text-gray-700 text-[14px] font-medium">
          {t(`auth.login.password`)}
        </Text>
        <Input
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      {/* Login Button */}
      <View className="flex flex-col items-center mt-2">
        <Button
          variant="default"
          onPress={handleLogin}
          title={t(`auth.login.button`)} // ✅ only use title for text
        />

        {onForgotPassword && (
          <Text
            className="text-md mt-4 text-[#3B3B3B]"
            onPress={onForgotPassword}
          >
            {t(`auth.login.forgotPass`)}
          </Text>
        )}
      </View>
    </View>
  );
};

export default LoginComp;
