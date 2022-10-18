import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function CustomButton({ bg, onPress, color, text }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: bg,
        padding: 10,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginTop: 10,
        borderWidth: 1,
        borderColor: color,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 18,
          color: color,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
