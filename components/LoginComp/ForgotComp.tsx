import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity, View } from "react-native";
import Button from "../BasicUi/Button";
import Input from "../BasicUi/Input";

// Define props interface
interface ForgotCompProps {
  navigate: (path: string) => void; // ✅ type for navigate
}

const ForgotComp: React.FC<ForgotCompProps> = ({ navigate }) => {
  const [step, setStep] = useState(1);
  const { t } = useTranslation();

  return (
    <View className="w-full">
      {step === 1 && (
        <View className=" gap-4 ">
          <Text className="text-base text-black mt-3 text-center">
            {t(`auth.forgotPassword.heading1`)}
          </Text>

          <View className="flex-row items-center gap-3 ">
            <Text className="text-base text-black whitespace-nowrap">
              +56 9
            </Text>
            <Input keyboardType="numeric" style={{ flex: 1 }} placeholder="" />
          </View>

          <Text className="text-base text-black leading-6 w-full text-center">
            {t(`auth.forgotPassword.desc1`)}
          </Text>

          <View className="flex-row gap-4 w-full ">
            <Button
              onPress={() => navigate("/login")}
              variant="outline"
              style={{ flex: 1 }}
              title={t(`auth.forgotPassword.cancel`)}
            />
            <Button
              onPress={() => setStep((prev) => prev + 1)}
              style={{ flex: 1 }}
              title={t(`auth.forgotPassword.accept`)}
            />
          </View>
        </View>
      )}

      {step === 2 && (
        <View className=" gap-4">
          <Text className="text-base text-black mt-3 w-full text-center">
            {t(`auth.forgotPassword.heading2`)}
          </Text>

          <View className="gap-3">
            <Input placeholder="" />
          </View>

          <View className="flex-row gap-4 my-2 flex-1">
            <Button
              variant="outline"
              style={{ flex: 1 }}
              title={t(`auth.forgotPassword.cancel`)}
            />
            <Button
              onPress={() => setStep((prev) => prev + 1)}
              style={{ flex: 1 }}
              title={t(`auth.forgotPassword.accept`)}
            />
          </View>

          <Text className="text-sm text-black leading-6 sm:mt-0 mt-10 text-center">
            {t(`auth.forgotPassword.desc2`)}
          </Text>

          <TouchableOpacity className="self-center mt-2">
            <Text className="text-md text-[#3B3B3B] underline">Send Again</Text>
          </TouchableOpacity>
        </View>
      )}

      {step === 3 && (
        <View className=" gap-4">
          <Text className="text-[14px] text-black text-center">
            {t(`auth.forgotPassword.heading3`)}
          </Text>

          <Text className="text-base text-black text-[14px] text-center leading-6 mx-2">
            {t(`auth.forgotPassword.desc3`)}
          </Text>

          <View className="gap-1 items-start">
            <Text className="text-sm text-black font-normal">
              {t(`auth.forgotPassword.newpassDesc`)}
            </Text>
            <Input
              keyboardType="numeric"
              secureTextEntry
              placeholder={t(`auth.forgotPassword.placeholder`)}
              style={{ width: "100%" }}
            />
          </View>

          <View className="gap-1 items-start">
            <Text className="text-sm text-black font-normal">
              {t(`auth.forgotPassword.passAgin`)}
            </Text>
            <Input
              secureTextEntry
              placeholder={t(`auth.forgotPassword.placeholder`)}
              style={{ width: "100%" }}
            />
          </View>

          <View className="flex-row gap-4 justify-center items-end mt-1">
            <Button variant="outline" title={t(`auth.forgotPassword.cancel`)} />
            <Button
              onPress={() => setStep((prev) => prev + 1)}
              title={t(`auth.forgotPassword.accept`)}
            />
          </View>
        </View>
      )}

      {step === 4 && (
        <View className=" gap-4">
          <Text className="text-[16px] font-semibold text-black text-center">
            {t(`auth.forgotPassword.updated`)}
          </Text>

          <Text className="text-center text-[16px] text-black leading-6 my-2">
            {t(`auth.forgotPassword.desc4`)}
          </Text>

          <View className="items-center mt-2">
            <Button
              onPress={() => navigate("/auth/login")}
              title={t(`auth.forgotPassword.navigateLogin`)}
            />
          </View>
        </View>
      )}
    </View>
  );
};

export default ForgotComp;
