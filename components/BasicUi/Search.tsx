import { Search } from "lucide-react";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

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
        <Search size={18} color="black" />
      </View>
      <TextInput
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
    transform: [{ translateY: -10 }], // centers the icon vertically
    pointerEvents: "none",
  },
  input: {
    height: 32,
    paddingLeft: 36,
    paddingRight: 16,
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 40,
    color: "black",
    backgroundColor: "white",
  },
});
