import { CardData } from "@/types/dashboard.types";
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

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
        width: 260,
        minHeight: 160,
        justifyContent: "space-between",
        // shadowColor: "#000",
        // shadowOpacity: 0.1,
        // shadowRadius: 3,
        // elevation: 2,
      }}
    >
      {/* Title */}
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}
      >
        <Text style={{ fontSize: 16, fontWeight: "600" }}>{name}</Text>
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
