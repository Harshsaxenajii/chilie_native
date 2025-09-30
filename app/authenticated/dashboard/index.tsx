import DashboardHeader from "@/components/DashboardComp/DashboardHeader";
import { StatsGrid } from "@/components/DashboardComp/StatsGrid";
import { CardData } from "@/types/dashboard.types";
import React from "react";
import { View } from "react-native";

const cards: CardData[] = [
  {
    name: "Global Risk",
    tooltip: "Tooltips lorem ipsum",
    percentage: 12,
    value: "$12",
    trend: "up",
    description: "Low Risk | 4 Apps",
  },
  {
    name: "Compliance progress",
    tooltip: "Tooltips lorem ipsum",
    percentage: 8,
    value: "23",
    trend: "up",
    description: "Substract clip union",
  },
  {
    name: "Bounce Rate",
    tooltip: "Users who left quickly",
    percentage: 5,
    value: "32%",
    trend: "down",
    description: "Lower is better",
  },
  {
    name: "Orders",
    tooltip: "Completed purchases",
    percentage: 3,
    value: "1,245",
    trend: "up",
    description: "New orders placed",
  },
];

const index = () => {
  return (
    <View className="bg-[#f2f2f2]">
      <DashboardHeader />
      <StatsGrid cards={cards} />
      {/* <TeamPerformance /> */}
    </View>
  );
};

export default index;
