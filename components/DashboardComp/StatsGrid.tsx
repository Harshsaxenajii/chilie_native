import { CardData } from "@/types/dashboard.types";
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { Tooltip } from "../Ui/ToolTip";

interface StatsGridProps {
  cards: CardData[];
}

export function StatsGrid({ cards }: StatsGridProps) {
  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        data={cards}
        keyExtractor={(_, idx) => idx.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 12 }}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        renderItem={({ item }) => <StatsCard {...item} />}
      />
    </View>
  );
}

export const StatsCard = ({
  name,
  percentage,
  value,
  trend,
  tooltip,
  description,
}: CardData) => {
  const { t } = useTranslation();

  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 4,
        paddingVertical: 16,
        paddingHorizontal: 20,
        width: 285,
        minHeight: 165,
        justifyContent: "space-between",
      }}
    >
      {/* Title */}
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}
      >
        <Text style={{ fontSize: 16, fontWeight: "600" }}>{name}</Text>
        <View style={{ overflow: "visible", zIndex: 1000 }}>
          <Tooltip className="" text={tooltip}>
            <Image
              className="mx-4"
              source={require("@/assets/icons/dashboard/tooltip.png")}
              style={{ width: 20, height: 20 }}
              alt=""
            />
          </Tooltip>
        </View>
      </View>

      {/* Percentage and trend */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          marginBottom: 8,
        }}
      >
        <Text style={{ fontSize: 32, fontWeight: "700" }}>{percentage}%</Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 8 }}
        >
          {trend === "up" ? (
            <ArrowUp size={18} color="green" />
          ) : (
            <ArrowDown size={18} color="red" />
          )}
          <Text style={{ fontSize: 14, fontWeight: "600", marginLeft: 4 }}>
            {value}
          </Text>
        </View>
      </View>

      {/* Description */}
      <Text style={{ fontSize: 14, color: "#6b7280", marginBottom: 12 }}>
        {description}
      </Text>

      {/* Footer */}
      <TouchableOpacity
        style={{
          borderTopWidth: 1,
          borderColor: "#e5e7eb",
          paddingTop: 8,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        activeOpacity={0.6}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "500",
            textDecorationLine: "underline",
          }}
        >
          {t("common.viewDetail")}
        </Text>
        <ArrowRight size={18} color="black" />
      </TouchableOpacity>
    </View>
  );
};
