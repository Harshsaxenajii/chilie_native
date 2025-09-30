import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";

interface SearchBoxProps {
  searchName: string;
  setSearchName: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
}

export const SearchBox: React.FC<SearchBoxProps> = ({
  searchName,
  setSearchName,
  placeholder = "Look for...",
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {/* <Search size={18} color="black" /> */}
        <Image
          source={require("@/assets/icons/dashboard/search.png")}
          className="mt-[3px]"
          style={{ width: 15, height: 15 }}
        ></Image>
      </View>
      <TextInput
      className="text-sm"
        value={searchName.trim()}
        onChangeText={(text) => setSearchName(text)}
        placeholder={placeholder}
        placeholderTextColor="black"
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    maxWidth: 240,
    position: "relative",
    justifyContent: "center",
  },
  iconContainer: {
    position: "absolute",
    left: 12,
    top: "50%",
    transform: [{ translateY: -10 }],
    pointerEvents: "none",
  },
  input: {
    height: 37,
    paddingLeft: 36,
    paddingRight: 16,
    fontSize: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 40,
    color: "black",
    backgroundColor: "white",
  },
});
