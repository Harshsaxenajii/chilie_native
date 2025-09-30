import { useTranslation } from "react-i18next";
// import { Search } from "../ui/Search";
import { useState } from "react";
import { Text, View } from "react-native";

import React from "react";
import { SearchBox } from "../BasicUi/Search";

const DashboardHeader = () => {
  const { t } = useTranslation();

  const [searchName, setSearchName] = useState(" ");

  return (
    <View className="flex flex-row justify-between py-2 pl-4">
      <Text className="mb-3 text-lg font-bold">{t(`header.dashboard`)}</Text>
      <View className="w-1/2 items-end">
        <SearchBox
          placeholder={t(`common.placeholder`)}
          searchName={searchName}
          setSearchName={setSearchName}
        />
      </View>
    </View>
  );
};

export default DashboardHeader;
