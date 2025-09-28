import { useRouter } from "expo-router";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, View } from "react-native";
import ForgotComp from "../../components/LoginComp/ForgotComp";
import LoginComp from "../../components/LoginComp/LoginComp";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [forgot, setForgot] = useState(false);

  const router = useRouter();
  const { t } = useTranslation();

  const handleLogin = () => {
    if (username.trim()) {
      router.push("/");
    } else {
      alert(t("login.enterUsername"));
    }
  };

  const handleForgotClick = () => {
    setForgot(true);
  };

  return (
    <View className="flex-1 justify-center items-center bg-white px-4">
      <View className="flex flex-col max-w-[280px]  w-full gap-6 justify-center items-center -mt-20">
        <Image
          source={require("@/assets/icons/logo.png")}
          style={{ width: 172, height: 44 }}
          resizeMode="contain"
        />

        {!forgot ? (
          <LoginComp
            handleLogin={handleLogin}
            password={password}
            setPassword={setPassword}
            setUsername={setUsername}
            username={username}
            onForgotPassword={handleForgotClick}
          />
        ) : (
          <View className="w-full px-3 gap-7">
            <ForgotComp
              navigate={(path: string) => router.push("/auth/login" as any)}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Login;
